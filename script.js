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
