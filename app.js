// [product] მასივი შეიცავს ობიექტებს, რომლებიც გამოჩნდება გვერდზე. თითოეულ ობიექტს აქვს ისეთი თვისებები, როგორიცაა სურათი, სათაური, ქვესათაური, ფასი, კატეგორია და რაოდენობა.

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

//FilteredProducts მასივი გამოიყენება იმ პროდუქტების შესანახად, რომლებიც გაფილტრული იქნება input_ში შეყვანილი ტექსტის მიხედვით.
//cart მასივი გამოიყენება მომხმარებლის მიერ კალათაში დამატებული ნივთების თვალყურის დევნებისთვის.
//თავდაპირველად ის ცარიელია.

let filteredProducts = [];
const cart = [];

//ფუნქცია renderItem იღებს არგუმენტად ელემენტის ობიექტს და აბრუნებს HTML კოდის სტრიქონს პროდუქტის ბარათისთვის. HTML კოდი მოიცავს სურათს, პროდუქტის სათაურს, ფასს, კატეგორიას, ქვესათაურს, რაოდენობას და ღილაკს "კალათაში დამატება".

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

//cardConteiner ცვლადი დაყენებულია DOM ელემენტზე "addtocard"-ის ID-ით. "cardConteiner" ელემენტის innerHTML დაყენებულია პროდუქტის მასივზე გადატანის შედეგზე და მასივის თითოეულ ელემენტზე renderItem ფუნქციის გამოყენების შედეგზე. ეს გამოიმუშავებს პროდუქტის ბარათების სერიას და ჩასვამს მათ "cardConteiner" ელემენტში.

const cardConteiner = document.getElementById("addtocard");

cardConteiner.innerHTML = product.map((verb) => renderItem(verb));

//button წამოვიღე.

const buttonFilter = document.querySelectorAll(".btn");
const cardButton = document.querySelectorAll(".cart-button");

const cartLength = document.getElementById("cart-count");

let addToCardArray = [...buttonFilter];
const cardButtonArray = [...cardButton];

cardButtonArray.forEach((cardConteiner, idx) => {
  cardConteiner.addEventListener("click", () => {
    cart.push(product[idx].category);
    cartLength.innerHTML = cart.length;

    document.cardConteiner.innerHTML = product.filter(
      (verb) => verb.category === textContent
    );

    card.innerHTML = filtered.map((item) => someSecond(item));
  });
});

addToCardArray.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.textContent);
    if (btn.textContent === "all") {
      cardConteiner.innerHTML = product.map((item) => renderItem(item));
      return;
    }

    const filtered = product.filter(
      (verb) => verb.category === btn.textContent
    );

    cardConteiner.innerHTML = filtered.map((item) => renderItem(item));
  });
});

const searchInput = document.getElementById("filter-input");
const searchButton = document.getElementById("filter-button");
searchButton.addEventListener("click", () => {
  console.log(searchInput.value);
});
