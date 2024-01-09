function convertToRoman(num) {
	const romanLookupTable = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1,
	};

	//  Set up string to capture symbols
	let romanNumeral = "";

	// Iterate through each key in the table once
	for (const key in romanLookupTable) {
		const romanValue = romanLookupTable[key];

		// check if and how many times value is in num
		while (romanValue <= num) {
			num -= romanValue;
			romanNumeral += key;
		}
	}

	return romanNumeral;
}

console.log(convertToRoman(31));
