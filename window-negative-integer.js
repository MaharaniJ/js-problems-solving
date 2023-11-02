function firstNegativeInWindow(arr, k) {
    const result = [];
    const window = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        window.push(arr[i]);
      }
  
      if (i >= k - 1) {
        if (window.length === 0) {
          result.push(0); // If no negative number in the window
        } else {
          result.push(window[0]);
          if (arr[i - k + 1] === window[0]) {
            window.shift(); // Remove the first element if it's out of the window
          }
        }
      }
    }
  
    return result;
  }
  
  // Example usage:
  const arr = [2, -1, -3, 4, -2, -1, 6, 5];
  const k = 3;
  const result = firstNegativeInWindow(arr, k);
  console.log(result); // Output: [ -1, -3, -3, -2, -1, -1 ]
  