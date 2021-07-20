import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { CryptoItem } from './components/CryptoItem';
import { CryptoSearch } from './components/CryptoSearch';
require('dotenv').config();

function App() {
	const [Cryptos, setCryptos] = useState([]);
	useEffect(() => {
		axios
			.get(process.env.REACT_APP_KEY)
			.then((res) => res.json())
			.then((data) => {
				setCryptos(data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='coin-app'>
			<CryptoSearch />
			{Cryptos.map((crypto) => (
				<CryptoItem
					key={crypto.id}
					name={crypto.name}
					price={crypto.current_price}
				/>
			))}
		</div>
	);
}

export default App;
