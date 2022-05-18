
let st2 = 1
if (typeof(st2) == "string"){homework_2(st2)}
else {console.log("Введён не string")}

function homework_2 (st1){
if (st1.length >= 1 && st1.length < 5) {console.log("Меньше 5 символов - " +st1.length)}
else if (st1.length > 64) {console.log("Превышение количества символов в строке. Больше 64 - " +st1.length)}
else if (st1.length == "0") {console.log("В строку не введено ни одного символа")}
// else {console.log("ok")};

if (/[a-z]/i.test(st1)); //{console.log("Буквы есть")} i - игнор регистра
else {console.log ("Букв нет")};

if (/[A-Z]/.test(st1)); //{console.log("Есть буквы верхнего регистра")}
else {console.log ("Нет букв верхнего регистра")};

if (/[0-9]/.test(st1)); //{console.log("Цифры етсь")}
else {console.log ("Цифр нет")};

if (/[@]/.test(st1)); //{console.log("Есть @")}
else {console.log ("Нет @")};
}



