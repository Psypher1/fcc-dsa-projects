function alphaNumStr(str) {
	// replace takes regex & replacement string
	return str.replace(/[\W_]/gi, "");
	// return str.replace(/[^a-z0-9]/gi, '')
}

function strLowerCase(str) {
	return str.toLowerCase();
}

const strReverse = (str) => {
	let result = "";

	for (let i = str.length - 1; i >= 0; i--) {
		result += str[i];
	}

	return result;
};

// console.log(strReverse('milk and sausage'))

function palindrome(str) {
	// remove all non alpha num chars
	const cleanedStr = alphaNumStr(str);

	// make string lowwercase
	const lowercaseStr = strLowerCase(cleanedStr);

	// revese string
	const reversedStr = strReverse(lowercaseStr);

	// return comparison of?
	//  reveresed string === cleaned up string

	console.log(`is "${lowercaseStr}" equal to "${reversedStr}"`);

	return lowercaseStr === reversedStr;

	// return true;
}

// console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("hannah"));

/* Palindrome */
// hannah
// tenet
// tacocat

/* Not Palindrome */
//james
// javascript
// palindrome
