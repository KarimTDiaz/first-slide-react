import { useState } from 'react';
import { INFO } from '../../constants/info';
import Title from '../title/Title';
import Description from '../description/Description';

const Slider = () => {
	const [counter, setCounter] = useState(0);
	return (
		<>
			<button onClick={() => increment(counter, setCounter)}>NEXT</button>
			<Title title={INFO[counter].title} />
			<Description text={INFO[counter].description} />
			<button onClick={() => decrement(counter, setCounter)}>PREVIOUS</button>
		</>
	);
};

const increment = (counter, setCounter) => {
	setCounter(counter + 1);
	if (counter >= INFO.length - 1) {
		setCounter(0);
	}
};

const decrement = (counter, setCounter) => {
	setCounter(counter - 1);
	if (counter <= 0) {
		setCounter(INFO.length - 1);
	}
};

export default Slider;
