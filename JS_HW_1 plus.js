let item1;
item1 = 5;
console.log("Задание 3", item1);

let item2;
item2 = 3;
console.log("Задание 6", item2);

let item3;
item3 = item1 + item2;
console.log("Задание 9", item3);

let item4;
item4 = "yolochka";

console.log("Задание 12", item4);
console.log("Задание 13", item3 + item4);
console.log("Задание 14", item3 * item4);

let item5;
item5 = item3;
let item6; let item6_type
item6 = 15;
item6_type = typeof(item6);
console.log("Задание 21", "item6 = "+ item6, "item6_type = "+ item6_type);

let item7 = String(item6);
let item7_type = typeof(item7);
console.log("Задание 25","item7 = "+ item7, "item7_type = "+ item7_type);

let age1 = 10;
let age2 = 18;
let age3 = 60;
if (age1 == 10) {console.log("Задание 29")}
if (age1 < age2) {
    console.log("Задание 30 You don’t have access cause your age is "+age1, ". It’s less then "+age2)}
if (age1 >= age2 & age1 < age3) {console.log("Задание 31 = Welcome!")}
if (age1 > age3) {console.log("Keep calm and look Culture channel")}
else {console.log("Technikal work")}
//-------------------------------------------
console.log("HW_1*1----------------------------");

const checkAge1 = function(age_1) {
if (age_1 < age2) {console.log("You don’t have access cause your age is "+age_1, ". It’s less then "+age2)}
else if (age_1 >= age2 & age_1 < age3) { console.log("Welcome!")}
else if (age_1 > age3) {console.log("Keep calm and look Culture channel")}
else {console.log("Technikal work")}
};
checkAge1(17)
checkAge1(18)
checkAge1(61)
// --------------------------------------------
console.log("HW_1*2----------------------------");
let age_2 = 61
if (typeof(age_2) == "number") {checkAge2(age_2)} 
else {console.log("Error!")}
function checkAge2(age_2) {
    if (age_2 < age2) {console.log("You don’t have access cause your age is " + age_2, ". It’s less then " + age2)}
    else if (age_2 >= age2 & age_2 < age3) {console.log("Welcome!")}
    else if (age_2 > age3) {console.log("Keep calm and look Culture channel")}
    else {console.log("Technikal work")}
}
//----------------------------------------------
console.log("HW_1*3----------------------------");
let age_3 = "18";
if (typeof(+age_3) == "number") {checkAge3(age_3)} 
else {console.log("Error!")}
function checkAge3(age_3) {
    if (age_3 < age2) {console.log("You don’t have access cause your age is " + age_3, ". It’s less then " + age2)}
    else if (age_3 >= age2 & age_3 < age3) {console.log("Welcome!")}
    else if (age_3 > age3) {console.log("Keep calm and look Culture channel")}
    else {console.log("Technikal work")}
}
//-------------------------------------------------
console.log("HW_1*4----------------------------");
let age_4 = prompt ("How old are you?", "")
if (typeof(+age_4) == "number") {checkAge3(age_4)} 
else {alert("Error!")}
function checkAge3(age_4) {
    if (age_4 < age2) {alert("You don’t have access cause your age is " + age_4, ". It’s less then " + age2)}
    else if (age_4 >= age2 & age_4 < age3) {alert("Welcome!")}
    else if (age_4 > age3) {alert("Keep calm and look Culture channel")}
    else {alert("Technikal work")}}

