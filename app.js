const product = [
  {
    shoeUrl: "assets/triple.jpg",
    title: "Sports trio",
    subTitle: "triple",
    price: 80,
    category: "women",
    quantity: 7,
  },
  {
    shoeUrl: "assets/triple1.jpg",
    title: "Sports trio",
    subTitle: "triple",
    price: 70,
    category: "men",
    quantity: 9,
  },
  {
    shoeUrl: "assets/triple2.jpg",
    title: "Sports trio",
    subTitle: "triple",
    price: 99,
    category: "men",
    quantity: 5,
  },
  {
    shoeUrl: "assets/triple3.jpg",
    title: "Sports trio",
    subTitle: "triple",
    price: 79,
    category: "men",
    quantity: 7,
  },
  {
    shoeUrl: "assets/hood.jpg",
    title: "Warm hood",
    subTitle: "hood",
    price: 129,
    category: "men",
    quantity: 8,
  },
  {
    shoeUrl: "assets/Jacket.jpg",
    title: "Autumn coat",
    subTitle: "Jacket",
    price: 179,
    category: "men",
    quantity: 4,
  },
  {
    shoeUrl: "assets/Shorts.jpg",
    title: "Sports shorts",
    subTitle: "shorts",
    price: 79,
    category: "men",
    quantity: 17,
  },
  {
    shoeUrl: "assets/ball.jpg",
    title: "basketball ball",
    subTitle: "ball",
    price: 59,
    category: "basketball",
    quantity: 7,
  },
];

const renderItem = (item) => {
  return `<div class="card">
            <div class="img-cont">
              <img class="hoodUrl" src=${item.shoeUrl} alt="myhood" />
            </div>
            <div class="card-info">
              <p class="price">$${item.price}</p>
              <h1 class="title">${item.title}</h1>
              <p class="category">${item.category}</p>
              <p class="subTitle">${item.subTitle}</p>             
              <p class="quantity">quantity:${item.quantity}</p>
              <p><button>Add to Cart</button></p>
            </div>
          </div>`;
};

const cardConteiner = document.getElementById("addtocard");

cardConteiner.innerHTML = product.map((shoe) => renderItem(shoe));

/*const link = document.querySelectorAll(".link");

const links = [...links];

links.forEach((link) => {
  link.addEventListener("click", () => {
    console.log(link.textContent);
    if (link.textContent === "all") {
      card.innerHTML = someCvladi.map((item) => someSecond(item));
      return;
    }

    let filtered = someCvladi.filter(
      (some) => some.category === link.textContent
    );

    card.innerHTML = filtered.map((item) => someSecond(item));
  });
});*/

const btn = document.querySelectorAll(".btn");

const btns = [...btn];

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.textContent);
    if (btn.textContent === "all") {
      cardContainer.innerHTML = product.map((item) => renderItem(item));
      return;
    }

    let filtered = product.filter((shoe) => shoe.category === btn.textContent);

    cardContainer.innerHTML = filtered.map((item) => renderItem(item));
  });
});
