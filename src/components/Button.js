import React from "react";
import "./Button.css"

export default function Button({ name }) {
	return (
		<div className={name}>
			<button type="button">{name}</button>
		</div>
	)
};