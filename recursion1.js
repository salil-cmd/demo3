// Without Recursion
// So i used loops
function withoutRecursion(n){
    while(n > 0){
        if(n == 1){
            console.log("n is 1")
        }
        console.log(n)
        n--;
    }
}

// withoutRecursion(3);


// With Recursion
function withRecursion(m){
    if(m == 1){
        return "n is 1"
    }
    else {
        return withRecursion(m - 1)
    }
}

// console.log(withRecursion(3)); 


// Table of 9

function table(num){
    if(temp == 10){
        return "Table Done"
    }
    console.log(num * temp);
    table(num + 1)
}

table(9, 10)


