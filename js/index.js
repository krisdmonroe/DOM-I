const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// task 1.............................
const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
// task 2.............................

// task 3.............................
const navItem = document.querySelectorAll("a");
navItem[0].textContent = siteContent["nav"]["nav-item-1"];
navItem[1].textContent = siteContent["nav"]["nav-item-2"];
navItem[2].textContent = siteContent["nav"]["nav-item-3"];
navItem[3].textContent = siteContent["nav"]["nav-item-4"];
navItem[4].textContent = siteContent["nav"]["nav-item-5"];
navItem[5].textContent = siteContent["nav"]["nav-item-6"];

navItem.forEach(function(value){
value.style.color = "green";
});

let nav1 = document.querySelector("nav");
const prepend = document.createElement("a");
prepend.textContent = "Home";
nav1.prepend(prepend);

let nav2 = document.querySelector("nav");
const append = document.createElement("a");
append.textContent = "FAQ";
nav2.append(append);

prepend.style.color = "green";
append.style.color = "green";


const DOM = document.querySelectorAll("h1");
DOM[0].textContent = siteContent["cta"]["h1"];

const button = document.querySelectorAll("button");
button[0].textContent = siteContent["cta"]["button"];

const features = document.querySelectorAll("h4");
features[0].textContent = siteContent["main-content"]["features-h4"];
features[1].textContent = siteContent["main-content"]["about-h4"];
features[2].textContent = siteContent["main-content"]["services-h4"];
features[3].textContent = siteContent["main-content"]["product-h4"];
features[4].textContent = siteContent["main-content"]["vision-h4"];

const paragraph = document.querySelectorAll("p");
paragraph[0].textContent = siteContent["main-content"]["features-content"];
paragraph[1].textContent = siteContent["main-content"]["about-content"];
paragraph[2].textContent = siteContent["main-content"]["services-content"];
paragraph[3].textContent = siteContent["main-content"]["product-content"];
paragraph[4].textContent = siteContent["main-content"]["vision-content"];

const contact = document.querySelector(".contact h4");
contact.textContent = siteContent["contact"]["contact-h4"];

const contactAddress = document.querySelector(".contact p:nth-child(2)");
contactAddress.textContent = siteContent["contact"]["address"];

const contactPhone = document.querySelector(".contact p:nth-child(3)");
contactPhone.textContent = siteContent["contact"]["phone"];

const contactEmail = document.querySelector(".contact p:nth-child(4)");
contactEmail.textContent = siteContent["contact"]["email"];

const Footer = document.querySelector("footer");
Footer.textContent = siteContent["footer"]["copyright"];