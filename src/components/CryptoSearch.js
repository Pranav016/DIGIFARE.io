import React from 'react';

export const CryptoSearch = ({ handleChange }) => {
	return (
		<div className='coin-search'>
			<h1 className='coin-head'>Search a currency</h1>
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
