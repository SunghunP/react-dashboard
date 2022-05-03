import React from "react";
import './Section.css';

export default function Section({title, pText}) {
	return (
		<div className="Section">
			<h4>{title}</h4>
			<p>{pText}</p>
		</div>
	) 
}