function increaseQuantity(button) {
    const quantitySpan = button.previousElementSibling;
    let quantity = parseInt(quantitySpan.textContent);
    quantity++;
    quantitySpan.textContent = quantity;
}

function decreaseQuantity(button) {
    const quantitySpan = button.nextElementSibling;
    let quantity = parseInt(quantitySpan.textContent);
    if (quantity > 0) {
        quantity--;
        quantitySpan.textContent = quantity;
    }
}

function viewCart() {
    let cart = "";
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach[_{{{CITATION{{{_1{](https://github.com/teemax1/libdata/tree/e155f5a0c22c24ace34d6c627881b7bf30432acc/student-list.php)
