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
    let arr = str.split(" ")
    let count = 0
    let arr = s.toLowerCase()
    for(let i=0; i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
    if(arr[i][j]==c){
        count++
       
    }}
    } console.log(count);
});
