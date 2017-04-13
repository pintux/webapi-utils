/*!
 * json-api-ext
 * Copyright(c) 2017 Antonio Pintus
 * MIT Licensed
 */

'use strict';

const debug = require('debug')('webapi-utils.middlewares');

//JSON, raw
exports.jsonExtension = () => {
    return (req, res, next) => {
        try {
            if (req._parsedUrl.pathname.endsWith('.json')) {
                debug('.json extension found');
                req.headers['accept'] = 'application/json';
                req.originalUrl = req.originalUrl.replace('.json', '');
                req.url = req.url.replace('.json', '');

            }

        } catch (error) {
            debug(error);
        }
        finally {
            next();
        }
    }
};

//JSON-LD
exports.jsonLDExtension = () => {
    return (req, res, next) => {
        try {
            if (req._parsedUrl.pathname.endsWith('.jsonld')) {
                debug('.json-ld extension found');
                req.headers['accept'] = 'application/ld+json';
                req.originalUrl = req.originalUrl.replace('.jsonld', '');
                req.url = req.url.replace('.jsonld', '');
            }

        } catch (error) {
            debug(error);
        }
        finally {
            next();
        }
    }
};