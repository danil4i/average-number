const numbers = document.getElementById('numbers');
const buttonAverage = document.getElementById('buttonAverage');
const inputtedNumbers = document.getElementById('inputtedNumbers');
const averageNumber = document.getElementById('averageNumber');
const buttonAdd = document.getElementById('buttonAdd');


let InputNumbers = [];


let number
numbers.addEventListener('input', (e) => {
    number = parseFloat(e.target.value)
}) 

buttonAverage.addEventListener('click', (e) => {
    InputNumbers.push(number)
    numbers.value = ''
    UpdateNumberList()
})




function UpdateNumberList () {
    inputtedNumbers.innerHTML = InputNumbers.map((item)=> {
        return item + '</br>'
    })
    const average = InputNumbers.reduce((sum, value) => sum + value, 0) / InputNumbers.length;
    averageNumber.innerHTML = average
}


