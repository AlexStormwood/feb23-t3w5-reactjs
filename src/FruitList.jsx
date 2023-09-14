// Array of fruit names:
// let someFruit = [
// 	"mangoes",
// 	"peaches",
// 	"apples",
// 	"blueberries",
// 	"aubergine",
// 	"secret banana",
// 	"papayas",
// 	"banana",
// 	"durian",
// 	"tomatoes",
// 	"rambutan",
// 	"mulberries", 
// 	"kiwis",
// 	"jackfruit",
// 	"watermelon",
// 	"zach fruit",
// 	"grape",
// 	"coconut"
// ]
  
// Process someFruit and build an array of li tags 
// let listOfListTags = someFruit.map(((fruit, index) => {
// return <li key={fruit} fancyNumber={index} >
// 	{fruit}
// 	</li>
// }));

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