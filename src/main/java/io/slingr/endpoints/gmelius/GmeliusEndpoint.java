package io.slingr.endpoints.gmelius;

import com.sun.scenario.effect.impl.sw.sse.SSEBlend_SRC_OUTPeer;
import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.exceptions.EndpointException;
import io.slingr.endpoints.framework.annotations.*;
import io.slingr.endpoints.services.AppLogs;
import io.slingr.endpoints.services.HttpService;
import io.slingr.endpoints.services.datastores.DataStore;
import io.slingr.endpoints.services.rest.RestMethod;
import io.slingr.endpoints.utils.Json;
import io.slingr.endpoints.ws.exchange.FunctionRequest;
import io.slingr.endpoints.ws.exchange.WebServiceRequest;
import io.slingr.endpoints.ws.exchange.WebServiceResponse;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Base64;
import java.util.Date;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

/**
 * Gmelius endpoint
 * <p/>
 * Created by jguardiola on 08/02/22.
 */
@SlingrEndpoint(name = "gmelius", functionPrefix = "_")
public class GmeliusEndpoint extends HttpEndpoint {
    private static final Logger logger = LoggerFactory.getLogger(GmeliusEndpoint.class);
    private static final String GMELIUS_API = "https://api.gmelius.com/public/v2";
    private static final long TOKEN_REFRESH_POLLING_TIME = TimeUnit.MINUTES.toMillis(50);

    @EndpointDataStore(name = TokenManager.DATA_STORE)
    private DataStore tokensDataStore;

    @EndpointProperty
    private String clientId;

    @EndpointProperty
    private String clientSecret;

    @EndpointProperty
    private String codeVerifier;

    @EndpointProperty
    private String codeChallenge;

    @EndpointProperty
    private String authorizationCode;

    @EndpointProperty
    private String redirect_uri;

    @EndpointProperty
    private String accessToken;

    @ApplicationLogger
    private AppLogs appLogger;

    private ScheduledExecutorService cleanerExecutor;

    private TokenManager tokenManager;

    @Override
    public String getApiUri() {
        return GMELIUS_API;
    }

    @Override
    public void endpointStarted() {
//        this.tokenManager = new TokenManager(httpService(), tokensDataStore, clientId, clientSecret, authorizationCode,  codeVerifier, redirect_uri);
//        Executors.newSingleThreadScheduledExecutor().scheduleWithFixedDelay(tokenManager::refreshQuickBooksToken, TOKEN_REFRESH_POLLING_TIME, TOKEN_REFRESH_POLLING_TIME, TimeUnit.MILLISECONDS);
    }

    @EndpointWebService(path = "/callback")
    public WebServiceResponse webhooks(WebServiceRequest request) {
        return HttpService.defaultWebhookResponse();
    }

    @EndpointFunction(name = "_get")
    public Json get(FunctionRequest request) {
        try {
            // continue with the default processor
            return defaultGetRequest(request);
        } catch (EndpointException restException) {
            if (checkInvalidTokenError(restException)) {
                //needs to refresh token
                tokenManager.refreshQuickBooksToken();
                return defaultGetRequest(request);
            }
            throw restException;
        }
    }

    @EndpointFunction(name = "_post")
    public Json post(FunctionRequest request) {
        try {
            // continue with the default processor
            return defaultPostRequest(request);
        } catch (EndpointException restException) {
            if (checkInvalidTokenError(restException)) {
                //needs to refresh token
                tokenManager.refreshQuickBooksToken();
                return defaultPostRequest(request);
            }
            throw restException;
        }
    }

    @EndpointFunction(name = "_put")
    public Json put(FunctionRequest request) {
        try {
            return defaultPutRequest(request);
        } catch (EndpointException restException) {
            if (checkInvalidTokenError(restException)) {
                tokenManager.refreshQuickBooksToken();
                return defaultPutRequest(request);
            }
            throw restException;
        }
    }

    @EndpointFunction(name = "_patch")
    public Json patch(FunctionRequest request) {
        try {
            return defaultPatchRequest(request);
        } catch (EndpointException restException) {
            if (checkInvalidTokenError(restException)) {
                tokenManager.refreshQuickBooksToken();
                return defaultPatchRequest(request);
            }
            throw restException;
        }
    }

    @EndpointFunction(name = "_delete")
    public Json delete(FunctionRequest request) {
        try {
            return defaultDeleteRequest(request);
        } catch (EndpointException restException) {
            if (checkInvalidTokenError(restException)) {
                tokenManager.refreshQuickBooksToken();
                return defaultDeleteRequest(request);
            }
            throw restException;
        }
    }

    private boolean checkInvalidTokenError(Exception e) {
        if (e instanceof EndpointException) {
            EndpointException restException = (EndpointException) e;
            return restException.getCode() != null && restException.getCode().getCode().equals("401");
        }
        return false;
    }

//    @EndpointFunction(name = "_PKCEgenerator")
//    public Json PKCEGenerator() {
//        String codeVerifier = null;
//        try {
//            codeVerifier = PKCEManager.generateCodeVerifier();
//            String codeChallenge = PKCEManager.generateCodeChallange(codeVerifier);
//        } catch (UnsupportedEncodingException | NoSuchAlgorithmException e) {
//            e.printStackTrace();
//            logger.error("Error generating PKCE strings");
//        }
//        Json res = Json.map();
//        res.set("codeVerifier", codeVerifier);
//        res.set("codeChallenge", codeChallenge);
//        return res;
//    }
}