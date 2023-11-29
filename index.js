function countNeighboringMines(board) {
   
  }
  
  
  const testCases = [
    {
      input: [
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 1, 0, 1],
        [1, 1, 0, 0],
      ],
      expected: [
        [1, 9, 2, 1],
        [2, 3, 9, 2],
        [3, 9, 4, 9],
        [9, 9, 3, 1],
      ],
    },
  ];
  
  testCases.forEach((testCase, index) => {
    const { input, expected } = testCase;
    const result = countNeighboringMines(input);
    
    console.log(`Test Case ${index + 1}:`);
    console.log('Input:');
    console.log(input);
    console.log('Expected Output:');
    console.log(expected);
    console.log('Actual Output:');
    console.log(result);
    console.log();
  });
  