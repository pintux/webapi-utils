/*!
 * json-api-ext
 * Copyright(c) 2016 Antonio Pintus
 * MIT Licensed
 */

'use strict';

const debug = require('debug')('webapi-utils.middlewares:jsonExtension');

exports.jsonExtension = () => {
    return (req, res, next) => {
        try {
            if (req.originalUrl.endsWith('.json')) {
                debug('.json extension found');
                req.headers['accept'] = 'application/json'
            }

        } catch (error) {
            debug(error);
        }
        finally {
            next();
        }
    }
};