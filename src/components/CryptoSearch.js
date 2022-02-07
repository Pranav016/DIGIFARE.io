import React from 'react';

export const CryptoSearch = ({ handleChange }) => {
	return (
		<div className='coin-search'>
			<h3 className='coin-head'>Search a currency</h3>
			<form>
				<input
					type='text'
					placeholder='search'
					className='coin-input'
					onChange={handleChange}
				/>
			</form>
		</div>
	);
};
