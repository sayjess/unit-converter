// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound


const buttonEl = document.getElementById("convert-btn")
const inputEl = document.getElementById("input")
const massEl = document.getElementById("mass")
const volumeEl = document.getElementById("volume")
const lengthEl = document.getElementById("length")


buttonEl.addEventListener("click", function() {
    let userInput = inputEl.value
    lengthEl.textContent = `
        ${userInput} meters = ${(userInput * 3.281).toFixed(3)} feet | 
        ${userInput} feet = ${(userInput * 0.3048).toFixed(3)} meters
    `
    volumeEl.textContent = `
        ${userInput} liters = ${(userInput * 0.264).toFixed(3)} gallons | 
        ${userInput} gallons = ${(userInput * 3.78541).toFixed(3)} liters
    `
    mass.textContent = `
        ${userInput} kilos = ${(userInput * 2.204).toFixed(3)} pounds | 
        ${userInput} pounds = ${(userInput * 0.453592).toFixed(3)} kilos
    `
    
})