const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const ulRef = document.querySelector("ul");


const result = images.reduce((string, image) => string
    + `<li>
    <img src = "${image.url}"
    alt = " ${image.alt} ">
    </li>`, "")

// const imgs = ulRef.querySelectorAll("img");
// imgs.src = element.url;
// imgs.alt = element.alt;

ulRef.classList.add("galery")
ulRef.insertAdjacentHTML("beforeend", result);