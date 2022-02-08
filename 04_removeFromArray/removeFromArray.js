const removeFromArray = function(arr, ...itemsToRemove) {
    originalArr = arr
    unwantedArr = itemsToRemove
    len = unwantedArr.length-1

    for(x = 0; x<=len; x++){
       originalArr = originalArr.filter(function(item){
                return item !== unwantedArr[x]
            })
    }
    return(originalArr)
};

//console.log(removeFromArray([1, 2, 3, 4], 3))
//removeFromArray([1, 2, 3, 4, 7], 7, "tacos")


// Do not edit below this line
module.exports = removeFromArray;
