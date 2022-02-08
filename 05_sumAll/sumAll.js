const sumAll = function(num1, num2) {
    let sum = 0
    if(typeof num1 == 'number' && typeof num2 == 'number' && num1 >= 0 && num2 >=0){
        if(num1 <= num2){
            for(x=num1; x<=num2; x++){
                sum += x
            }
            return(sum)
        } else if(num2 < num1){
            for(x=num2; x<=num1; x++){
                sum += x
            }
            return(sum)
        }
    } else {
        return('ERROR')
    }
};

// Do not edit below this line
module.exports = sumAll;
