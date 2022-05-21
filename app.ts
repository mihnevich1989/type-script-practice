enum StatusCode {
	Success = 200,
	NotFound = 404,
	InternalServerError = 500,
}

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

const enum Roles {
	ADMIN = 1,
	USER = 2
}

const res2 = Roles.ADMIN;