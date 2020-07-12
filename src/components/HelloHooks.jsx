import React, { useState } from "react";

const HelloHooks = () => {
	const [active, setActive] = useState(true);
	const handleClick = () => {
		setActive(!active);
	};
	return (
		<div>
			<button onClick={handleClick}>Ocultar</button>
			<h1>Hello Hooks</h1>
			{active ? <h1>Hola Mundo</h1> : <span>Hide</span>}
		</div>
	);
};

export default HelloHooks;
