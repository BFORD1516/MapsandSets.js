Set { 1, 2, 3, 4 }

 [...new Set("referee")].join("")  //"referee," 

 let m = new Map();
 m.set([1,2,3], true);
 m.set([1,2,3], false);
 
 /*
   0: {Array(3) => true}
   1: {Array(3) => false}
 */

   function hasDuplicate(array) {
    // Use a Set to store unique elements
    const uniqueElements = new Set();
  
    // Iterate through the array
    for (const element of array) {
      // If the element is already in the set, it's a duplicate
      if (uniqueElements.has(element)) {
        return true;
      }
  
      // Otherwise, add the element to the set
      uniqueElements.add(element);
    }
  
    // If the loop completes without returning, there are no duplicates
    return false;
  }
  
  // Test cases
  console.log(hasDuplicate([1, 3, 2, 1])); // true
  console.log(hasDuplicate([1, 5, -1, 4])); // false

  function vowelCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const result = new Map();
  
    str.toLowerCase().split('').forEach((char) => {
      if (vowels.includes(char)) {
        result.set(char, (result.get(char) || 0) + 1);
      }
    });
  
    return result;
  }

