"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["InternalServerError"] = 500] = "InternalServerError";
})(StatusCode || (StatusCode = {}));
const res = {
    message: 'Платеж успешен!',
    statusCode: StatusCode.Success,
};
if (res.statusCode === StatusCode.Success) {
    console.log(res.message);
}
function compute() {
    return 3;
}
const res2 = 1 /* ADMIN */;
