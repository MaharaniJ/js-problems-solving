function beautiful(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + +arr[i];
  }

  if (sum % 2 === 0 && sum % 3 === 0 && sum % 5 === 0) {
    return 1;
  } else {
    return 0;
  }
}

console.log(beautiful(5, 25, 35, -5, 30));

//end-here
