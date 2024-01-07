// Import NPM Package
const _ = require('underscore');
// Call appropriate function from the NPM package to solve the assignment

/**
 * Print out the result if ["Java", "Javascript", "Typescript"] this array 
 * contains "Java"
 */
// First Answer 
const languages = ["Java", "Javascript", "Typescript"];
const containsJava = _.contains(languages, "Java");
console.log(`Array contains "Java": ${containsJava}`);



/**
 * Print out the result if ["Java", "Javascript", "Typescript"] this array 
 * contains "C++"
 */
// Second Answer
const containsCpp = _.contains(languages, "C++");
console.log(`Array contains "C++": ${containsCpp}`);
