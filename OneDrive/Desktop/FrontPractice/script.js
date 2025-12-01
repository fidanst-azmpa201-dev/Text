// const questions = [
//     { q: "1. JavaScript nə üçündür?", a: ["Vebdə funksionallıq", "Foto redaktə", "Excel cədvəlləri"], correct: 0 },
//     { q: "2. Array nədir?", a: ["String", "Obyekt", "Massiv"], correct: 2 },
//     { q: "3. console.log nə edir?", a: ["Ekrana yazır", "İnterneti açır", "Səsi artırır"], correct: 0 },
//     { q: "4. Push nə edir?", a: ["Başdan silir", "Sona əlavə edir", "Ortadan silir"], correct: 1 },
//     { q: "5. === nədir?", a: ["Tip+dəyişən müqayisəsi", "Cəmləyir", "Müqayisə etmir"], correct: 0 },
// ];

// const questionEl = document.querySelector('#question');
// const answersEl = document.querySelector('#answers');
// const nextBtn = document.querySelector('#nextBtn');
// const scoreEl = document.querySelector('#score');

// let current = 0;
// let score = 0;

// loadQuestion();

// function loadQuestion() {
//     let q = questions[current];
//     questionEl.textContent = q.q;

//     answersEl.innerHTML = "";
//     q.a.forEach((opt, index) => {
//         let btn = document.createElement('button');
//         btn.textContent = opt;
//         btn.onclick = () => check(index);
//         answersEl.appendChild(btn);
//     });
// }

// function check(index) {
//     if (index === questions[current].correct) {
//         score++;
//     }
//     nextBtn.disabled = false;
// }

// nextBtn.onclick = function () {
//     current++;
//     nextBtn.disabled = true;

//     if (current < questions.length) {
//         loadQuestion();
//     } else {
//         finish();
//     }
// };

// function finish() {
//     questionEl.textContent = "Bitdi!";
//     answersEl.innerHTML = "";
//     nextBtn.style.display = "none";
//     scoreEl.textContent = `Nəticə: ${score} / ${questions.length}`;
// }




// let colors = ["red", "green", "blue"];


// colors.forEach(color => {
 
//     let p = document.createElement('p');

   
//     p.textContent = color;

   
//     document.body.appendChild(p);
// });

// HTML-də: <div id="list"></div>

// Array: let fruits = ["apple", "banana", "cherry"];

// Hər meyvə üçün <li> elementi yarat, li.textContent-ə meyvəni yaz və #list div-inə əlavə et

// const fruitsEI =document.querySelector('#list');
// let fruits =["apple","banana","cherry"];

// fruits.forEach(fruit=> {
//     let li=document.createElement('li');
//     li.textContent =fruit;
//    fruitsEI.appendChild(li);
// });


// Task 3 — ForEach + Button

// Array: let animals = ["cat", "dog", "rabbit"];

// Hər heyvan üçün düymə yarat, btn.textContent = heyvan, sonra onları <div id="animals"></div>-ə əlavə et.

// Klikləyəndə konsola heyvanın adını yazdır


// ===================================================================================



// const animalsEI = document.querySelector('#animals');
// let animals = ["cat", "dog", "rabbit"];

// animals.forEach(animal => {
//     let btn = document.createElement('button');
//     btn.textContent = animal;

//     // default CSS class əlavə edirik
//     btn.classList.add('btn'); 

//     // Klik funksiyası
//     btn.addEventListener('click', () => {
//         console.log("Sən kliklədin:", animal);
//         // CSS class ilə rəng dəyişir
//         btn.classList.toggle('clicked'); 
//     });

//     animalsEI.appendChild(btn); 
// });









// Task 4 — Dinamik Event Listener

// Array: let numbers = [1,2,3,4,5];

// Hər ədəd üçün <button> yarat, düymənin mətninə ədədi yaz.

// Klikləyəndə düymə əvvəlki klik sayını göstərsin (hər düymənin öz klik sayını saxlamalıyıq)


// ===================================================================================

// Task 5 — DOM + forEach + Condition

// HTML: <div id="tasks"></div>

// Array:

// let tasks = [
//   {title: "Wash dishes", done: false},
//   {title: "Clean room", done: true},
//   {title: "Do homework", done: false}
// ];


// Hər tapşırıq üçün <p> yarat:

// textContent → tapşırığın adı

// Əgər done: true isə <p>-ə yaşıl rəng ver, əks halda qırmızı.

// Sonra hamısını #tasks div-inə əlavə et.
