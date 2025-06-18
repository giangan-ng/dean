document.addEventListener("DOMContentLoaded", function () {
    let productMenu = document.getElementById("showProducts");
    let productSection = document.getElementById("productList");

    productMenu.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn chặn mở trang mới

        // Kích hoạt hiệu ứng xuất hiện sản phẩm
        productSection.style.display = "block";
        setTimeout(() => {
            productSection.style.opacity = "1";
            productSection.style.transform = "translateY(0)";
        }, 50);
    });
});