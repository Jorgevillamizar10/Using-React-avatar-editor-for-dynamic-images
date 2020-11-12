import React, { useState } from "react";
import { SvgComponent } from "./components/index";
import { Editor } from "./RecortarImagen/index";

const App = () => {
	const Ruta =
		"https://i.pinimg.com/736x/3f/af/03/3faf0372cf1a41245b2fba14a604b07d.jpg";
	const Ruta2 =
		"https://static.iris.net.co/soho/upload/images/2020/2/10/61074_1.jpg";
	const Ruta3 =
		"https://i.pinimg.com/236x/86/b2/52/86b2521ebaa17c8a89f85609809bd9a6.jpg";

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
