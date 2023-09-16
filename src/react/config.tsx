import { Radio } from "@rmwc/radio";
import React, { useState } from "react";
import config from "../functions/config";

// styles
import '@rmwc/radio/styles';


function CookiesConfig(props: { allowCookies: boolean, setAllowCookies: React.Dispatch<React.SetStateAction<boolean>> }) {
	config.set('ALLOW_COOKIES', props.allowCookies);
	return (
		<div className="block">
			<h2>Allow cookies</h2>
			<p>You need to allow cookies if you want to save your settings. If not, the configuration will be lost when you reload the page.</p>

			<div className="grid-2">
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


			{/* Algun dia, la idea es que sea dificil de borrar toda la informacion. Como: click -> prompt -> delete()
			<div>
				<Button
					label="Delete cookies"
					raised
					onClick={() => cookies.deleteAll()}
				/>
			</div> */}
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
	const [allowCookies, setAllowCookies] = useState<boolean>(
		config.canGet<boolean>('ALLOW_COOKIES')
	);

	return (
		<div className="config">
			<CloseButton />
			<CookiesConfig {... { allowCookies, setAllowCookies }} />
		</div>
	);
}
