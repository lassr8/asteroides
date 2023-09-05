export default function multiload(
    imported: Record<string, () => Promise<unknown>>,
    callback: (key: any, value: any, i: number) => void
) {
    function call(key: any, i: number) {
        let index = i.valueOf();
        imported[key]().then((val: any) => {
            callback(key, val.default, index);
        })
    }
    let i = 0;
    for (const key in imported) {
        call(key, i)
        i++;
    }
}