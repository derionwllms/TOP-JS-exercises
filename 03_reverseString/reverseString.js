const reverseString = function(input) {
    let len = input.length-1
    let output = ""
    for(x = len; x >=0; x--){
        output += input[x]
    }
    return(output)
};

// Do not edit below this line
module.exports = reverseString;
