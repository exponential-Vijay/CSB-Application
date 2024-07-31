
window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
  }


const loginForm = document.getElementById("loginForm");
if (loginForm) {
    const phoneInput = document.getElementById("phone");
    const errorMessage = document.getElementById("error-message");
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const ph = phoneInput.value;
        console.log("Phone Number : ", ph);

        if (ph == 9638527410) {
            errorMessage.textContent = "";
            // alert("You entered correct Phone no.");
            window.location.href = "page2.html";
        } else {
            errorMessage.textContent = "Please enter a valid 10-digit phone number.";
        }
    });
}


const inputField = document.getElementById("input-field")
if (inputField) {
    button = document.querySelector("button");
    inputs = document.querySelectorAll("input")
    console.log(inputs);
    // iterate over all inputs
    inputs.forEach((input, index1) => {
        input.addEventListener("keyup", (e) => {
            const currentInput = input,
                nextInput = input.nextElementSibling,
                prevInput = input.previousElementSibling;

            if (currentInput.value.length > 1) {
                currentInput.value = "";
                return;
            }

            if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
                nextInput.removeAttribute("disabled");
                nextInput.focus();
            }


            if (e.key === "Backspace" || e.key == "Delete") {

                inputs.forEach((input, index2) => {
                    if (index1 <= index2 && prevInput) {
                        input.setAttribute("disabled", true);
                        input.value = "";
                        prevInput.focus();
                    }
                });
            }

            if (!inputs[5].disabled && inputs[5].value !== "") {
                button.classList.add("active");
                return;
            }
            button.classList.remove("active");
        });
    });

    //focus the first input which index is 0 on window load
    window.addEventListener("load", () => inputs[0].focus());

    button.addEventListener("click", (e) => {
        e.preventDefault();
        const optValue = Array.from(inputs).map(input => input.value).join('');
        console.log(optValue);

        if (optValue == 123456) {
            // alert("Otp verified");
            window.location.href= "Page3.html"
        }
        else {
            alert("Wrong otp");
        }

    })
}
