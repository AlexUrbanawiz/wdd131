let form = document.getElementById("item-form");
let nameInput = document.getElementById("item-name");
let priceInput = document.getElementById("item-price");
let urlInput = document.getElementById("item-url");
let wishlist = document.getElementById("wishlist");
let emptyMessage = document.getElementById("emptyMessage");

let items = []

const saved = localStorage.getItem("wishlistItems");
if (saved) {
    items = JSON.parse(saved)
}
render()

function saveItems() {
  localStorage.setItem("wishlistItems", JSON.stringify(items));
}


function render() {
    wishlist.innerHTML = "";
    if(items.length == 0)
    {
        emptyMessage.style.display = "block";
        return;
    }
    else
    {
        emptyMessage.style.display = "none";
    }

    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
        <strong>${item.name}</strong>
        <span>$${item.price.toFixed(2)}</span>
        <a href="${item.link}" target="_blank">Buy</a>
        <button data-index="${index}">Delete</button>
        `;
        wishlist.appendChild(li);

    });
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    const price = priceInput.value.trim();
    const link = urlInput.value.trim();

    if(!name || !price || !link)
    {
        alert("Fill in all fields");
        return;
    }

    items.push({
        name,
        price: parseFloat(price),
        link
    });

    saveItems()
    render()
    form.reset();
})

wishlist.addEventListener('click', (event) => {
    if(!event.target.dataset.index) return;

    const index = parseInt(event.target.dataset.index);
    items.splice(index, 1);

    saveItems();
    render();
});

