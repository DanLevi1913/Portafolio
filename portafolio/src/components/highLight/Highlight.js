import React from 'react';

import './Highlight.scss';

export const Highlight = ({ text }) => {
	return (
		<div className='highligth'>
			<h1>{text}</h1>
			<div className='Separator'></div>
		</div>
	);
};
