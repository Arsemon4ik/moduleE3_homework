function is_prime_number(num){
    if (num < 1000 && Number(num) && num != 1) {
        for (let index = 1; index < 1000; index++) {
            if ((num % index == 0 && (num != index) && (index != 1)))
            {
                console.log('Не относится к простым числам!');
                return;
            }

        }
        console.log('Число простое!');
    }
    else if (num == 0 || num == 1){
        console.log('Ввели 0 или 1 , они не относятся к простым числам!')
    }
    else{
        console.log('данные неверны');
    }
}

is_prime_number(997);