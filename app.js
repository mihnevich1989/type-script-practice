"use strict";
var RequestType;
(function (RequestType) {
    RequestType["GET"] = "get";
    RequestType["POST"] = "post";
})(RequestType || (RequestType = {}));
function fetchWithAuth(url, method) {
}
fetchWithAuth('s', 'post');
let method = '3';
fetchWithAuth('s', method);
