function findDistinctSum(set1, set2) {
    let distinctElements = [];
    
    // Add elements from set1 to the distinctElements array
    for (let element of set1) {
      if (!distinctElements.includes(element)) {
        distinctElements.push(element);
      }
    }
  
    // Add elements from set2 to the distinctElements array
    for (let element of set2) {
      if (!distinctElements.includes(element)) {
        distinctElements.push(element);
      }
    }
  
    // Calculate the sum of all distinct elements
    let sum = 0;
    for (let element of distinctElements) {
      sum += element;
    }
  
    return sum;
  }
  
  // Test the function with the example sets
  const set1 = [3, 1, 7, 9];
  const set2 = [2, 4, 1, 9, 3];
  const result = findDistinctSum(set1, set2);
  console.log(result); 
  