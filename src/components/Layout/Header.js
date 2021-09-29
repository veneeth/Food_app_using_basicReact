import React from 'react'

import HeaderCardButton from '../Layout/HeaderCartButton'
import mealsImage from '../../assets/meals.jpg'
import classes from '../Layout/Header.module.css'

const Header = (props) => {
	return (
		<React.Fragment>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCardButton onClick={props.onShowCart} />
			</header>
			<div className={classes['main-image']}>
				<img src={mealsImage} alt="A table full of delicious food!" />
			</div>
		</React.Fragment>
	)
}

export default Header
