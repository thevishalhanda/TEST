import React from "react"
import { useState } from "react";
import "./Progress.css"
const Progress = ({done}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 100);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				
			</div>
		</div>
	)
}


export default Progress