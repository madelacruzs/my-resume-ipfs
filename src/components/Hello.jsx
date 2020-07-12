import React, { Component } from "react";

class Hello extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: true,
			person: {},
		};
	}

	handleClick = () => {
		this.setState({
			active: !this.state.active,
			person: {
				name: "Mike",
			},
		});
	};

	render() {
		return (
			<div>
				<button onClick={this.handleClick}>Ocultar</button>
				{this.state.active ? <h1>Hola Mundo</h1> : <span>Hide</span>}
			</div>
		);
	}
}

export default Hello;
