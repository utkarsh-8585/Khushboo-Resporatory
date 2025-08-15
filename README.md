<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KHUSHBU RESTAURANT</title>
  <style>
    /* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Hero Section */
.hero {
    position: relative;
    text-align: center;
    color: white;
}

.hero-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    filter: brightness(70%);
}

.logo {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 80px;
    border-radius: 50%;
    border: 2px solid white;
}

.hero-text {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 48px;
    font-weight: bold;
    color: orange;
    text-shadow: 2px 2px 5px red;
}

.zero-text {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    color: yellow;
}

.one-text {
    position: absolute;
    top: 62%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    color: white;
}

/* Menu Section */
.menu {
    background-color: #ffe0e0;
    padding: 20px;
    text-align: center;
}

.menu h2 {
    color: #e65100;
}

.menu-item {
    margin: 15px 0;
}

.menu-item select {
    padding: 5px;
    font-size: 16px;
    width: 80%;
}

/* Submit Button */
.submit {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: orange;
    color: white;
    font-size: 18px;
    border: none;
    cursor: pointer;
}

.submit:hover {
    background-color: red;
}

/* Order Summary */
#order-summary {
    background: #fff3cd;
    padding: 15px;
    margin: 20px auto;
    max-width: 500px;
    border: 2px solid #ffcc00;
    border-radius: 10px;
    text-align: left;
    opacity: 1;
    transition: opacity 0.5s ease;
}

#order-summary h2 {
    color: #b36b00;
}

#order-summary ul {
    list-style-type: none;
    padding: 0;
}

#order-summary li {
    margin: 5px 0;
    font-size: 16px;
}
  </style>
</head>
<body>

    <!-- Header with Logo -->
    <header class="hero">
        <img src="logo.png" alt="Khushbu Restaurant Logo" class="logo">
        <img src="pexels-chanwalrus-958545.jpg" alt="Restaurant Background" class="hero-image">
        <h1 class="hero-text">KHUSHBU RESTAURANT</h1>
        <h2 class="zero-text">“Where Every Bite Tells a Story.”</h2>
        <h3 class="one-text">Location: Karad-415110, Satara</h3>
    </header>

    <!-- Menu Section -->
    <section class="menu">
        <h2><u>WELCOME TO THE RESTAURANT</u></h2>

        <div class="menu-item">
            <h3>Starter Menu:</h3>
            <select id="starter">
                <option>Mounchow Soup</option>
                <option>Chicken 65</option>
                <option>Masala Papad</option>
                <option>Paneer Chilli</option>
                <option>Chicken Tandoori</option>
            </select>
        </div>

        <div class="menu-item">
            <h3>Main Course:</h3>
            <select id="main-course">
                <option>Dal Tadka</option>
                <option>Paneer Lababdar</option>
                <option>Baby Corn Mushroom Kadhai</option>
                <option>Chicken Handi</option>
            </select>
        </div>

        <div class="menu-item">
            <h3>Dessert:</h3>
            <select id="dessert">
                <option>Ras Malai</option>
                <option>Jalebi</option>
                <option>Rasgulla</option>
                <option>Gulab Jamun</option>
                <option>Pastry</option>
            </select>
        </div>

        <div class="menu-item">
            <h3>Bread's:</h3>
            <select id="bread">
                <option>Butter Kulcha</option>
                <option>Roti</option>
                <option>Chapati</option>
                <option>Naan</option>
            </select>
        </div>

        <div class="menu-item">
            <h3>Drink:</h3>
            <select id="drink">
                <option>Beer</option>
                <option>Vodka</option>
                <option>Prathamesh</option>
                <option>Water</option>
            </select>
        </div>

        <input class="submit" type="button" value="Submit Order" onclick="placeOrder()">
    </section>

    <!-- Order Summary Section -->
    <section id="order-summary" style="display:none;">
        <h2>Your Order Summary</h2>
        <ul id="order-list"></ul>
    </section>

    <script>
    function placeOrder() {
    // Get selected items
    const starter = document.getElementById("starter").value;
    const mainCourse = document.getElementById("main-course").value;
    const dessert = document.getElementById("dessert").value;
    const bread = document.getElementById("bread").value;
    const drink = document.getElementById("drink").value;

    // Create order list
    const orderList = document.getElementById("order-list");
    orderList.innerHTML = `
        <li>Starter: ${starter}</li>
        <li>Main Course: ${mainCourse}</li>
        <li>Dessert: ${dessert}</li>
        <li>Bread: ${bread}</li>
        <li>Drink: ${drink}</li>
    `;

    // Show summary
    const summarySection = document.getElementById("order-summary");
    summarySection.style.display = "block";
    summarySection.style.opacity = "1";

    // After 5 seconds, fade out and show Thank You message
    setTimeout(() => {
        summarySection.style.opacity = "0";
        setTimeout(() => {
            summarySection.style.display = "none";
            alert("✅ Thank you for ordering at KHUSHBU RESTAURANT!");
        }, 500);
    }, 5000);
}

    </script>
</body>
</html>
