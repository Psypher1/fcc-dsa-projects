// const RE = /^\d\d\d-\d\d\d-\d\d\d\d$/;
const RE = /^\d{3}-\d{3}-\d{4}$/;
const RE2 = /^\(\d{3}\)\s?\d{3}-\d{4}$/;
const RE3 = /^\d{3}\s?\d{3}\s?\d{4}$/;

const RE4 = /^\d{10}$/;
const RE5 = /^1\s\d{3}\s\d{3}\s\d{4}$/;
const RE6 = /^1\s\d{3}-\d{3}-\d{4}$/;
const RE7 = /^1\s?\(\d{3}\)\s?\d{3}-\d{4}$/;

// create array of regex
const REGEXES = [RE, RE2, RE3, RE5, RE6, RE7];

function telephoneCheck(str) {
	// loop through regexes
	for (let regex of REGEXES) {
		// if one matches, return true
		if (regex.test(str)) {
			return true;
		}
	}

	return false;
}

console.log(telephoneCheck("1 555 555 5555"));
