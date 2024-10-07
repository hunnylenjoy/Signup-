let form = document.getElementById("form")
let sign_button = document.getElementById("submit_button")
sign_button.addEventListener("click", (event) => {
    event.preventDefault()
    if (validate()) {
        form.submit()
    }
})

let password = document.getElementById("new_password")
let confirm_password = document.getElementById("confirm_password")

let first_name = document.getElementById("first_name")
let last_name = document.getElementById("last_name")
let age = document.getElementById("age")

let error_log = document.getElementById("error_log")
let user_error = document.getElementById("user_error")

function validate() {
    valid = true
    error_log.textContent = ""
    if (password.value.length < 8) {
        var li = document.createElement("li")
        li.textContent = "Password must be at least 8 characters long. "
        error_log.appendChild(li)
        valid = false
    }
    if (!(/[A-Z]/.test(password.value))) {
        var li = document.createElement("li")
        li.textContent = "Password must have at least 1 Uppercase Letter. "
        error_log.appendChild(li)
        valid = false
    }
    if (!(/[0-9]/.test(password.value))) {
        var li = document.createElement("li")
        li.textContent = "Password must have at least 1 number. "
        error_log.appendChild(li)
        valid = false
    }
    if (!(password.value === confirm_password.value)) {
        var li = document.createElement("li")
        li.textContent = "Confirm Password must match Password. "
        error_log.appendChild(li)
        valid = false
    }
    user_error.textContent = ""
    if (first_name.value.length == 0) {
        var li = document.createElement("li")
        li.textContent = "First Name entry must be filled out."
        user_error.appendChild(li)
        valid = false
    }
    if (last_name.value.length == 0) {
        var li = document.createElement("li")
        li.textContent = "Last Name entry must be filled out."
        user_error.appendChild(li)
        valid = false
    }
    if (age.value.length == 0) {
        var li = document.createElement("li")
        li.textContent = "Age entry must be filled out."
        user_error.appendChild(li)
        valid = false
    } else {
        user_age = parseInt(age.value)
        if (user_age < 1 || user_age > 120) {
            var li = document.createElement("li")
            li.textContent = "Age must be within 1 to 120"
            user_error.appendChild(li)
            valid = false}
    }

    return valid
}