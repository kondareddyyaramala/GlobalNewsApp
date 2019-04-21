const constructObject = (config, ref) => {
    config = config || {};
    Object.keys(config).forEach(key => {
        ref[key] = config[key];
    })
}


const func = x => y => x * y;

// Factorial function
const factorial = (num, accum = 1) => {
   if(num < 2){
    return accum;
   }
   return factorial(num -1 , num * accum );
}

export default constructObject;