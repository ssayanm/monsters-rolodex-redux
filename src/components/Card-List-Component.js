import React from 'react';
import { Card } from './Card-Component';

export const CardList = props => {
	return (
		<div className='tc'>
			{props.monsters.map(monster => (
				<Card key = {monster.id} monster = {monster}/>
			))}
		</div>
	);
}

//export default CardList;
