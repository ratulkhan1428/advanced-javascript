let bonus = 20;

function sum (first, second) {
    let  result = first + second + bonus;
    // console.log(bonus);
    if(result > 9) {
        var mood = "happy";
        mood = "sad";
        mood = "romantic";
        // console.log(mood);
    }
    // console.log(day);
    // let day = "friday";

    return result;
}

const output = sum(1, 6);
console.log(output);