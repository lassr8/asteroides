/* T*T */
export function set(key: string, value: string, expDays: number) {
	const d = new Date();
	d.setTime(d.getTime() + (expDays*24*60*60*1000));
	let expires = "expires="+ d.toUTCString();
	document.cookie = key + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

export function get(key: string) {
	let name = key + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
    	}
    	if (c.indexOf(name) == 0) {
      		return c.substring(name.length, c.length);
    	}
	}
	return false;
}

export function remove(key: string) {
	set(key, '', -1);
}

export function deleteAll() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

const cookies = {get,set,remove,deleteAll};

export default cookies;