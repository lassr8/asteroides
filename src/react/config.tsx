import { Radio } from "@rmwc/radio";
import React, { useState } from "react";
import config from "../functions/config";

console.log(config.get('ALLOW_COOKIES'));

function CookiesConfig(props: { allowCookies: boolean, setAllowCookies: React.Dispatch<React.SetStateAction<boolean>> }) {
    config.set('ALLOW_COOKIES', props.allowCookies);
    return (
        <div className="block">
            <h2>Allow cookies</h2>
            <p>You need to allow cookies if you want to save your settings. If not, the configuration will be lost when you reload the page.</p>
            <div>
                <Radio
                    checked={props.allowCookies}
                    onChange={() => props.setAllowCookies(true)}
                >
                    Yes
                </Radio>

                <Radio
                    checked={!props.allowCookies}
                    onChange={() => props.setAllowCookies(false)}
                >
                    No
                </Radio>
            </div>
            
            

        </div>
    )
}

function CloseButton() {
    // T*T
    return (
        <></>
    )
}

export function Config() {
    const [allowCookies, setAllowCookies] = useState<boolean>(config.canGet<boolean>('ALLOW_CONFIG'));

    return (
        <div className="config">
            <CloseButton />
            <CookiesConfig {... { allowCookies, setAllowCookies }} />

            {/* If allow cookies */}
            {allowCookies && (<>
                Hi
            </>)}
        </div>
    );
}
