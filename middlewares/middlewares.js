/*!
 * json-api-ext
 * Copyright(c) 2016 Antonio Pintus
 * MIT Licensed
 */

'use strict';

const debug = require('debug')('webapi-utils.middlewares:jsonExtension');

//JSON, raw
exports.jsonExtension = () => {
    return (req, res, next) => {
        try {
            if (req.originalUrl.endsWith('.json')) {
                debug('.json extension found');
                req.headers['accept'] = 'application/json';
                req.originalUrl = req.originalUrl.slice(0, -5);
                req.url = req.url.slice(0, -5);

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
            if (req.originalUrl.endsWith('.jsonld')) {
                debug('.json-ld extension found');
                req.headers['accept'] = 'application/ld+json';
                req.originalUrl = req.originalUrl.slice(0, -7);
                req.url = req.url.slice(0, -7);
            }

        } catch (error) {
            debug(error);
        }
        finally {
            next();
        }
    }
};