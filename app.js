var inputValue = document.getElementById('inputValue')
var topArea = document.getElementById('output')



var  deleteHandler = document.getElementById("delBtn").addEventListener('click',deleteHandler)
var  sevenHandler = document.getElementById("sevenBtn").addEventListener('click',sevenHandler)
var  fourHandler = document.getElementById("fourBtn").addEventListener('click',fourHandler)
var  oneHandler = document.getElementById("oneBtn").addEventListener('click',oneHandler)
var  plusMinusHandler = document.getElementById("plusMinusBtn").addEventListener('click',plusMinusHandler)
var  allClearHandler = document.getElementById("ACBtn").addEventListener('click',allClearHandler)
var  eightHandler = document.getElementById("eightBtn").addEventListener('click',eightHandler)
var  fiveHandler = document.getElementById("fiveBtn").addEventListener('click',fiveHandler)
var  twoHandler = document.getElementById("twoBtn").addEventListener('click',twoHandler)
var  zeroHandler = document.getElementById("zeroBtn").addEventListener('click',zeroHandler)
var  percentHandler = document.getElementById("percentBtn").addEventListener('click',percentHandler)
var  nineHandler = document.getElementById("nineBtn").addEventListener('click',nineHandler)
var  sixHandler = document.getElementById("sixBtn").addEventListener('click',sixHandler)
var  threeHandler = document.getElementById("threeBtn").addEventListener('click',threeHandler)
var  periodHandler = document.getElementById("periodBtn").addEventListener('click',periodHandler)
var  divideHandler = document.getElementById("divideBtn").addEventListener('click',divideHandler)
var  multiplyHandler = document.getElementById("multiplyBtn").addEventListener('click',multiplyHandler)
var  minusHandler = document.getElementById("minusBtn").addEventListener('click',minusHandler)
var  plusHandler = document.getElementById("plusBtn").addEventListener('click',plusHandler)
var  equalHandler = document.getElementById("equalBtn").addEventListener('click',equalHandler)
function deleteHandler() {
    console.log("deleteHandler")

}
function sevenHandler() {
    console.log("sevenHandler")
    inputValue.value += 7;
}
function fourHandler() {
    console.log("fourHandler")
    inputValue.value += 4;
}
function oneHandler() {
    console.log("oneHandler")
    inputValue.value += 1;
}
function plusMinusHandler() {
    console.log("plusMinusHandler")
    // inputValue.value +=
}
function allClearHandler() {
    console.log("allClearHandler")
    inputValue.value = "";
    topArea.textContent = "";
}
function eightHandler() {
    console.log("eightHandler")
    inputValue.value += 8;
}
function fiveHandler() {
    console.log("fiveHandler")
    inputValue.value += 5;
}
function twoHandler() {
    console.log("twoHandler")
    inputValue.value += 2;
}
function zeroHandler() {
    console.log("zeroHandler")
    inputValue.value += 0;
}
function percentHandler() {
    console.log("percentHandler")
    topArea.textContent += inputValue.value + " % ";
    inputValue.value = "";
}
function nineHandler() {
    console.log("nineHandler")
    inputValue.value += 9;
}
function sixHandler() {
    console.log("sixHandler")
    inputValue.value += 6;
}
function threeHandler() {
    console.log("threeHandler")
    inputValue.value += 3;
}
function periodHandler() {
    console.log("periodHandler")
    inputValue.value += ".";
}
function divideHandler() {
    console.log("divideHandler")
    topArea.textContent += inputValue.value + " / ";
    inputValue.value = "";
}
function multiplyHandler() {
    console.log("multiplyHandler")
    topArea.textContent += inputValue.value + " X ";
    inputValue.value = "";
}
function minusHandler() {
    console.log("minusHandler")
    topArea.textContent += inputValue.value + " - ";
    inputValue.value = "";
}
function plusHandler() {
    console.log("plusHandler")
    topArea.textContent += inputValue.value + " + ";
    inputValue.value = "";
}
function equalHandler() {
    console.log("equalHandler")
    topArea.textContent += inputValue.value
    inputValue.value = "";
}