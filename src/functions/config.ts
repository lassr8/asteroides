import cookies from "./cookies";

let prefix = 'config.';
let expDays = 30; // days

let cacheConfig: { [c:string]: string|number|boolean } = {
};

const config = {
    set: (key: string, value: string|number|boolean) => {
        cacheConfig[key] = value;
        if (cacheConfig.ALLOW_COOKIES) {
            cookies.set(
                prefix + key, 
                JSON.stringify(value), 
                expDays
            );
        }
    },
    get<T extends string|number|boolean>(key: string): T | undefined {
        let value = cacheConfig[key];
        if (typeof value != 'undefined') {
            return value as T;
        }

        value = cookies.get(prefix + key);
        if (value) {
            return JSON.parse(value) as T;
        }

    },
    /**
     * Like get but doesn't returns the 
     * type undefined, use it cautelously 
     * only if you know the key exists and
     * will never be undefined.
     * @param key - the key
     * @returns the value without undefined
     */
    canGet<T extends string|number|boolean>(key: string): T {
        return config.get<T>(key) as T;
    }
};

export default config;