//write a recursive function to flatten an array of nested arrays

function flattenArray(arr) {
    let result = [];
    
    arr.forEach(element => {
      if (Array.isArray(element)) {
        result = result.concat(flattenArray(element));
      } else {
        result.push(element);
      }
    });
    
    return result;
  }


//Now, we can implement trampolining to handle potentially large recursive calls without causing a stack overflow. Trampolining works by repeatedly invoking a series of thunk functions (functions that return another function) until a final result is reached. Here's how we can trampoline the flattenArray function:

function trampoline(fn) {
    let result = fn();
    while (typeof result === 'function') {
      result = result();
    }
    return result;
  }
  
  function trampolineFlattenArray(arr) {
    function _flattenArray(arr, index = 0, result = []) {
      if (index >= arr.length) {
        return result;
      }
  
      const element = arr[index];
      if (Array.isArray(element)) {
        return () => _flattenArray(element, 0, result);
      } else {
        result.push(element);
        return () => _flattenArray(arr, index + 1, result);
      }
    }
    
    return trampoline(() => _flattenArray(arr));
  }
  
  // Test the trampolined function
  const nestedArray = [1, [2, [3, 4, [5, 6]], 7], 8];
  const flattenedArray = trampolineFlattenArray(nestedArray);
  console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

  
  //In this code, trampolineFlattenArray is a trampolined version of the flattenArray function. It uses the trampoline function to repeatedly execute the _flattenArray function until it produces a non-function result, effectively avoiding stack overflow issues.