document.addEventListener("DOMContentLoaded", () => {
    // Slideshow Form Submission
    const slideshowForm = document.getElementById("slideshow-form");
    const slideshowList = document.getElementById("slideshow-list");

    if (slideshowForm) {
        slideshowForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const title = document.getElementById("slideshow-title").value;
            const image = document.getElementById("slideshow-image").value;
            addSlideshow(title, image);
        });
    }

    function addSlideshow(title, image) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${title}</strong><br><img src="${image}" alt="${title}" width="100"><br>
                        <button onclick="editItem(this)">Sửa</button>
                        <button onclick="deleteItem(this)">Xoá</button>`;
        slideshowList.appendChild(li);
    }

    // Category Form Submission
    const categoryForm = document.getElementById("category-form");
    const categoryList = document.getElementById("category-list");

    if (categoryForm) {
        categoryForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("category-name").value;
            const desc = document.getElementById("category-desc").value;
            addCategory(name, desc);
        });
    }

    function addCategory(name, desc) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${name}</strong>: ${desc}<br>
                        <button onclick="editItem(this)">Sửa</button>
                        <button onclick="deleteItem(this)">Xoá</button>`;
        categoryList.appendChild(li);
    }

    // Product Form Submission
    const productForm = document.getElementById("product-form");
    const productList = document.getElementById("product-list");

    if (productForm) {
        productForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("product-name").value;
            const price = document.getElementById("product-price").value;
            const image = document.getElementById("product-image").value;
            addProduct(name, price, image);
        });
    }

    function addProduct(name, price, image) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${name}</strong> - ${price}<br><img src="${image}" alt="${name}" width="100"><br>
                        <button onclick="editItem(this)">Sửa</button>
                        <button onclick="deleteItem(this)">Xoá</button>`;
        productList.appendChild(li);
    }

    // Edit and Delete Item Functions
    window.editItem = function (button) {
        // Edit function logic
    };

    window.deleteItem = function (button) {
        button.parentElement.remove();
    };
});
