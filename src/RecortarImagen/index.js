import React, { useState, createRef } from "react";
import Cropper from "react-avatar-editor";

import "./styles.css";

const image =
	"https://static.iris.net.co/soho/upload/images/2020/2/10/61074_1.jpg";

export const Editor = ({ flag }) => {
	const [preview, setPreview] = useState(null);
	const [scale, setScale] = useState(1);
	const cropper = createRef();

	const getImagePreview = () => {
		setPreview(cropper.current.getImageScaledToCanvas().toDataURL());
		flag(cropper.current.getImageScaledToCanvas().toDataURL());
	};

	return (
		<div>
			<div style={{ position: "relative", width: 400, height: 400 }}>
				<Cropper
					ref={cropper}
					image={image}
					scale={scale}
					width={400}
					height={400}
					border={0}
					crossOrigin={"anonymous"}
				/>
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						pointerEvents: "none",
					}}
				>
					<div
						style={{
							pointerEvents: "all",
							display: "flex",
							width: "100%",
							justifyContent: "flex-end",
						}}
					>
						<button onClick={getImagePreview}>Preview</button>
					</div>
					<div style={{ pointerEvents: "all" }}>
						<input
							type="range"
							min="1"
							max="3"
							step="any"
							value={scale}
							onChange={(e) => setScale(parseFloat(e.target.value))}
						/>
					</div>
				</div>
			</div>
			{preview && (
				<div
					style={{ position: "relative", width: "400px", marginTop: "10px" }}
				>
					<img alt="" style={{ maxWidth: "100%" }} src={preview} />
					<button
						style={{ position: "absolute", top: "0", right: "0" }}
						onClick={() => setPreview(null)}
					>
						x
					</button>
				</div>
			)}
		</div>
	);
};
