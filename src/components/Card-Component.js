import React from 'react';

export const Card = (props) => {
	const {monster} = props;
	return(
		 <div className="bg-light-blue tc dib br3 pa3 ma2 grow bw2 shadow-5">
		 	<img src={`https://robohash.org/${monster.id}?set=set2&size=200x200`} alt='robo'/>
	    	<h2> {monster.name} </h2>
	    	<p> {monster.email} </p>
		</div>
	)
}

//export default Card;