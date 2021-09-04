const input = document.querySelector("#validation-input");
const limit = input.getAttribute("data-length");



input.addEventListener("blur", () => {
    if (input.value.length !== Number(limit)) {
        input.classList.add("invalid");
        
    } else {
        input.classList.add("valid");
        input.classList.replace("invalid", "valid");
    }
})