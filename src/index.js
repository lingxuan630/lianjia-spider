"use strict";
exports.__esModule = true;
/**
 * class Spider
 */
var deep_extend_1 = require("deep-extend");
var Spider = /** @class */ (function () {
    function Spider(options) {
        this.config = {
            // options for axios: https://github.com/axios/axios
            http: {
                method: 'get'
            },
            hooks: {
                beforeRequest: function () { }
            }
        };
        this.config = deep_extend_1["default"]({}, this.config, options);
    }
    return Spider;
}());
