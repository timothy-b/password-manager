import React from 'react';

export default class BasicTable extends React.Component {
	render() {
		return (
			<div className="basicTable">
				<h1>{this.props.title}</h1>
				<h2>THIS IS BasicTable</h2>
			</div>
		);
	}
}

BasicTable.defaultProps = {
	title: 'DEFAULT TITLE'
}
