import "./FruitList.css";

// Functions MUST return JSX, if you wanna use it as HTML
// a.k.a in place of inline JSX:
export default function FruitList(props){


	if (props.listToShow.includes("pineapple")){
		return null;
	}

	let listOfFruit = props.listToShow.map(fruit => {
		return <li key={fruit}>
			{fruit}
		</li>
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