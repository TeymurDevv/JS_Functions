let array = [2,4,5,7];
let sum = 0;
array.forEach(element => {
    if (element%2==0) {
        sum+=element**2;
    }
});
console.log(sum);

let monthArr =["Yanvar","Fevral","Mart","Aprel"];
let newArray = [];

function MonthIndex(arr){
    arr.forEach(function(value,index)
    {
        switch (value) {
            case "Yanvar":
                newArray.push(value+"-"+(index+1));
                break;
            case "Fevral":
                newArray.push(value+"-"+(index+1));
                break;
            default:
            case "Mart":
                newArray.push(value+"-"+(index+1));
                break;
            case "Aprel":
                newArray.push(value+"-"+(index+1))
                break;
        }
    }
    )
    return newArray;
}

console.log(MonthIndex(monthArr));