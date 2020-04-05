// capitalize first letter of each word in the given string
 function capitalizeString(str){
	let words = str.split(" ");
	let captalizedWords = words.map( word => word.slice(0,1) + word.slice(1,word.length)); 
	return captalizedWords.join(" ");
 }

/*
   capitalizeString("abc efg xyz")
   output: Abc Efg Xyz
*/
