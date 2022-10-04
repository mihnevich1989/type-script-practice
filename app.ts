enum RequestType {
	GET = 'get',
	POST = 'post'
}

function fetchWithAuth(url: string, method: 'post' | 'get') {

}

fetchWithAuth('s', 'post')

let method = '3'

fetchWithAuth('s', method as 'post')
