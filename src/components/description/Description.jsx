import style from './description.module.scss';

const Description = ({ text }) => {
	return <p className={style.text}>{text}</p>;
};

export default Description;
