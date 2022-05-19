
let st1 = "1S@gf"

if (typeof(st1) == "string"){if((check1(st1) + check2(st1) + check3(st1) + check4(st1) + check5(st1))){console.log("Все условия выполнены!")}}
else {console.log("Введён не string")}

function check1 (st1){
if (st1.length >= 1 && st1.length < 5) {return false, console.log("Введено " +st1.length, "символа. Это меньше 5")}
else if (st1.length > 64) { return false, console.log("Превышение количества символов в строке. Больше 64 - " +st1.length)}
else if (st1.length == "0") {return false, console.log("В строку не введено ни одного символа")}
else {return true}}

function check2 (st1) {
if (/[a-z]/i.test(st1)) {return true} //{console.log("Буквы есть")} i - игнор регистра
else {return false, console.log ("Букв нет")}}

function check3 (st1){
if (/[A-Z]/.test(st1)){return true} //{console.log("Есть буквы верхнего регистра")}
else {return false, console.log ("Нет букв верхнего регистра")}}

function check4(st1){
if (/[0-9]/.test(st1)){return true} //{console.log("Цифры етсь")}
else {return false, console.log ("Цифр нет")}}

function check5 (st1){
if (/[@]/.test(st1)){return true} //{console.log("Есть @")}
else {return false, console.log ("Нет @")}}