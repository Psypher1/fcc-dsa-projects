/* 
A: N
B: O
 */

const CHAR_MAP = {
	A: "N",
	B: "O",
	C: "P",
	D: "Q",
	E: "R",
	F: "S",
	G: "T",
	H: "U",
	I: "V",
	J: "W",
	K: "X",
	L: "Y",
	M: "Z",
	N: "A",
	O: "B",
	P: "C",
	Q: "D",
	R: "E",
	S: "F",
	T: "G",
	U: "H",
	V: "I",
	W: "J",
	X: "K",
	Y: "L",
	Z: "M",
};

function rot13(str) {
	let decodedStr = "";

	for (let i = 0; i < str.length; i++) {
		// decodedStr += str[i];
		// if char is a letter, add decoded letter
		if (/[A-Z]/.test(str[i])) {
			// decode letter
			// add decoded letter to string
			decodedStr += CHAR_MAP[str[i]];
		} else {
			// else add char as is
			decodedStr += str[i];
		}
	}

	return decodedStr;
}
console.log(rot13("SERR PBQR PNZC"));
// rot13("SERR PBQR PNZC");
