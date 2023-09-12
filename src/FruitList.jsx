// Array of fruit names:
let someFruit = [
	"mangoes",
	"peaches",
	"apples",
	"blueberries",
	"aubergine",
	"secret banana",
	"papayas",
	"banana",
	"durian",
	"tomatoes",
	"rambutan",
	"mulberries", 
	"kiwis",
	"jackfruit",
	"watermelon",
	"zach fruit",
	"grape",
	"coconut"
]
  
// Process someFruit and build an array of li tags 
let listOfListTags = someFruit.map((fruit => {
return <li>{fruit}</li>
}));

// Functions MUST return JSX, if you wanna use it as HTML
// a.k.a in place of inline JSX:
export default function FruitList(){
	return listOfListTags;
}

// module.exports = FruitList;
// module.exports = {
// 	FruitList
// }