

const infiniteRecur = a => b => b? infiniteRecur(a+b): a;

console.log(infiniteRecur(10)(20)(30)(40)());