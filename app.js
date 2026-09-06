import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";
import { getDatabase, ref, set, push, onValue, query, orderByChild, equalTo } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-database.js";

// Firebase Configuration (তোর প্রজেক্টের ডিটেইলস)
const firebaseConfig = {
  apiKey: "AIzaSyBySOEfSbkpl4csyqckfX-kLeIoD-85VYs",
  authDomain: "my-friend-hub.firebaseapp.com",
  databaseURL: "https://my-friend-hub-default-rtdb.asia-southeast1.firebasestorage.app",
  projectId: "my-friend-hub",
  storageBucket: "my-friend-hub.firebasestorage.app",
  messagingSenderId: "1084141933087",
  appId: "1:1084141933087:web:1ae757acdd37a9c8427b2a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

let currentUser = null;
let selectedCar = null;

// DOM Elements
const loginScreen = document.getElementById("loginScreen");
const mainApp = document.getElementById("mainApp");

// Login/Logout Events
document.getElementById("googleLoginBtn").addEventListener("click", () => {
  signInWithPopup(auth, new GoogleAuthProvider()).catch(err => alert("Login Error: " + err.message));
});

document.getElementById("logoutBtn").addEventListener("click", () => signOut(auth));

// Auth State Check
onAuthStateChanged(auth, async (user) => {
  if (user) {
    currentUser = user;
    loginScreen.style.display = "none";
    mainApp.style.display = "block";
    
    // Set Profile Data
    const photoUrl = user.photoURL || "https://via.placeholder.com/90";
    document.getElementById("headerUserImg").src = photoUrl;
    document.getElementById("accountUserImg").src = photoUrl;
    document.getElementById("accountUserName").textContent = user.displayName;
    document.getElementById("accountUserEmail").textContent = user.email;

    // Save user info to Database
    await set(ref(db, 'users/' + user.uid), { name: user.displayName, email: user.email });

    // Fetch Data
    loadAvailableCars();
    loadUserBookings();
  } else {
    currentUser = null;
    loginScreen.style.display = "flex";
    mainApp.style.display = "none";
  }
});

// Load Cars from Firebase
function loadAvailableCars() {
  onValue(ref(db, 'cars'), (snap) => {
    const grid = document.getElementById("carsGrid");
    grid.innerHTML = "";
    const cars = snap.val() || {};

    let hasCars = false;
    for (const [key, car] of Object.entries(cars)) {
      if (parseInt(car.quantity) > 0) {
        hasCars = true;
        grid.innerHTML += `
          <div class="car-card">
            <img src="${car.image || 'https://via.placeholder.com/300x180'}" class="car-img" alt="Car Image">
            <div class="car-details">
              <div class="car-title">${car.name}</div>
              <div class="car-price">₹${car.price} <span>/ day</span></div>
              <div class="car-features">
                <span>💺 ${car.seats} Seats</span>
                <span>❄️ ${car.ac}</span>
                <span>⛽ ${car.fuel}</span>
              </div>
              <button class="book-btn" onclick="openBookingModal('${key}', '${car.name}')">Book Now</button>
            </div>
          </div>
        `;
      }
    }
    if(!hasCars) {
      grid.innerHTML = "<p style='color:#878787;'>No cars available right now.</p>";
    }
  });
}

// Load User's Own Bookings
function loadUserBookings() {
  const userBookingsQuery = query(ref(db, 'bookings'), orderByChild('userId'), equalTo(currentUser.uid));
  
  onValue(userBookingsQuery, (snap) => {
    const list = document.getElementById("bookingsList");
    list.innerHTML = "";
    const bookings = snap.val() || {};
    
    // Sort by newest first
    const sortedBookings = Object.entries(bookings).sort((a,b) => b[1].timestamp - a[1].timestamp);
    
    if(sortedBookings.length === 0){
      list.innerHTML = "<p style='text-align:center; color:#878787; padding: 20px 0;'>You haven't made any bookings yet.</p>";
      return;
    }

    sortedBookings.forEach(([key, b]) => {
      list.innerHTML += `
        <div class="order-card">
          <div class="order-header">
            <span class="order-title">${b.carName}</span>
            <span class="order-status status-${b.status}">${b.status}</span>
          </div>
          <div class="order-details">
            <p>📍 From: <strong>${b.pickupLocation}</strong></p>
            <p>🏁 To: <strong>${b.dropLocation}</strong></p>
            <p style="margin-top:10px; font-size:12px;">📅 Ordered on: ${new Date(b.timestamp).toLocaleString()}</p>
          </div>
        </div>
      `;
    });
  });
}

// Modal Functions (Global variables for HTML to access)
window.openBookingModal = (id, name) => {
  selectedCar = { id, name };
  document.getElementById("modalCarName").textContent = name;
  document.getElementById("bookingModal").style.display = "flex";
};

document.getElementById("cancelBookingBtn").addEventListener("click", () => {
  document.getElementById("bookingModal").style.display = "none";
});

document.getElementById("confirmBookingBtn").addEventListener("click", async () => {
  const phone = document.getElementById("userPhone").value.trim();
  const pickup = document.getElementById("pickupLoc").value.trim();
  const drop = document.getElementById("dropLoc").value.trim();

  if(!phone || pickup.length < 3 || drop.length < 3) {
    return alert("Please fill all details correctly!");
  }

  const bookingData = {
    userId: currentUser.uid,
    userName: currentUser.displayName,
    userPhone: phone,
    carId: selectedCar.id,
    carName: selectedCar.name,
    pickupLocation: pickup,
    dropLocation: drop,
    paymentMethod: "Cash on Delivery",
    status: "pending",
    timestamp: Date.now()
  };

  try {
    await push(ref(db, 'bookings'), bookingData);
    alert("✅ Booking Success! You can view it in the Bookings tab.");
    
    // Close Modal and Clear inputs
    document.getElementById("bookingModal").style.display = "none";
    document.getElementById("userPhone").value = "";
    document.getElementById("pickupLoc").value = "";
    document.getElementById("dropLoc").value = "";
    
    // Auto switch to Bookings tab
    document.querySelectorAll('.nav-item')[1].click();
  } catch(err) {
    alert("Error placing booking: " + err.message);
  }
});