---
title: Gmelius endpoint
keywords:
last_updated: February 02, 2022
tags: []
summary: "Detailed description of the API of the Gmelius endpoint."
sidebar: extensions_sidebar
permalink: endpoints_gmelius.html
folder: extensions
---

## Overview

This endpoint allows direct access to the [Gmelius API](https://developers.gmelius.com/),
however it provides shortcuts and helpers for most common use cases.

Some features available in this endpoint are:

- Authentication and authorization
- Direct access to the Gmelius API
- Helpers for API methods

## Configuration

In order to use the Gmelius you must create an app in the gemlius dashboard. There you need to put the redirect URI that will be shown in the endpoint configuration. Then, you will need to go through an Oauth Authroization process with the button "Connect to Gmelius". This will give the app an authorization code is necessary to get the authorization token.

### Client ID

This value comes from the app created in the Gmelius dashboard.

### Client secret

This value comes from the app created in the Gmelius dashboard.


### Code Verifier

String used for doing a PKCE validation when asking for an access token with the authorization code. This field will be automatically field when doing the Oauth connection

### Code Challenge

String used for doing a PKCE validation when asking for an access token with the authorization code. This field will be automatically field when doing the Oauth connection

### Authorization Code

This is used for obtaining the first access token with an authorization code. This field will be automatically field when doing the Oauth connection

### Registered URI

This URL has to be configured in the app created in the Gmelius dashboard.

### Webhook Url

This URL is the one that should be used when creating new webhooks.

### Connect To Gmelius

This button will trigger the Oauth connection process and fill in fields mentioned above.

# Javascript API

The Javascript API of the gmelius endpoint has three pieces:

- **HTTP requests**: These allows to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `POST`,`GET`,`PUT`,`DELETE`,`PATCH` requests to the [gmelius API](API_URL_HERE) like this:
```javascript
var response = app.endpoints.gmelius.post('/auth/conversations/:id/reply', body)
var response = app.endpoints.gmelius.get('/auth/sharedfolders')
var response = app.endpoints.gmelius.put('/auth/conversations/:id/assignee', body)
var response = app.endpoints.gmelius.delete('/auth/boards/:id')
var response = app.endpoints.gmelius.patch('/auth/tags/:id', body)
```

Please take a look at the documentation of the [HTTP endpoint](https://github.com/slingr-stack/http-endpoint#javascript-api)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the endpoint:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/token/introspection'
* HTTP Method: 'POST'
```javascript
app.endpoints.gmelius.token.introspection(body)
```
---
* API URL: '/token/revocation'
* HTTP Method: 'POST'
```javascript
app.endpoints.gmelius.token.revocation(body)
```
---
* API URL: '/auth/boards'
* HTTP Method: 'POST'
```javascript
app.endpoints.gmelius.boards.post(body)
```
---
* API URL: '/auth/boards/:id/columns'
* HTTP Method: 'POST'
```javascript
app.endpoints.gmelius.boards.columns.post(id, body)
```
---
* API URL: '/auth/boards/cards'
* HTTP Method: 'POST'
```javascript
app.endpoints.gmelius.boards.cards.post(body)
```
---
* API URL: '/auth/boards/cards/:id/tags'
* HTTP Method: 'POST'
```javascript
app.endpoints.gmelius.boards.cards.tags.post(id, body)
```
---
* API URL: '/auth/conversations/:id/notes'
* HTTP Method: 'POST'
```javascript
app.endpoints.gmelius.conversations.notes.post(id, body)
```
---
* API URL: '/auth/conversations/:id/reply'
* HTTP Method: 'POST'
```javascript
app.endpoints.gmelius.conversations.reply.post(id, body)
```
---
* API URL: '/auth/conversations/:id/tags'
* HTTP Method: 'POST'
```javascript
app.endpoints.gmelius.conversations.tags.post(id, body)
```
---
* API URL: '/auth/sequences/enroll/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.gmelius.sequences.enroll.post(id, body)
```
---
* API URL: '/auth/notes'
* HTTP Method: 'POST'
```javascript
app.endpoints.gmelius.notes.post(body)
```
---
* API URL: '/auth/webhooks'
* HTTP Method: 'POST'
```javascript
app.endpoints.gmelius.webhooks.post(body)
```
---
* API URL: '/me'
* HTTP Method: 'GET'
```javascript
app.endpoints.gmelius.me()
```
---
* API URL: '/auth/boards'
* HTTP Method: 'GET'
```javascript
app.endpoints.gmelius.boards.getAll()
```
---
* API URL: '/auth/boards/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.gmelius.boards.get(id)
```
---
* API URL: '/auth/boards/:id/columns'
* HTTP Method: 'GET'
```javascript
app.endpoints.gmelius.boards.columns.get(id)
```
---
* API URL: '/auth/boards/columns/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.gmelius.boards.columns.get(id)
```
---
* API URL: '/auth/boards/:id/cards'
* HTTP Method: 'GET'
```javascript
app.endpoints.gmelius.boards.cards.get(id)
```
---
* API URL: '/auth/boards/cards/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.gmelius.boards.cards.get(id)
```
---
* API URL: '/auth/sharedfolders'
* HTTP Method: 'GET'
```javascript
app.endpoints.gmelius.sharedfolders.getAll()
```
---
* API URL: '/auth/sharedfolders/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.gmelius.sharedfolders.get(id)
```
---
* API URL: '/auth/sharedfolders/:id/conversations'
* HTTP Method: 'GET'
```javascript
app.endpoints.gmelius.sharedfolders.conversations.get(id)
```
---
* API URL: '/auth/conversations/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.gmelius.conversations.get(id)
```
---
* API URL: '/auth/sequences'
* HTTP Method: 'GET'
```javascript
app.endpoints.gmelius.sequences.getAll()
```
---
* API URL: '/auth/sequences/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.gmelius.sequences.getAll(id)
```
---
* API URL: '/auth/webhooks'
* HTTP Method: 'GET'
```javascript
app.endpoints.gmelius.webhooks.getAll()
```
---
* API URL: '/auth/events'
* HTTP Method: 'GET'
```javascript
app.endpoints.gmelius.events.get()
```
---
* API URL: '/auth/webhooks/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.gmelius.webhooks.get(id)
```
---
* API URL: '/auth/boards/:id'
* HTTP Method: 'PUT'
```javascript
app.endpoints.gmelius.boards.put(id, body)
```
---
* API URL: '/auth/conversations/:id/assignee'
* HTTP Method: 'PUT'
```javascript
app.endpoints.gmelius.conversations.assignee.put(id, body)
```
---
* API URL: '/auth/conversations/:id/status'
* HTTP Method: 'PUT'
```javascript
app.endpoints.gmelius.conversations.status.put(id, body)
```
---
* API URL: '/auth/notes/:id'
* HTTP Method: 'PUT'
```javascript
app.endpoints.gmelius.notes.put(id, body)
```
---
* API URL: '/auth/boards/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.gmelius.boards.delete(id)
```
---
* API URL: '/auth/boards/columns/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.gmelius.boards.columns.delete(id)
```
---
* API URL: '/auth/boards/cards/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.gmelius.boards.cards.delete(id)
```
---
* API URL: '/auth/boards/cards/:id/tags/:tagId'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.gmelius.boards.cards.tags.delete(id, tagId)
```
---
* API URL: '/auth/sequences/disenroll/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.gmelius.sequences.disenroll.delete(id)
```
---
* API URL: '/auth/notes/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.gmelius.notes.delete(id)
```
---
* API URL: '/auth/webhooks/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.gmelius.webhooks.delete(id)
```
---
* API URL: '/auth/boards/columns/:id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.gmelius.boards.columns.patch(id, body)
```
---
* API URL: '/auth/boards/cards/:id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.gmelius.boards.cards.patch(id, body)
```
---
* API URL: '/auth/tags/:id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.gmelius.tags.patch(id, body)
```
---

</details>


## Events

You can set a webhooks listener with the Gmelius API methods.

{% include links.html %}