const items = [
  {
    id: "#0421",
    title: "STICKER CLUSTER",
    image: "assets/01.JPG",
    price: 18,
    location: "New York City",
    type: "Sticker / Pole",
    date: "2026.10.06",
    context: "Layered",
    views: 184
  },
  {
    id: "#0422",
    title: "CROSSING NOTICE",
    image: "assets/02.JPG",
    price: 12.5,
    location: "New York City",
    type: "Street Sign / Sticker",
    date: "2026.10.06",
    context: "Partial",
    views: 221
  },
  {
    id: "#0423",
    title: "NAKED COMEDY",
    image: "assets/03.JPG",
    price: 24,
    location: "New York City",
    type: "Poster / Pole",
    date: "2026.10.06",
    context: "Layered",
    views: 305
  },
  {
    id: "#0424",
    title: "DUCT TRACE",
    image: "assets/04.JPG",
    price: 14,
    location: "New York City",
    type: "Sticker / Surface",
    date: "2026.10.06",
    context: "Partial",
    views: 168
  },
  {
    id: "#0425",
    title: "HOPE SOCCER",
    image: "assets/05.JPG",
    price: 16,
    location: "New York City",
    type: "Poster / Pole",
    date: "2026.10.06",
    context: "Layered",
    views: 194
  },
  {
    id: "#0426",
    title: "HOUSE CLEANING",
    image: "assets/06.JPG",
    price: 11.5,
    location: "New York City",
    type: "Flyer / Pole",
    date: "2026.10.06",
    context: "Direct",
    views: 143
  },
  {
    id: "#0427",
    title: "DUMBPHONE",
    image: "assets/07.JPG",
    price: 19,
    location: "New York City",
    type: "Poster / Street",
    date: "2026.10.06",
    context: "Direct",
    views: 267
  },
  {
    id: "#0428",
    title: "CREEPS",
    image: "assets/08.JPG",
    price: 9,
    location: "New York City",
    type: "Sticker / Pole",
    date: "2026.10.06",
    context: "Fragment",
    views: 115
  },
  {
    id: "#0429",
    title: "START CROSSING",
    image: "assets/09.JPG",
    price: 20,
    location: "New York City",
    type: "Signal / Sticker",
    date: "2026.10.06",
    context: "Overwritten",
    views: 276
  },
  {
    id: "#0430",
    title: "HODE ROC",
    image: "assets/10.JPG",
    price: 13,
    location: "New York City",
    type: "Sticker / Utility Box",
    date: "2026.10.06",
    context: "Direct",
    views: 134
  },
  {
    id: "#0431",
    title: "COMFORT ZONE",
    image: "assets/11.JPG",
    price: 17.5,
    location: "New York City",
    type: "Sticker / Pole",
    date: "2026.10.06",
    context: "Isolated",
    views: 211
  },
  {
    id: "#0432",
    title: "TORN LAYER",
    image: "assets/12.JPG",
    price: 26,
    location: "New York City",
    type: "Poster / Pole",
    date: "2026.10.06",
    context: "Destroyed",
    views: 332
  }
];


function money(value) {
  return `$${value.toFixed(2)}`;
}


/* =====================================================
   ELEMENTS
===================================================== */

const brandPage =
  document.querySelector("#brandPage");

const marketPage =
  document.querySelector("#marketPage");

const productPage =
  document.querySelector("#productPage");


const viewMarketButton =
  document.querySelector("#viewMarketButton");

const backToBrand =
  document.querySelector("#backToBrand");

const backToMarket =
  document.querySelector("#backToMarket");


const stage =
  document.querySelector("#stage");

const ring =
  document.querySelector("#ring");


const focusId =
  document.querySelector("#focusId");

const focusTitle =
  document.querySelector("#focusTitle");

const focusPrice =
  document.querySelector("#focusPrice");

const focusCount =
  document.querySelector("#focusCount");

const inspectButton =
  document.querySelector("#inspectButton");


const productImage =
  document.querySelector("#productImage");

const productId =
  document.querySelector("#productId");

const productTitle =
  document.querySelector("#productTitle");

const productPrice =
  document.querySelector("#productPrice");

const productLocation =
  document.querySelector("#productLocation");

const productType =
  document.querySelector("#productType");

const productDate =
  document.querySelector("#productDate");

const productContext =
  document.querySelector("#productContext");

const productViews =
  document.querySelector("#productViews");

const productStatus =
  document.querySelector("#productStatus");

const watchButton =
  document.querySelector("#watchButton");

const addToCartButton =
  document.querySelector("#addToCartButton");

const productMessage =
  document.querySelector("#productMessage");


const cartButton =
  document.querySelector("#cartButton");

const productCartButton =
  document.querySelector("#productCartButton");

const cartCount =
  document.querySelector("#cartCount");

const productCartCount =
  document.querySelector("#productCartCount");

const cartBackdrop =
  document.querySelector("#cartBackdrop");

const cartDrawer =
  document.querySelector("#cartDrawer");

const cartClose =
  document.querySelector("#cartClose");

const cartItems =
  document.querySelector("#cartItems");

const cartEmpty =
  document.querySelector("#cartEmpty");

const cartSubtotal =
  document.querySelector("#cartSubtotal");

const checkoutButton =
  document.querySelector("#checkoutButton");


const checkoutPage =
  document.querySelector("#checkoutPage");

const checkoutBack =
  document.querySelector("#checkoutBack");

const checkoutQuantity =
  document.querySelector("#checkoutQuantity");

const checkoutTotal =
  document.querySelector("#checkoutTotal");

const completePurchaseButton =
  document.querySelector("#completePurchaseButton");


const completePage =
  document.querySelector("#completePage");

const completeText =
  document.querySelector("#completeText");

const returnToMarket =
  document.querySelector("#returnToMarket");


const activityText =
  document.querySelector("#activityText");


const hoursEl =
  document.querySelector("#hours");

const minutesEl =
  document.querySelector("#minutes");

const secondsEl =
  document.querySelector("#seconds");

const framesEl =
  document.querySelector("#frames");


/* =====================================================
   STATE
===================================================== */

const total =
  items.length;

const step =
  360 / total;


let cards = [];

let rotation = 0;
let velocity = 0;

let dragging = false;
let moved = false;

let pointerStartX = 0;
let previousX = 0;
let previousTime = 0;

let selectedIndex = 0;
let previousSelectedIndex = -1;

let snapping = false;
let snapTarget = 0;


const watched =
  new Set();

const cart =
  new Set();

const sold =
  new Set();


/* =====================================================
   NAVIGATION
===================================================== */

function showBrandPage() {
  closeCart();

  productPage.classList.add("hidden");

  marketPage.classList.add("hidden");

  brandPage.classList.remove("hidden");

  window.scrollTo(0, 0);
}


function showMarketPage() {
  closeCart();

  brandPage.classList.add("hidden");

  productPage.classList.add("hidden");

  marketPage.classList.remove("hidden");

  window.scrollTo(0, 0);
}


function showProductPage(index) {
  closeCart();

  selectedIndex = index;

  updateProductPage();

  marketPage.classList.add("hidden");

  brandPage.classList.add("hidden");

  productPage.classList.remove("hidden");

  window.scrollTo(0, 0);
}


viewMarketButton.addEventListener(
  "click",
  showMarketPage
);


backToBrand.addEventListener(
  "click",
  showBrandPage
);


backToMarket.addEventListener(
  "click",
  showMarketPage
);


/* =====================================================
   BUILD CAROUSEL
===================================================== */

function buildCards() {
  const fragment =
    document.createDocumentFragment();


  items.forEach(
    (item, index) => {

      const card =
        document.createElement("article");


      card.className =
        "card";


      card.innerHTML = `
        <img
          src="${item.image}"
          alt="${item.title}"
        >

        <div class="card-meta">

          <span>
            ${item.id}
          </span>

          <span>
            ${money(item.price)}
          </span>

        </div>
      `;


      card.addEventListener(
        "click",
        () => {

          if (moved) {
            return;
          }


          if (
            selectedIndex ===
            index
          ) {

            showProductPage(index);

          } else {

            snapTo(index);

          }

        }
      );


      fragment.appendChild(card);

    }
  );


  ring.appendChild(fragment);


  cards = [
    ...ring.querySelectorAll(".card")
  ];
}


/* =====================================================
   CAROUSEL
===================================================== */

function getRadius() {

  if (
    window.innerWidth <
    520
  ) {
    return 220;
  }


  if (
    window.innerWidth <
    900
  ) {
    return 320;
  }


  return 440;
}


function getSelectedIndex() {

  const normalized =
    ((-rotation % 360) + 360) % 360;


  return (
    Math.round(
      normalized /
      step
    ) %
    total
  );
}


function updateSelectedUI() {

  selectedIndex =
    getSelectedIndex();


  if (
    selectedIndex ===
    previousSelectedIndex
  ) {
    return;
  }


  previousSelectedIndex =
    selectedIndex;


  const item =
    items[selectedIndex];


  focusId.textContent =
    item.id;


  focusTitle.textContent =
    item.title;


  focusPrice.textContent =
    money(item.price);


  focusCount.textContent =
    `${String(
      selectedIndex + 1
    ).padStart(
      2,
      "0"
    )} / ${String(
      total
    ).padStart(
      2,
      "0"
    )}`;


  cards.forEach(
    (card, index) => {

      card.classList.toggle(
        "active",
        index === selectedIndex
      );


      card.classList.toggle(
        "sold",
        sold.has(index)
      );

    }
  );
}


function renderCarousel() {

  const radius =
    getRadius();


  cards.forEach(
    (card, index) => {

      const angle =
        index *
        step +
        rotation;


      const rad =
        angle *
        Math.PI /
        180;


      const x =
        Math.sin(rad) *
        radius;


      const z =
        Math.cos(rad);


      const y =
        Math.abs(
          Math.sin(rad)
        ) *
        18;


      const depth =
        (z + 1) /
        2;


      const scale =
        0.56 +
        depth *
        0.58;


      const opacity =
        0.14 +
        depth *
        0.86;


      const tilt =
        Math.sin(rad) *
        -16;


      card.style.transform = `
        translate3d(
          calc(-50% + ${x}px),
          calc(-50% + ${y}px),
          0
        )
        scale(${scale})
        rotate(${tilt}deg)
      `;


      card.style.opacity =
        opacity;


      card.style.zIndex =
        Math.round(
          depth *
          1000
        );


      card.style.filter =
        `brightness(${0.52 + depth * 0.58})`;

    }
  );


  updateSelectedUI();
}


/* =====================================================
   DRAG
===================================================== */

stage.addEventListener(
  "pointerdown",
  event => {

    if (
      event.target.closest(
        "#inspectButton"
      )
    ) {
      return;
    }


    dragging = true;

    moved = false;

    snapping = false;

    pointerStartX =
      event.clientX;

    previousX =
      event.clientX;

    previousTime =
      performance.now();

    velocity = 0;


    stage.setPointerCapture(
      event.pointerId
    );
  }
);


stage.addEventListener(
  "pointermove",
  event => {

    if (!dragging) {
      return;
    }


    const now =
      performance.now();


    const deltaX =
      event.clientX -
      previousX;


    const dt =
      Math.max(
        now -
        previousTime,
        8
      );


    if (
      Math.abs(
        event.clientX -
        pointerStartX
      ) >
      4
    ) {

      moved = true;

    }


    const amount =
      deltaX *
      0.12;


    rotation +=
      amount;


    const instant =
      amount /
      dt *
      16.67;


    velocity =
      velocity *
      0.72 +
      instant *
      0.28;


    previousX =
      event.clientX;


    previousTime =
      now;
  }
);


function stopDrag() {
  dragging = false;
}


stage.addEventListener(
  "pointerup",
  stopDrag
);


stage.addEventListener(
  "pointercancel",
  stopDrag
);


/* =====================================================
   WHEEL
===================================================== */

stage.addEventListener(
  "wheel",
  event => {

    event.preventDefault();


    snapping = false;


    const amount =
      Math.abs(
        event.deltaX
      ) >
      Math.abs(
        event.deltaY
      )

      ? event.deltaX
      : event.deltaY;


    velocity +=
      -amount *
      0.0028;
  },
  {
    passive: false
  }
);


/* =====================================================
   SNAP
===================================================== */

function nearestSnap() {

  return (
    Math.round(
      rotation /
      step
    ) *
    step
  );
}


function startSnap() {

  snapTarget =
    nearestSnap();


  snapping =
    true;
}


function snapTo(index) {

  const base =
    -index *
    step;


  const turns =
    Math.round(
      (rotation -
      base) /
      360
    );


  snapTarget =
    base +
    turns *
    360;


  snapping =
    true;
}


/* =====================================================
   PHYSICS LOOP
===================================================== */

let lastFrame =
  performance.now();


function animationLoop(time) {

  const dt =
    Math.min(
      (time -
      lastFrame) /
      16.67,
      2
    );


  lastFrame =
    time;


  if (!dragging) {


    if (!snapping) {


      rotation +=
        velocity *
        dt;


      velocity *=
        Math.pow(
          0.94,
          dt
        );


      if (
        Math.abs(
          velocity
        ) <
        0.035
      ) {

        velocity = 0;

        startSnap();

      }

    }


    if (snapping) {


      const difference =
        snapTarget -
        rotation;


      rotation +=
        difference *
        0.085 *
        dt;


      if (
        Math.abs(
          difference
        ) <
        0.012
      ) {

        rotation =
          snapTarget;


        snapping =
          false;


        velocity =
          0;

      }

    }

  }


  renderCarousel();


  requestAnimationFrame(
    animationLoop
  );
}


/* =====================================================
   PRODUCT PAGE
===================================================== */

function updateProductPage() {

  const item =
    items[selectedIndex];


  productImage.src =
    item.image;


  productId.textContent =
    item.id;


  productTitle.textContent =
    item.title;


  productPrice.textContent =
    money(item.price);


  productLocation.textContent =
    item.location;


  productType.textContent =
    item.type;


  productDate.textContent =
    item.date;


  productContext.textContent =
    item.context;


  productViews.textContent =
    item.views;


  productMessage.textContent =
    "";


  if (
    sold.has(
      selectedIndex
    )
  ) {

    productStatus.textContent =
      "SOLD";


    productStatus.style.color =
      "var(--rose)";


    addToCartButton.textContent =
      "SOLD";


    addToCartButton.disabled =
      true;


    addToCartButton.classList.remove(
      "in-cart"
    );

  } else {

    productStatus.textContent =
      "AVAILABLE";


    productStatus.style.color =
      "var(--lemon)";


    addToCartButton.disabled =
      false;


    if (
      cart.has(
        selectedIndex
      )
    ) {

      addToCartButton.textContent =
        "IN CART";


      addToCartButton.classList.add(
        "in-cart"
      );

    } else {

      addToCartButton.textContent =
        "ADD TO CART";


      addToCartButton.classList.remove(
        "in-cart"
      );

    }

  }


  if (
    watched.has(
      selectedIndex
    )
  ) {

    watchButton.textContent =
      "WATCHING";


    watchButton.classList.add(
      "active"
    );

  } else {

    watchButton.textContent =
      "WATCH";


    watchButton.classList.remove(
      "active"
    );

  }

}


inspectButton.addEventListener(
  "click",
  () => {

    showProductPage(
      selectedIndex
    );

  }
);


/* =====================================================
   WATCH
===================================================== */

watchButton.addEventListener(
  "click",
  () => {

    if (
      watched.has(
        selectedIndex
      )
    ) {

      watched.delete(
        selectedIndex
      );


      watchButton.textContent =
        "WATCH";


      watchButton.classList.remove(
        "active"
      );


      productMessage.textContent =
        "REMOVED FROM WATCHLIST";

    } else {

      watched.add(
        selectedIndex
      );


      watchButton.textContent =
        "WATCHING";


      watchButton.classList.add(
        "active"
      );


      productMessage.textContent =
        "WATCHING THIS TRACE";

    }

  }
);


/* =====================================================
   CART DATA
===================================================== */

function calculateCartTotal() {

  let value =
    0;


  cart.forEach(
    index => {

      value +=
        items[index].price;

    }
  );


  return value;
}


function updateCartCounters() {

  const count =
    String(
      cart.size
    ).padStart(
      2,
      "0"
    );


  cartCount.textContent =
    count;


  productCartCount.textContent =
    count;
}


/* =====================================================
   ADD TO CART
===================================================== */

addToCartButton.addEventListener(
  "click",
  () => {

    if (
      sold.has(
        selectedIndex
      )
    ) {
      return;
    }


    if (
      cart.has(
        selectedIndex
      )
    ) {

      cart.delete(
        selectedIndex
      );


      addToCartButton.textContent =
        "ADD TO CART";


      addToCartButton.classList.remove(
        "in-cart"
      );


      productMessage.textContent =
        "REMOVED FROM CART";

    } else {

      cart.add(
        selectedIndex
      );


      addToCartButton.textContent =
        "IN CART";


      addToCartButton.classList.add(
        "in-cart"
      );


      productMessage.textContent =
        "ADDED TO CART";

    }


    updateCartCounters();

    renderCart();

  }
);


/* =====================================================
   CART RENDER
===================================================== */

function renderCart() {

  updateCartCounters();


  cartSubtotal.textContent =
    money(
      calculateCartTotal()
    );


  cartItems.innerHTML =
    "";


  if (
    cart.size ===
    0
  ) {

    cartEmpty.style.display =
      "block";


    checkoutButton.disabled =
      true;


    return;

  }


  cartEmpty.style.display =
    "none";


  checkoutButton.disabled =
    false;


  cart.forEach(
    index => {

      const item =
        items[index];


      const element =
        document.createElement(
          "div"
        );


      element.className =
        "cart-item";


      element.innerHTML = `
        <img
          src="${item.image}"
          alt="${item.title}"
        >

        <div class="cart-item-info">

          <div class="cart-item-top">

            <div class="cart-item-title">

              <strong>
                ${item.id}
              </strong>

              <span>
                ${item.title}
              </span>

            </div>

            <div class="cart-item-price">
              ${money(item.price)}
            </div>

          </div>

          <button
            class="remove-item"
            type="button"
            data-remove="${index}"
          >
            REMOVE
          </button>

        </div>
      `;


      cartItems.appendChild(
        element
      );

    }
  );


  document
    .querySelectorAll(
      "[data-remove]"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            const index =
              Number(
                button.dataset.remove
              );


            cart.delete(
              index
            );


            renderCart();


            if (
              !productPage.classList.contains(
                "hidden"
              ) &&
              selectedIndex ===
              index
            ) {

              updateProductPage();

            }

          }
        );

      }
    );
}


/* =====================================================
   CART OPEN / CLOSE
===================================================== */

function openCart() {

  renderCart();


  cartBackdrop.classList.add(
    "show"
  );


  cartDrawer.classList.add(
    "open"
  );
}


function closeCart() {

  cartBackdrop.classList.remove(
    "show"
  );


  cartDrawer.classList.remove(
    "open"
  );
}


cartButton.addEventListener(
  "click",
  openCart
);


productCartButton.addEventListener(
  "click",
  openCart
);


cartClose.addEventListener(
  "click",
  closeCart
);


cartBackdrop.addEventListener(
  "click",
  closeCart
);


/* =====================================================
   CHECKOUT
===================================================== */

checkoutButton.addEventListener(
  "click",
  () => {

    if (
      cart.size ===
      0
    ) {
      return;
    }


    closeCart();


    checkoutQuantity.textContent =
      cart.size;


    checkoutTotal.textContent =
      money(
        calculateCartTotal()
      );


    checkoutPage.classList.add(
      "show"
    );

  }
);


checkoutBack.addEventListener(
  "click",
  () => {

    checkoutPage.classList.remove(
      "show"
    );


    openCart();

  }
);


/* =====================================================
   PURCHASE
===================================================== */

completePurchaseButton.addEventListener(
  "click",
  () => {

    const purchased =
      [...cart];


    purchased.forEach(
      index => {

        sold.add(
          index
        );

      }
    );


    const quantity =
      purchased.length;


    cart.clear();


    renderCart();


    previousSelectedIndex =
      -1;


    updateSelectedUI();


    checkoutPage.classList.remove(
      "show"
    );


    completeText.textContent =
      `${quantity} TRACE${quantity === 1 ? "" : "S"} ACQUIRED — ADDED TO YOUR ARCHIVE.`;


    completePage.classList.add(
      "show"
    );


    activityText.textContent =
      `${quantity} TRACE${quantity === 1 ? "" : "S"} SOLD — ${total - sold.size} REMAINING`;

  }
);


returnToMarket.addEventListener(
  "click",
  () => {

    completePage.classList.remove(
      "show"
    );


    showMarketPage();

  }
);


/* =====================================================
   COUNTDOWN
===================================================== */

let countdown =
  23 *
  3600 +
  59 *
  60 +
  58;


let frames =
  24;


function countdownTick() {

  frames--;


  if (
    frames <
    0
  ) {

    frames =
      24;


    countdown--;

  }


  const hours =
    Math.floor(
      countdown /
      3600
    );


  const minutes =
    Math.floor(
      (
        countdown %
        3600
      ) /
      60
    );


  const seconds =
    countdown %
    60;


  hoursEl.textContent =
    String(
      hours
    ).padStart(
      2,
      "0"
    );


  minutesEl.textContent =
    String(
      minutes
    ).padStart(
      2,
      "0"
    );


  secondsEl.textContent =
    String(
      seconds
    ).padStart(
      2,
      "0"
    );


  framesEl.textContent =
    String(
      frames
    ).padStart(
      2,
      "0"
    );
}


setInterval(
  countdownTick,
  40
);


/* =====================================================
   KEYBOARD
===================================================== */

document.addEventListener(
  "keydown",
  event => {

    if (
      !marketPage.classList.contains(
        "hidden"
      )
    ) {

      if (
        event.key ===
        "ArrowRight"
      ) {

        snapTo(
          (
            selectedIndex +
            1
          ) %
          total
        );

      }


      if (
        event.key ===
        "ArrowLeft"
      ) {

        snapTo(
          (
            selectedIndex -
            1 +
            total
          ) %
          total
        );

      }


      if (
        event.key ===
        "Enter"
      ) {

        showProductPage(
          selectedIndex
        );

      }

    }


    if (
      event.key ===
      "Escape"
    ) {

      closeCart();


      checkoutPage.classList.remove(
        "show"
      );

    }

  }
);


/* =====================================================
   INIT
===================================================== */

buildCards();

renderCart();

updateSelectedUI();

requestAnimationFrame(
  animationLoop
);