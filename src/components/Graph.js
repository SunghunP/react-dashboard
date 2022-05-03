import React from "react";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import { Line } from 'react-chartjs-2';
import './Graph.css'

const data = {
	labels: ['4/27', '4/28', '4/29',
		'4/30', '5/1'],
	datasets: [
		{
			label: 'Visitors',
			fill: true,
			lineTension: 0.5,
			backgroundColor: 'rgba(75,192,192,1)',
			borderColor: 'rgba(95,95,179,1)',
			borderWidth: 2,
			data: [960, 120, 321, 543, 563]
		}
	]
}

const options = {
	scales: {
		x: {
			ticks: {
				color: "black"
			}
		},
		y: {
			ticks: {
				color: "black"
			}
		}
	},
	title: {
		display: true,
		text: 'Average Rainfall per month',
		fontSize: 20
	},
	legend: {
		display: true,
		position: 'right'
	}
}

export default function Graph() {
	return (
		<>
			<Line
				data={data}
				options={options}
			/>
		</>
	)
}