var buy = document.querySelectorAll(".button-cart");
var cart = document.querySelector(".add-cart");
var cartClose = cart.querySelector(".button-close");

for (var i = 0; i < buy.length; i++) {
    buy[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        cart.classList.add("add-cart-show");
    });
}

cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cart.classList.remove("add-cart-show")
})

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (cart.classList.contains("add-cart-show")) {
            cart.classList.remove("add-cart-show");
        }
    }
})

var body = document.querySelector("body");

var writeUs = document.querySelector(".write-us");
var popup = document.querySelector(".popup-feedback");
var close = popup.querySelector(".btn-close");

var nameFocus = popup.querySelector(".user-name");
var form = popup.querySelector(".feedback-form");
var email = popup.querySelector(".email");
var message = popup.querySelector(".message");

var isStorageSupport = true;
var storage = "";
  
try {
    storage = localStorage.getItem("nameFocus");
} catch (err) {
    isStorageSupport = false;
};

writeUs.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("popup-feedback-show");
    if (storage) {
        nameFocus.value = storage;
        email.focus();
    } else {
        nameFocus.focus();
    }
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("popup-feedback-show");
    popup.classList.remove("popup-feedback-error");
});

form.addEventListener("submit", function (evt) {
    if (!nameFocus.value || !email.value || !message.value) {
        evt.preventDefault();
        popup.classList.remove("popup-feedback-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("popup-feedback-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("nameFocus", nameFocus.value);
            localStorage.setItem("email", email.value);
        }
        
    }
    

});

window.addEventListener("keydown", function (evt){
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("popup-feedback-show")) {
            popup.classList.remove("popup-feedback-show");
            popup.classList.remove("popup-feedback-error");
        }
    }
});


// var mapOpen = document.querySelector(".contacts-button-map");
// var mapPopup = document.querySelector(".popup-map");
// var mapClose = mapPopup.querySelector(".btn-close");

// mapOpen.addEventListener("click", function(evt) {
//     evt.preventDefault();
//     mapPopup.classList.add("popup-map-show");
// });

// mapClose.addEventListener("click", function(evt) {
//     evt.preventDefault();
//     mapPopup.classList.remove("popup-map-show");
// });

// window.addEventListener("keydown", function (evt){
//     if (evt.keyCode === 27) {
//         evt.preventDefault();
//         if (mapPopup.classList.contains("popup-map-show")) {
//             mapPopup.classList.remove("popup-map-show");
//         }
//     }
// });