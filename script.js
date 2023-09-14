let add = (num1, num2) => {
    if (num1 > 9) {
        throw "num1 is too large"
    }
    else if (num1 < 0) {
        throw"num1 is too small"
    }
    if (num2 > 9) {
        throw"num2 is too large"
    }
    else if (num2 < 0) {
        throw "num2 is too small"
    }


} 

try {
    console.log(add(10, -2))
}
catch (error) {
    console.log("there was an error ! Try again later")
    console.log(error)
}
finally {
    console.log("Done");
}