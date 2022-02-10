 ////////////////////////////////////////////////////////////////////////////
//                                                                        //
//             This file was generated with "slingr-helpgen"              //
//                                                                        //
//               For more info, check the following links:                //
//             https://www.npmjs.com/package/slingr-helpgen               //
//           https://github.com/slingr-stack/slingr-helpgen               //
//                                                                        //
////////////////////////////////////////////////////////////////////////////


var parse = function parse(str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, () => {
                if (typeof (args[i]) != 'string') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
        }
    } catch (err) {
        sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
        throw err;
    }
};

 endpoint.pkceGenerator = function() {
	 return endpoint._PKCEGenerator();
 };

endpoint.token = {};

endpoint.token.introspection = function(httpOptions) {
	var url = parse('/token/introspection');
	sys.logs.debug('[gmelius] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.token.revocation = function(httpOptions) {
	var url = parse('/token/revocation');
	sys.logs.debug('[gmelius] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.me = function(httpOptions) {
	var url = parse('/me');
	sys.logs.debug('[gmelius] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.boards = {};

endpoint.boards.getAll = function(httpOptions) {
	var url = parse('/auth/boards');
	sys.logs.debug('[gmelius] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.boards.post = function(httpOptions) {
	var url = parse('/auth/boards');
	sys.logs.debug('[gmelius] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.boards.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/auth/boards/:id', [id]);
	sys.logs.debug('[gmelius] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.boards.put = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/auth/boards/:id', [id]);
	sys.logs.debug('[gmelius] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};

endpoint.boards.delete = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/auth/boards/:id', [id]);
	sys.logs.debug('[gmelius] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.boards.columns = {};

endpoint.boards.columns.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/auth/boards/:id/columns', [id]);
	sys.logs.debug('[gmelius] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.boards.columns.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/auth/boards/:id/columns', [id]);
	sys.logs.debug('[gmelius] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.boards.columns.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/auth/boards/columns/:id', [id]);
	sys.logs.debug('[gmelius] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.boards.columns.patch = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/auth/boards/columns/:id', [id]);
	sys.logs.debug('[gmelius] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};

endpoint.boards.columns.delete = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/auth/boards/columns/:id', [id]);
	sys.logs.debug('[gmelius] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.boards.cards = {};

endpoint.boards.cards.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/auth/boards/:id/cards', [id]);
	sys.logs.debug('[gmelius] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.boards.cards.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/auth/boards/cards/:id', [id]);
	sys.logs.debug('[gmelius] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.boards.cards.patch = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/auth/boards/cards/:id', [id]);
	sys.logs.debug('[gmelius] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};

endpoint.boards.cards.delete = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/auth/boards/cards/:id', [id]);
	sys.logs.debug('[gmelius] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.boards.cards.post = function(httpOptions) {
	var url = parse('/auth/boards/cards');
	sys.logs.debug('[gmelius] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.boards.cards.tags = {};

endpoint.boards.cards.tags.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/auth/boards/cards/:id/tags', [id]);
	sys.logs.debug('[gmelius] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.boards.cards.tags.delete = function(id, tagId, httpOptions) {
	if (!id || !tagId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,tagId].');
		return;
	}
	var url = parse('/auth/boards/cards/:id/tags/:tagId', [id, tagId]);
	sys.logs.debug('[gmelius] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.sharedfolders = {};

endpoint.sharedfolders.getAll = function(httpOptions) {
	var url = parse('/auth/sharedfolders');
	sys.logs.debug('[gmelius] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.sharedfolders.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/auth/sharedfolders/:id', [id]);
	sys.logs.debug('[gmelius] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.sharedfolders.conversations = {};

endpoint.sharedfolders.conversations.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/auth/sharedfolders/:id/conversations', [id]);
	sys.logs.debug('[gmelius] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.conversations = {};

endpoint.conversations.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/auth/conversations/:id', [id]);
	sys.logs.debug('[gmelius] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.conversations.notes = {};

endpoint.conversations.notes.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/auth/conversations/:id/notes', [id]);
	sys.logs.debug('[gmelius] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.conversations.reply = {};

endpoint.conversations.reply.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/auth/conversations/:id/reply', [id]);
	sys.logs.debug('[gmelius] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.conversations.tags = {};

endpoint.conversations.tags.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/auth/conversations/:id/tags', [id]);
	sys.logs.debug('[gmelius] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.conversations.assignee = {};

endpoint.conversations.assignee.put = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/auth/conversations/:id/assignee', [id]);
	sys.logs.debug('[gmelius] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};

endpoint.conversations.status = {};

endpoint.conversations.status.put = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/auth/conversations/:id/status', [id]);
	sys.logs.debug('[gmelius] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};

endpoint.sequences = {};

endpoint.sequences.getAll = function(httpOptions) {
	var url = parse('/auth/sequences');
	sys.logs.debug('[gmelius] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.sequences.getAll = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/auth/sequences/:id', [id]);
	sys.logs.debug('[gmelius] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.sequences.enroll = {};

endpoint.sequences.enroll.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/auth/sequences/enroll/:id', [id]);
	sys.logs.debug('[gmelius] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.sequences.disenroll = {};

endpoint.sequences.disenroll.delete = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/auth/sequences/disenroll/:id', [id]);
	sys.logs.debug('[gmelius] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.notes = {};

endpoint.notes.post = function(httpOptions) {
	var url = parse('/auth/notes');
	sys.logs.debug('[gmelius] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.notes.put = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/auth/notes/:id', [id]);
	sys.logs.debug('[gmelius] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};

endpoint.notes.delete = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/auth/notes/:id', [id]);
	sys.logs.debug('[gmelius] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.tags = {};

endpoint.tags.patch = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/auth/tags/:id', [id]);
	sys.logs.debug('[gmelius] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};

endpoint.webhooks = {};

endpoint.webhooks.getAll = function(httpOptions) {
	var url = parse('/auth/webhooks');
	sys.logs.debug('[gmelius] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.webhooks.post = function(httpOptions) {
	var url = parse('/auth/webhooks');
	sys.logs.debug('[gmelius] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.events = {};

endpoint.events.get = function(httpOptions) {
	var url = parse('/auth/events');
	sys.logs.debug('[gmelius] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.webhooks.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/auth/webhooks/:id', [id]);
	sys.logs.debug('[gmelius] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.webhooks.delete = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/auth/webhooks/:id', [id]);
	sys.logs.debug('[gmelius] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

