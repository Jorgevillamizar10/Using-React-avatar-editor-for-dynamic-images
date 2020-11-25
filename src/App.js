import React, { useState } from "react";
import { SvgComponent } from "./Components/svg";
import { Editor } from "./RecortarImagen/index";

const App = () => {

	const [aux, setAux] = useState("");

	const handleImage = (data) => {
		setAux(data);
	};

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				flexDirection: "column",
				height: "1500px",
			}}
		>
			<Editor flag={handleImage} />
			<SvgComponent Ruta={aux} Ruta2={aux} Ruta3={aux} />
		</div>
	);
};

export default App;
