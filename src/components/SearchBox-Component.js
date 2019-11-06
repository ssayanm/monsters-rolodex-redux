import React from 'react';

export const SearchBox = ({ onSearchChange, placeholder }) => {
	return (
	    <div className='pa2'>
	    	<input 
	          className='pa3 ba b--green bg-lightest-blue'
	          type="search" 
	          placeholder={placeholder}
	          onChange ={onSearchChange}
        	/>
	    </div>
  );
}

