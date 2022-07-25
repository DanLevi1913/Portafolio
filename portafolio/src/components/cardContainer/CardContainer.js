import React, { useEffect, useState } from 'react';

import './CardContainer.scss';

export const CardContainer = ({ color, orientation, content = 'card', classes = [] }) => {
	const [clases, setclases] = useState(' ');

	useEffect(() => {
		if (classes.length) {
			for (let item of classes) {
				if (!clases.includes(item)) setclases(clases + ' ' + item);
			}
		}
	}, [setclases]);

	return (
		<div className={'cardContainer ' + color + ' ' + orientation + ' ' + classes}>{content}</div>
	);
};
