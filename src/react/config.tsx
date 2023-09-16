import { Radio } from "@rmwc/radio";
import '@rmwc/radio/styles';
import React, { useState } from "react";

function CookiesConfig(props: { allowCookies: boolean, setAllowCookies: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <div className="block">
            <h2>Allow cookies</h2>
            <p>You need to enable cookies if you want to save your configuration</p>
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
    )
}

function CloseButton() {
    // T*T
    return (
        <></>
    )
}

export function Config() {
    const [allowCookies, setAllowCookies] = useState<boolean>(true);

    return (
        <div className="config">
            <CloseButton/>
            <CookiesConfig {... { allowCookies, setAllowCookies }} />

            {/* If allow cookies */}
            {allowCookies && (<>
                Hi
            </>)}
        </div>
    );
}
