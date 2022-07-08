const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Number type-a çevirmək üçün parseInt() metodundan istifadə edirik.
    Vergüllə daxil edilmiş sətri iki fərqli ədədə bölmək üçün split metodundan istifadə edirik.
    */
    var input = result.input; // "5,2 4 7 12 9"
    var input_data = input.split(','); // ['5', '2 4 7 12 9']
    var n = parseInt(input_data[0]); // Massivin element sayı. Nümunə - 5
    var str = input_data[1].split(' '); // Daxil edilmiş massiv. Nümunə - ['2', '4', '7', '12', '9']
    let num = str.split(",")
    let five = 0
    let two = 0
    for (let el of num) {
        if(el==5){
    five++
        }else{
            two++
        }
        if(five>two){
            console.log("5");
    }else if(five<two){
        console.log("2");
    }else{
        console.log("=");
    }
    }
});
