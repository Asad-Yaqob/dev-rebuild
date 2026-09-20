const userName = new String("AsadYaqoob");
userName.anchor("hello"); // .anchor is deprecated it wraps the string with html element anchor tag with name attribute with the passed value in anchor("value").
// console.log(userName);

const sentence = "The quick brown fox jumps over the lazy dog."; // this method returns the charcter at specified position mentioned in .at(0) it can be positive and negative. negative will start from the backword.
// console.log(sentence.at(-2));

const str = "To be, or not to be, that is the question.";

// console.log(str.endsWith("question.")); // true
// console.log(str.endsWith("to be")); // false
// console.log(str.endsWith("to be", 18)); // true

// this method returns true and false if the searchString is found or not. and with no end postion provided it looks at the end of the
// string. if provided it will pretend the end of string at the specified location.

// Includes: this method returns true and false if the searchString is found or not. and with postion provided the default point is index 0 for searching
// if provided it will start the search at the specified location.

console.log(str.includes("To be")); // true
console.log(str.includes("question")); // true
console.log(str.includes("nonexistent")); // false
console.log(str.includes("To be", 1)); // false
console.log(str.includes("TO BE")); // false
console.log(str.includes("")); // true

// indexOf()
// indexOf() searches a string for a specified substring and returns the **index of its first occurrence**.
// If the substring is not found, it returns **-1**. An optional fromIndex` specifies the position from which the search should begin;
//  the search can still find a match **after** `fromIndex`, but not before it.

"Blue Whale".indexOf("Blue"); // returns  0
"Blue Whale".indexOf("Wale"); // returns -1
"Blue Whale".indexOf("Whale", 0); // returns  5
"Blue Whale".indexOf("Whale", 5); // returns  5
"Blue Whale".indexOf("Whale", 7); // returns -1
"Blue Whale".indexOf(""); // returns  0
"Blue Whale".indexOf("", 9); // returns  9
"Blue Whale".indexOf("", 10); // returns 10
"Blue Whale".indexOf("", 11); // returns 10

// Important scenarios:

//  str.indexOf("x") → searches from index 0.
//  str.indexOf("x", n) → starts searching from index n.
//  If the substring exists at or after fromIndex, its first matching index is returned.
//  If no match exists from fromIndex onward, -1 is returned.
//  str.indexOf("") → returns 0 because an empty string can match at the beginning.
//  str.indexOf("", n) → returns n as long as n is within the string's length.
//  If fromIndex is greater than the string's length, the effective position is the string's length, so str.indexOf("", n) returns str.length.
//  indexOf() is **case-sensitive**, so "A" and "a" are different.

// isWellFormed()
// isWellFormed() checks whether a JavaScript string contains valid Unicode characters, specifically checking for lone surrogate characters.
const strings = [
  // Lone leading surrogate
  "ab\uD800",
  "ab\uD800c",
  // Lone trailing surrogate
  "\uDFFFab",
  "c\uDFFFab",
  // Well-formed
  "abc",
  "ab\uD83D\uDE04c",
];

// for (const str of strings) {
//   console.log(str.isWellFormed());
// }

// Logs:
// false
// false
// false
// false
// true
// true

// The localeCompare() method of String values
// returns a number indicating whether this string comes before, or after, or is the same as the given string in sort order.

// The letter "a" is before "c" yielding a negative value
"a".localeCompare("c"); // -2 or -1 (or some other negative value)

// Alphabetically the word "check" comes after "against" yielding a positive value
"check".localeCompare("against"); // 2 or 1 (or some other positive value)

// "a" and "a" are equivalent yielding a neutral value of zero
"a".localeCompare("a"); // 0

// The match() method of String values retrieves the result of matching this string against a regular expression.
const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// Expected output: Array ["T", "I"]

// padStart() and padEnd() add characters until the string reaches the specified target length.
// padStart() adds them to the beginning, while padEnd() adds them to the end.

"42".padStart(5, "0");
"42".padEnd(5, "0");
"hello".padStart(3, "*");
"cat".padEnd(7, "-");


// lastIndexOf() searches backward from fromIndex (or from the end if no fromIndex is provided) 
// and returns the index of the last occurrence. If no match is found, it returns -1.
"canal".lastIndexOf("a"); // returns 3
"canal".lastIndexOf("a", 2); // returns 1
"canal".lastIndexOf("a", 0); // returns -1
"canal".lastIndexOf("x"); // returns -1
"canal".lastIndexOf("c", -5); // returns 0
"canal".lastIndexOf("c", 0); // returns 0
"canal".lastIndexOf(""); // returns 5
"canal".lastIndexOf("", 2); // returns 2

// The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.
"abc".repeat(-1); // RangeError
"abc".repeat(0); // ''
"abc".repeat(1); // 'abc'
"abc".repeat(2); // 'abcabc'
"abc".repeat(3.5); // 'abcabcabc' (count will be converted to integer)
"abc".repeat(1 / 0); // RangeError

// replace() searches a string for a specified pattern and returns a new string with the matching part replaced.
// replace() does not modify the original string. It returns a new string.


console.log(paragraph.replace("name", "nickname"));
// Expected output: "This dog's nickname is just Dog! Yes, that is the name."

console.log(paragraph.replace(/\bis\b/, "was"));
// Expected output: "This dog's name was just Dog! Yes, that is the name."

console.log(paragraph.replace(/\bis\b/g, "was"));
// Expected output: "This dog's name was just Dog! Yes, that was the name."

// replaceAll() searches the entire string and replaces every occurrence of the specified search value.
// If you use a regular expression with replaceAll(), the regex must have the g flag.

// The search() method of String values executes a search for a match between a regular expression and this string,
// returning the index of the first match in the string.

const paragraphs = "I think Ruth's dog is cuter than your dog!";

// Anything not a word character, whitespace or apostrophe
const regexs = /[^\w\s']/g;

console.log(paragraphs.search(regexs));
// Expected output: 41

console.log(paragraphs[paragraphs.search(regexs)]);
// Expected output: "!"

// The most important rules to remember

// slice(start, end)
// Start included, end excluded. Supports negative indexes.

// substring(start, end)
// Start included, end excluded. Negative values become 0, and reversed arguments are swapped.

// split(separator)
// Breaks a string wherever the separator occurs and returns an array.
