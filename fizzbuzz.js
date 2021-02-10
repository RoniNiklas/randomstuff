// fastest
const fizzbuzzIfElse = (value) =>  {
    const isDivisibleBy3 = value % 3 == 0;
    const isDivisibleBy5 = value % 5 == 0;
    
    if (isDivisibleBy3 && isDivisibleBy5) {
        return "FIZZBUZZ";
    } else if (isDivisibleBy3) {
        return "FIZZ";
    } else if (isDivisibleBy5) {
        return "BUZZ";
    }
    return "";
};

// 1.5% slower than ifelse
const fizzbuzzIfElseNoMem = (value) =>  {
    if (value % 3 == 0 && value % 5 == 0) {
        return "FIZZBUZZ";
    } else if (value % 3 == 0 ) {
        return "FIZZ";
    } else if (value % 5 == 0) {
        return "BUZZ";
    }
    return "";
};

// 15-17.5% slower than ifelse
const fizzbuzzStringConcat = (value) =>  
    `${value % 3 == 0 ? "FIZZ" : ""}${value % 5 == 0 ? "BUZZ" : ""}`;
    


 
