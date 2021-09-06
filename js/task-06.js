const input = document.querySelector("#validation-input");



input.addEventListener("blur", validator);

function validator(){

    if (this.value.length === Number(this.getAttribute("data-length"))) {
        invalidCheck("valid", "invalid");
    } else {
        validCheck("valid", "invalid");
    }
}

function invalidCheck(valid, invalid) {
    if (input.classList.contains("invalid")) {
        input.classList.replace("invalid", "valid");
        
        return;
    }

    input.classList.add("valid");
}

function validCheck(valid, invalid) {
    if (input.classList.contains("valid")) {
        input.classList.replace("valid", "invalid");

        return;
    }

    input.classList.add("invalid");
}