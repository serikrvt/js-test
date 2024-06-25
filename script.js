const users = [
  { id: 1, name: 'Alice', age: 25, city: 'New York' },
  { id: 2, name: 'Bob', age: 30, city: 'Los Angeles' },
  { id: 3, name: 'Charlie', age: 28, city: 'Chicago' },
  { id: 4, name: 'David', age: 35, city: 'Houston' },
  { id: 5, name: 'Alice', age: 20, city: 'London' },
  { id: 6, name: 'Mark', age: 18, city: 'London' },
];

let fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
 const elem = document.querySelectorAll('.highlight')
 console.log(elem);
 
 for ( let i = 0;i < elem.length; i++ ){
  elem[i].style.backgroundColor = 'yellow'
 }
// Напишите код, который находит все элементы с классом highlight и изменяет их цвет фона на желтый.
 const btn = document.querySelector("#toggle-button");
 btn.addEventListener("click",()=>{
 const item =document.querySelector("#toggle-element")
 const disp =item.style.display;
 console.log(disp);
 if( disp === "none"){
   item.style.display= "block"
 
 }else {
   item.style.display= "none"
 }
 })
 // Создайте кнопку с текстом "Изменить цвет". При нажатии на кнопку все элементы с классом change-color должны поменять свой цвет текста на красный.



// Создайте список <ul>. Добавьте в него пять элементов <li> с текстом "Элемент 1", "Элемент 2" и так далее. Каждый нечетный элемент списка должен иметь класс odd и синий цвет текста.


// Создайте форму с полем ввода текста и кнопкой "Добавить". При нажатии на кнопку в конец списка <ul> должен добавляться новый элемент <li> с текстом из поля ввода.

// Сделайте элемент видимым или скрытым при нажатии на кнопку.

{/* <div id="toggle-element">Этот элемент можно скрыть</div>
  <button id="toggle-button">Скрыть/Показать элемент</button> */}

// Измените атрибут src изображения при нажатии на кнопку.

{/* <img id="image" src="old-image.jpg" alt="Старое изображение" width="300">
<button id="change-image-button">Изменить изображение</button> */}
const imgchg = document.querySelector("#change-image-button")
  imgchg.addEventListener('click', function(){
    const item = document.querySelector("#image");
    console.dir(item)
    item.src = 'https://s1.1zoom.me/big0/846/Iceland_Mountains_Waterfalls_616668_1280x640.jpg'
  })