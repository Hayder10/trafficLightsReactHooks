import React, { useState } from "react";

/* Main Function */
const TrafficLight = () => {
	/* Hook Function */
	const [color,setColor] = useState("");

	return (
		<div className="pageStyle">
			<div className="postStyle"></div>
			<div className="bodyStyle">
				<div onClick={() => setColor("red")} className={"lightStyle red"+(color === "red" ? " glow" : "")}>
				</div>
				<div onClick={()=> setColor("yellow")} className={"lightStyle yellow"+(color === "yellow" ? " glow" : "")}>
				</div>
				<div onClick={()=> setColor("green")} className={"lightStyle green"+(color === "green" ? " glow" : "")}>
				</div>
			</div>
			
		</div>
	);
};

export default TrafficLight;
