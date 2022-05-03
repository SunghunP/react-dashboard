import React from "react";
import Button from "./Button"
import './DashBoard.css'

const DashBoard = () => {
	return (
		<div className="DashBoard">
			<Button name="Dashboard" />
			<Button name="Widget" />
			<Button name="Reviews" />
			<Button name="Customers" />
			<Button name="Online analysis" />
			<Button name="Settings" />
		</div>
	)
}

export default DashBoard