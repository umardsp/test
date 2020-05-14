//definisikan 3 variabel
let prevNumber=''
let calculationOperator=''
let currentNumber='0'

// layar menampilkan angka yg benar
const calculatorScreen=document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value=number
}

//definisikan input number
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber=number
    } else {
        currentNumber +=number
    }
}

// ambil element2 button dan letakkan di class number
const numbers=document.querySelectorAll(".number")
numbers.forEach((number)=>{
    number.addEventListener("click",(event)=>{
        inputNumber(event.target.value);
        updateScreen(currentNumber)
    })
})

// bagian operator
const operators=document.querySelectorAll(".operator")
operators.forEach((operator)=> {
    operator.addEventListener("click", (event) => {
    inputOperator(event.target.value)
    })
})

// defenisikan input Operator
const inputOperator = (operator) => {
    if (calculationOperator ==='') {
        prevNumber = currentNumber 
    }
    calculationOperator=operator
    currentNumber=''
}

// tambah 1 click event utk =
const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click",()=>{
    calculate()
    updateScreen(currentNumber)
    //kembalikan fungsi agar nilai tidak bertambah setelah click =
    currentNumber=''
})

//definisikan fungsi kalkulator
// menggunakan parseFloat untuk mengubah string menjadi angka 
const calculate= ()=>{
    let result=''
    switch(calculationOperator) {
        case '+':
            result=parseFloat(prevNumber)+parseFloat(currentNumber)
            break
        case '-':
            result=parseFloat(prevNumber)-parseFloat(currentNumber)
            break
        case '*':
            result=parseFloat(prevNumber)*parseFloat(currentNumber)
            break
        case '/':
            result=parseFloat(prevNumber)/parseFloat(currentNumber)
            break
        default:
            return
    }
    currentNumber=result
    calculationOperator=''
}

// defenisikan clear element button
const clearBtn=document.querySelector(".all-clear")

clearBtn.addEventListener("click",()=> {
    clearAll()
    updateScreen(currentNumber)
})

//defenisikan clear All
const clearAll=()=> {
    prevNumber=''
    calculationOperator=''
    currentNumber='0'
}

//defenisikan desimal
const decimal=document.querySelector(".decimal");
inputDecimal=(dot)=> {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}
decimal.addEventListener("click", (event)=>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

//defenisikan persen
const percentage=document.querySelector(".percentage");
inputPercentage=(percent)=> {
    if(currentNumber.includes('%')) {
        return
    }
    currentNumber = currentNumber/100
}
percentage.addEventListener("click", (event)=>{
    inputPercentage(event.target.value)
    updateScreen(currentNumber)
})
