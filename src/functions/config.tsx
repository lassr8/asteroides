import { Radio } from "@rmwc/radio";
import React from "react";
import { createRoot } from 'react-dom/client';



function Form() {
    const [value, setValue] = React.useState('cookies');

    return (
        <>
            <Radio
                value="cookies"
                checked={value === 'cookies'}
                onChange={(evt: any) => setValue(String(evt.currentTarget.value))}
            >
                Cookies
            </Radio>

            <Radio
                value="pizza"
                checked={value === 'pizza'}
                onChange={(evt: any) => setValue(String(evt.currentTarget.value))}
            >
                Pizza
            </Radio>

            <Radio
                value="icecream"
                checked={value === 'icecream'}
                onChange={(evt: any) => setValue(String(evt.currentTarget.value))}
            >
                Icecream
            </Radio>
        </>
    );
}


const domNode = document.createElement('div');
domNode.id = 'config-div';
document.body.appendChild(domNode);
const root = createRoot(domNode);
root.render(<Form/>);

export default root;

