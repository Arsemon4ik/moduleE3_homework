//fisrt try

// const get_num = function cb(a,b){
//     (a == b+1) ? null : (console.log(a),a++,setTimeout(cb,1000,a,b));
// }
// get_num(1,5);



// second try

const get_num = (a,b) => {
    setInterval(() => {
        if (a<=b)
        {
            console.log(a);
            a++;
        }
        else
            return;

    },1000)
}
get_num(1,5);