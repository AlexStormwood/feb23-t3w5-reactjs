import "./FruitList.css";

import ListGroup from 'react-bootstrap/ListGroup';

// Functions MUST return JSX, if you wanna use it as HTML
// a.k.a in place of inline JSX:
export default function FruitList(props){


	if (props.listToShow.includes("pineapple")){
		return null;
	}

	let listOfFruit = props.listToShow.map(fruit => {
		return <ListGroup.Item key={fruit}>
			{fruit}
		</ListGroup.Item>
	});

	return <span>
		{listOfFruit}
		{props.children}
	</span>
}

// module.exports = FruitList;
// module.exports = {
// 	FruitList
// }