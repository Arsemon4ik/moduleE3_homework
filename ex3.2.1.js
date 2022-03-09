function get_count_even_nums(arr){
    let counter_even = 0;
    for (let index = 0; index < arr.length; index++) {
        if (Number(arr[index]) && (arr[index] % 2 == 0)){
            counter_even += 1;
        }

        else if (Number(arr[index]) && (arr[index] === 0) || (arr[index] == null)){
            console.log(`Index ${index} is null or 0`); // 4 индекс попадает - null, а 7 индекс то есть 0 не хочет попадать в if, помогите найти ошибку пожалуйста
        }

    }
    return counter_even;
}
function get_count_odd_nums(arr){
    let counter_odd = 0;
    for (let index = 0; index < arr.length; index++) {
        if (Number(arr[index]) && (arr[index] % 2 != 0)){
            counter_odd += 1;
        }

        else if (Number(arr[index]) && (arr[index] === 0) || (arr[index] == null)){
            // 4 индекс попадает - null, а 7 индекс то есть 0 не хочет попадать в if, помогите найти ошибку пожалуйста
        }

    }
    return counter_odd;
}

function get_index_null(arr){
    let index = arr.findIndex(function(value){
        return value === 0 || value == NaN; // очень интересно, если поставить вместо NaN - null то работать будет не правильно, почему - неизвестно :(
    })
    return index;

}

let arr = [1,NaN,3,'4qwer',null,12,Object,0,true]

console.log(`Even counter = ${get_count_even_nums(arr)}` + '\n' + `Odd counter = ${get_count_odd_nums(arr)}` + '\n' + `Index ${get_index_null(arr)} is null or 0`);

