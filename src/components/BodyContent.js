import React from 'react';
import Section from './Section';
import Graph from './Graph';
import './BodyContent.css'

export default function BodyContent() {
	return(
		<div className='BodyContent'>
			<div className='Sections' >
				<Section 
					title="Reviews"
					pText="1,281"
				/>
				<Section 
					title="Average Ratings"
					pText="4.6"
				/>
				<Section 
					title="Sentiment Analysis"
					pText="960 120 321"
				/>
			</div>

			<div className='Graph'>
				<Graph />
			</div>
		</div>
	)
}