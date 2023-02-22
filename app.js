const product = [
  {
    verbUrl: "assets/triple.jpg",
    title: "Sports trio",
    subTitle: "triple",
    price: 80,
    category: "women",
    quantity: 7,
  },
  {
    verbUrl: "assets/triple1.jpg",
    title: "Sports trio",
    subTitle: "triple",
    price: 70,
    category: "men",
    quantity: 9,
  },
  {
    verbUrl: "assets/triple2.jpg",
    title: "Sports trio",
    subTitle: "triple",
    price: 99,
    category: "women",
    quantity: 5,
  },
  {
    verbUrl: "assets/triple3.jpg",
    title: "Sports trio",
    subTitle: "triple",
    price: 79,
    category: "kids",
    quantity: 7,
  },
  {
    verbUrl: "assets/hood.jpg",
    title: "Warm hood",
    subTitle: "hood",
    price: 129,
    category: "men",
    quantity: 8,
  },
  {
    verbUrl: "assets/Jacket.jpg",
    title: "Autumn coat",
    subTitle: "Jacket",
    price: 179,
    category: "men",
    quantity: 4,
  },
  {
    verbUrl: "assets/Shorts.jpg",
    title: "Sports shorts",
    subTitle: "shorts",
    price: 79,
    category: "",
    quantity: 17,
  },
  {
    verbUrl: "assets/ball.jpg",
    title: "basketball ball",
    subTitle: "ball",
    price: 59,
    category: "basketball",
    quantity: 7,
  },
];

let productArray = [...product];

let cart = [];

const renderItem = (item) => {
  return `<div class="card">
            <div class="img-cont">
              <img class="hoodUrl" src=${item.verbUrl} alt="myhood" />
            </div>
            <div class="card-info">
              <p class="price">$${item.price}</p>
              <h1 class="title">${item.title}</h1>
              <p class="category">${item.category}</p>
              <p class="subTitle">${item.subTitle}</p>             
              <p class="quantity">quantity:${item.quantity}</p>
              <button class="cart-button">Add to Cart</button>
            </div>
          </div>`;
};

const cardConteiner = document.getElementById("addtocard");

const buttonFilter = document.querySelectorAll(".btn");
let addToCardArray = [...buttonFilter];

const cartLength = document.getElementById("cart-count");

cardConteiner.innerHTML = product.map((verb) => renderItem(verb));

const cardButton = document.querySelectorAll(".cart-button");
const cardButtonArray = [...cardButton];

const someFunction = () => {
  const cardButton = document.querySelectorAll(".cart-button");
  const cardButtonArray = [...cardButton];

  cardButtonArray.forEach((card, idx) => {
    card.addEventListener("click", () => {
      cart.push(cardButtonArray[idx].category);
      cartLength.innerHTML = cart.length;
    });
  });
};

someFunction();
cartLength.innerHTML = cart.length;

buttonFilter.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "all") {
      productArray = [...product];
      cardConteiner.innerHTML = productArray.map((verb) => renderItem(verb));
      someFunction();
      return;
    }

    const filtered = product.filter(
      (verb) => verb.category === (btn.textContent || searchInput.value)
    );

    productArray = [...filtered];

    const filteredArray = filtered.map((item) => renderItem(item));
    cardConteiner.innerHTML = filteredArray;

    someFunction();
  });
});

const searchInput = document.getElementById("filter-input");
const searchButton = document.getElementById("filter-button");
searchButton.addEventListener("click", () => {
  console.log(searchInput.value);
});
