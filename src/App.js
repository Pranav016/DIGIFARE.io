import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CryptoItem } from './components/CryptoItem';
import { CryptoSearch } from './components/CryptoSearch';
require('dotenv').config();

function App() {
	const [Cryptos, setCryptos] = useState([]);
	const [Search, setSearch] = useState('');

	useEffect(() => {
		axios
			.get(process.env.REACT_APP_KEY)
			.then((response) => {
				setCryptos(response.data);
			})
			.catch((err) => console.log(err));
	}, []);

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const filteredCrypto = Cryptos.filter((crypto) =>
		crypto.name.toLowerCase().includes(Search.toLowerCase())
	);

	return (
		<div className='coin-app'>
			<h1>DigiFare.io</h1>
			<CryptoSearch handleChange={handleChange} />
			{filteredCrypto.map((crypto) => {
				return (
					<CryptoItem
						key={crypto.id}
						name={crypto.name}
						price={crypto.current_price}
						image={crypto.image}
						symbol={crypto.symbol}
						marketcap={crypto.market_cap}
						priceChange={crypto.price_change_percentage_24h}
						volume={crypto.total_volume}
					/>
				);
			})}
		</div>
	);
}

export default App;
