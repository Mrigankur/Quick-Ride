<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport"
content="width=device-width, initial-scale=1.0">

<title>QuickRide Premium</title>

<style>

/* ================= BODY ================= */

body{
  margin:0;
  font-family:Arial;
  background:#0f172a;
  color:white;
}

/* ================= HEADER ================= */

.header{
  background:#111827;
  padding:20px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap;
}

.logo{
  font-size:28px;
  font-weight:bold;
}

.sub{
  font-size:12px;
  color:#9ca3af;
  margin-top:5px;
}

.userBox{
  display:flex;
  align-items:center;
  gap:10px;
}

.userBox img{
  width:40px;
  height:40px;
  border-radius:50%;
}

/* ================= SEARCH ================= */

.searchArea{
  padding:20px;
  display:flex;
  gap:10px;
  flex-wrap:wrap;
}

.searchArea input,
.searchArea select{

  padding:12px;
  border:none;
  border-radius:10px;
  background:#1f2937;
  color:white;

}

.searchArea input{
  flex:1;
}

/* ================= GRID ================= */

.container{
  display:grid;
  grid-template-columns:
  repeat(auto-fit,minmax(220px,1fr));

  gap:20px;
  padding:20px;
}

/* ================= CARD ================= */

.card{

  background:
  linear-gradient(
  145deg,
  #1f2937,
  #111827);

  border-radius:20px;
  overflow:hidden;

  border:1px solid
  rgba(255,255,255,0.08);

  transition:0.3s;

  box-shadow:
  0 5px 15px rgba(0,0,0,0.3);

}

.card:hover{

  transform:
  translateY(-8px)
  scale(1.03);

  box-shadow:
  0 15px 30px
  rgba(16,163,127,0.3);

}

.card img{
  width:100%;
  height:160px;
  object-fit:cover;
}

.cardContent{
  padding:15px;
}

.price{
  color:#10a37f;
  margin-top:5px;
}

.rating{
  color:gold;
  margin-top:5px;
}

/* ================= BUTTON ================= */

button{
  width:100%;
  padding:12px;
  margin-top:10px;
  border:none;
  border-radius:10px;
  cursor:pointer;
  font-size:15px;
}

.reserveBtn{
  background:#10a37f;
  color:white;
}

/* ================= OVERLAY ================= */

.overlay{

  position:fixed;
  top:0;
  left:0;

  width:100%;
  height:100%;

  background:rgba(0,0,0,0.7);

  display:none;

  justify-content:center;
  align-items:center;

  z-index:999;

}

/* ================= POPUP ================= */

.popup{

  width:340px;

  background:#1f2937;

  padding:25px;

  border-radius:20px;

  text-align:center;

  animation:popup 0.4s ease;

  box-shadow:
  0 20px 40px
  rgba(0,0,0,0.5);

}

@keyframes popup{

  from{
    transform:scale(0.7);
    opacity:0;
  }

  to{
    transform:scale(1);
    opacity:1;
  }

}

.popup img{
  width:100%;
  height:180px;
  object-fit:cover;
  border-radius:15px;
}

.loginBtn{
  background:white;
  color:black;
}

.skipBtn{
  background:#374151;
  color:white;
}

.closeBtn{
  background:red;
  color:white;
}

/* ================= HISTORY ================= */

.history{
  padding:20px;
}

.historyBox{

  background:#1f2937;

  padding:15px;

  border-radius:15px;

}

.booking{
  padding:10px;
  border-bottom:1px solid #374151;
}

</style>

</head>

<body>

<!-- HEADER -->

<div class="header">

  <div>

    <div class="logo">
      🚗 QuickRide
    </div>

    <div class="sub">
      Premium Car Rental Experience
    </div>

  </div>

  <div class="userBox">

    <img
    id="userPhoto"
    src="https://cdn-icons-png.flaticon.com/512/149/149071.png">

    <span id="userStatus">
      Guest User
    </span>

  </div>

</div>

<!-- SEARCH -->

<div class="searchArea">

  <input
  type="text"
  id="searchInput"
  placeholder="Search car...">

  <select id="filterSelect">

    <option value="all">
      All
    </option>

    <option value="Toyota">
      Toyota
    </option>

    <option value="BMW">
      BMW
    </option>

    <option value="Audi">
      Audi
    </option>

    <option value="Mercedes">
      Mercedes
    </option>

  </select>

</div>

<!-- CARS -->

<div
class="container"
id="carContainer">

</div>

<!-- HISTORY -->

<div class="history">

  <h2>
    📜 Booking History
  </h2>

  <div
  class="historyBox"
  id="historyBox">

    No booking yet 🚘

  </div>

</div>

<!-- LOGIN OVERLAY -->

<div
class="overlay"
id="loginOverlay">

  <div class="popup">

    <h2>
      Login Required
    </h2>

    <p>
      Login to reserve your ride
    </p>

    <button
    class="loginBtn"
    onclick="realLogin()">

      Continue with Google

    </button>

    <button
    class="skipBtn"
    onclick="skipLogin()">

      Skip

    </button>

  </div>

</div>

<!-- DETAIL OVERLAY -->

<div
class="overlay"
id="detailOverlay">

  <div
  class="popup"
  id="detailPopup">

  </div>

</div>

<!-- FIREBASE -->

<script type="module">

import {
initializeApp
}
from
"https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {

getAuth,
GoogleAuthProvider,
signInWithPopup

}
from
"https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

/* FIREBASE CONFIG */

const firebaseConfig = {

  apiKey:
  "AIzaSyBySOEfSbkpl4csyqckfX-kLeIoD-85VYs",

  authDomain:
  "my-friend-hub.firebaseapp.com",

  databaseURL:
  "https://my-friend-hub-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId:
  "my-friend-hub",

  storageBucket:
  "my-friend-hub.firebasestorage.app",

  messagingSenderId:
  "1084141933087",

  appId:
  "1:1084141933087:web:1ae757acdd37a9c8427b2a",

  measurementId:
  "G-6E10B7M7WZ"

};

/* INITIALIZE */

const app =
initializeApp(firebaseConfig);

const auth =
getAuth(app);

/* ================= CARS ================= */

const carNames = [

  "Toyota",
  "BMW",
  "Mercedes",
  "Audi",
  "Honda",
  "Hyundai",
  "Tata",
  "Kia"

];

const images = [

"https://cdn.pixabay.com/photo/2016/11/29/03/53/automobile-1868726_1280.jpg",

"https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg",

"https://cdn.pixabay.com/photo/2017/03/27/14/56/car-2179220_1280.jpg",

"https://cdn.pixabay.com/photo/2016/12/27/21/03/lamborghini-1930434_1280.jpg"

];

const container =
document.getElementById("carContainer");

/* GENERATE CARS */

for(let i=1;i<=80;i++){

  let name =
  carNames[i % carNames.length];

  let img =
  images[i % images.length];

  let price =
  (i % 10) + 5;

  container.innerHTML += `

    <div class="card">

      <img
      src="${img}"
      loading="lazy">

      <div class="cardContent">

        <h3>
          ${name} ${i}
        </h3>

        <div class="price">
          ₹${price}/km
        </div>

        <div class="rating">
          ⭐ 4.${i%9}
        </div>

        <button
        class="reserveBtn"
        onclick="showDetail(
        '${name}',
        '${img}',
        ${price},
        ${i}
        )">

          View Details

        </button>

      </div>

    </div>

  `;

}

/* ================= LOGIN ================= */

window.onload = ()=>{

  setTimeout(()=>{

    document
    .getElementById("loginOverlay")
    .style.display="flex";

  },1500);

};

window.realLogin =
async function(){

  const provider =
  new GoogleAuthProvider();

  try{

    const result =
    await signInWithPopup(
    auth,
    provider
    );

    localStorage.setItem(
    "user",
    result.user.uid
    );

    document
    .getElementById("userStatus")
    .innerText =
    result.user.displayName;

    document
    .getElementById("userPhoto")
    .src =
    result.user.photoURL;

    document
    .getElementById("loginOverlay")
    .style.display="none";

    alert(
    "Welcome " +
    result.user.displayName
    );

  }

  catch(error){

    alert(error.message);

  }

};

/* SKIP */

window.skipLogin =
function(){

  document
  .getElementById("loginOverlay")
  .style.display="none";

};

/* ================= DETAIL ================= */

window.showDetail =
function(name,img,price,id){

  document
  .getElementById("detailPopup")
  .innerHTML = `

    <h2>
      ${name} ${id}
    </h2>

    <img src="${img}">

    <p>
      Premium ride available now
    </p>

    <p>
      Price:
      ₹${price}/km
    </p>

    <p>
      Fuel:
      Petrol
    </p>

    <p>
      Seats:
      4
    </p>

    <button
    class="reserveBtn"
    onclick="reserveCar(
    '${name} ${id}'
    )">

      Reserve Now

    </button>

    <button
    class="closeBtn"
    onclick="closePopup()">

      Close

    </button>

  `;

  document
  .getElementById("detailOverlay")
  .style.display="flex";

};

/* CLOSE */

window.closePopup =
function(){

  document
  .getElementById("detailOverlay")
  .style.display="none";

};

/* ================= RESERVE ================= */

window.reserveCar =
function(car){

  if(
  !localStorage
  .getItem("user")
  ){

    alert(
    "⚠️ Login first"
    );

    document
    .getElementById("loginOverlay")
    .style.display="flex";

    return;

  }

  alert(
  "🚗 Reserved: " + car
  );

  document
  .getElementById("historyBox")
  .innerHTML += `

    <div class="booking">

      ✅ ${car}
      booked successfully

    </div>

  `;

  closePopup();

};

/* ================= SEARCH ================= */

document
.getElementById("searchInput")
.addEventListener(
"keyup",

function(){

  let value =
  this.value.toLowerCase();

  let cards =
  document.querySelectorAll(".card");

  cards.forEach(card=>{

    let text =
    card.innerText.toLowerCase();

    card.style.display =
    text.includes(value)
    ? "block"
    : "none";

  });

});

/* ================= FILTER ================= */

document
.getElementById("filterSelect")
.addEventListener(
"change",

function(){

  let value =
  this.value;

  let cards =
  document.querySelectorAll(".card");

  cards.forEach(card=>{

    if(
    value==="all"
    ){

      card.style.display=
      "block";

    }

    else if(
    card.innerText
    .includes(value)
    ){

      card.style.display=
      "block";

    }

    else{

      card.style.display=
      "none";

    }

  });

});

</script>

</body>
</html>