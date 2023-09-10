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
	return "";
}

export function remove(key: string) {
	set(key, '', -1);
}

const cookies = {get,set,remove};

export default cookies;