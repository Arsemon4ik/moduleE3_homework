function sum_part1(num1){
    return function(num2){
        return num1 + num2;
    }
}
// const sum_part1 = num1 => num2 => num1 + num2; // или так

const sum_part2 = sum_part1(1);
console.log(sum_part2(2))

