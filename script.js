const resetButton = document.getElementById("resetButton");
const message = document.getElementById("gameMessage");
const ticboard = document.getElementById("tic-tac-toe-board");
const cell = document.getElementById("tic-tac-toe-board");


const cells = document.querySelectorAll(".cell")

//парсим нажатую клавишу
cells.forEach(item => {
  item.addEventListener('click', search)
})
let isX = true
// function test(){
// let pressed_cell = this

// pressed_cell.innerText= 'X';

// console.log(pressed_cell)

// }


function search(){
  let pressed_cell = this
  if(isX){
    pressed_cell.innerText= 'X';
    isWin()
    return isX=false
  }
  if(isX==false){
    pressed_cell.innerText= 'O';
    isWin()
    return isX=true;
  }
}
function isWin(){
  if(cells[0] && cells[4] && cells[8] == "X" || "O"){
    console.log('Win')
  }
  
}





// const massive = [", 1, 3, 4, 5]


// Добавляем HTML-элементы
// resetButton.addEventListener('click', clear_ticboard)
// ticboard.addEventListener('click',analyze_cell )

// function analyze_cell(){
//   if (){

//   }
// }

// const cells = document.querySelectorAll(".cell") //получаем клетки как NodeLisе
// let reformat = Array.from(cells) //Преобразуем NodeList в массив

// let reformat = Array.from(cells)
// cell.addEventListener('click',test)






















































// // Импорт значений из html
// const btn = document.getElementById("button");
// const pwd = document.getElementById("pwd");
// const show_pwd = document.getElementById("show_pass");
// const login = document.getElementById("login");
// // Подвязка кнопки к функциям
// // btn.addEventListener('click', check_login)
// btn.addEventListener('click', check_pwd)
// show_pwd.addEventListener('click', showPwd)

//   document.getElementById('login').addEventListener('input', function (event) {  
//     const inputValue = event.target.value;
//     event.target.value = inputValue.replace(/[^0-9A-Za-z@.]/g, '');  
     
// })
// document.getElementById('login').addEventListener('click', function (login) { 
     
//     const min = 4
//     const max = 16
//     const length_login = login.value.length
//     if (length_login<min) {
//       return(alert( "Логин короче: " + min + " Символов"))
//     }  
//     if (length_login>max) {
//       return(alert( "Логин длинее: " + max + " Символов"))
//     };  
// })

// function func () {

// }

// function check_pwd(){
//   console.log(pwd.value.length)
//   const length_pass = pwd.value.length
//   const min = 6
//   const max = 12
//   if (length_pass<=min){
//    return(alert("Неправильной длинны"))
//   } else {
//     return(alert("Правильной длинны"))
//   }
// }

// function showPwd(){
//   console.log(pwd);

//  if(pwd.type=="password"){
//    pwd.type="text"
//    show_pwd.className = 'on';
//  } else{
//   pwd.type="password"
//    show_pwd.classList.remove('on')
//    show_pwd.classList.add('off')
//  }
// }















// let bool = true






















// 2 задание                                  



// const obj ={
//     name:'Ivan',
//     age: 17,
//     city:'Ekaterenburg'
// }
// if(obj.name>=18){
//     console.log("Совершеннолетний")
// }else{
//      console.log("Несовершеннолетний")
// }
// console.log(hi)  
                               
// // 3 задание

// function calk(a,b){
//   return false
// }

// console.log(calk(7,9));








// alert("sdfsdf")

// confirm("Вам есть 18?")

// prompt("Текст")



// let age =confirm("Нажмите ок")
// if (age){
//     console.log("ок")
// }else{
//     console.log("ну ок")
// }


// console.log(calkulator("plus", 32432,432423))
// console.log(calkulator("minus", 32432,432423))
// console.log(calkulator("ymnoshenie", 32432,432423))
// console.log(calkulator("delenye", 32432,432423))

// let ab= prompt ("Введите что либо и я отправлю это в консоль")
// console.log(ab)

// 4 задание

// let object ={}
// let name_user = prompt("Введите свое имя:")
// object.name = name_user

// let age = confirm ("Есть ли вам 18 лет?")
// object.age = age

// let city = prompt("Введите город из которого родом:")
// object.city = city

// function func(par) {
//   let ageText;
//   if(par.age) {
//     ageText = 'тебе есть 18 лет'
//   } else {
//     ageText = 'тебе нет 18 лет'
//   }

//   console.log(`Привет, ${par.name}, ${ageText}, ты из города ${par.city}`)
//   console.log(par.name)
//   console.log(par.age)
//   console.log(par.city)
// }

// func(object)
// function age_logg(age){
//   if (age == true){
//     object.age =
//   }
  
// }


// if (age == true) {
  //     object.age = "Тебе есть 18 лет";
  // } else {
    //     object.age = "Тебе нет 18 лет";
    // }
    
// let message =alert(`Привет, ${object.name}, ${age_logg}, ты из города ${object.city}`)
