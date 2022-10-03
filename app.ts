function logId(id: string | number | boolean) {
	//сужение union типа
	if (typeof id === 'string') {
		console.log(id.toUpperCase);
	} else if (typeof id === 'number') {
		console.log(id.toFixed);
	} else {
		console.log(id);
	}
}

function errLog(err: string | string[]) {
	if (Array.isArray(err)) {
		console.log(err);
	} else {
		console.log(err);
	}
}

function errLogObject(obj: { a: number } | { b: number }) {
	if ('a' in obj) {
		console.log(obj.a);
	} else {
		console.log(obj.b);
	}
}

function logMultipleIds(a: string | number, b: string | boolean) {
	if (a === b) {
		console.log(a);
	} else {
		console.log(b);
	}
}

