import classes from './MealItem.module.css'

import MealItemForm from './MealItemForm'

const MealItem = (props) => {
	const price = `$${props.price.toFixed(2)}`

	return (
		<li className={classes.meal}>
			<h3>{props.name}</h3>
			<div className={classes.description}>{props.description}</div>
			<div className={classes.price}>{price}</div>

			<MealItemForm id={props.id} />
		</li>
	)
}

export default MealItem