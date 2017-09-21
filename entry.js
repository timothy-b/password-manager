'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import BasicTable from './components/BasicTable';

function run() {
	ReactDOM.render(
		<BasicTable
			title="title" />,
		document.getElementById('content')
	);
};

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
	run();
} else {
	window.addEventListener('DOMContentLoaded', run, false);
}
