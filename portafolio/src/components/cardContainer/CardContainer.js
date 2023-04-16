import React, { useEffect, useState } from 'react';

import './CardContainer.scss';

export const CardContainer = ({
	color,
	orientation,
	content = 'card',
	classes = [],
	number = '1',
}) => {
	const [clases, setclases] = useState('');

	useEffect(() => {
		console.log(classes, classes.length);
		if (classes.length) {
			let newClasesForThisItem = ''
			for (let item of classes) {
				console.log(item);
				if (!clases.includes(item)) newClasesForThisItem = newClasesForThisItem + ' ' + item;
			}
			setclases(newClasesForThisItem)
		}

		console.log(clases);

	}, []);

	return (
		<div akey={number} className={'cardContainer ' + color + ' ' + orientation + ' ' + clases}>
			{content}
		</div>
	);
};
