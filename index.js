// A closure is the combination of a function and the lexical evironment within which that function was declared.//
//Closure in action that is inner function can have access to the outer function variables as well as all the global variables.

const outerFun = (a) => {
  let b = 10;
  const innerFunc = () => {
    let sum = a + b;
    console.log(`The sum of two no is ${sum}`);
  };
  return innerFunc;
};

// outerFun(45);

let inner = outerFun(45);
// console.log(inner)
inner();
