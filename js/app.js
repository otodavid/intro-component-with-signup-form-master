const app = () => {
    const form = document.getElementById('form')
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const password = document.getElementById('password');
    const email = document.getElementById('email');

    const checkInputs = () => {
        const firstNameValue = firstName.value.trim();
        const lastNameValue = lastName.value.trim();
        const passwordValue = password.value.trim();
        const emailValue = email.value.trim();

        // check for First Name
        if (firstNameValue === '') {
            setError(firstName, 'First Name cannot be empty');
        } else {
            setSuccess(firstName);
        }

        // check for last Name
        if (lastNameValue === '') {
            setError(lastName, 'Last Name cannot be empty');
        } else {
            setSuccess(lastName);
        }

        // check for email
        if (emailValue === '') {
            setError(email, 'email cannot be empty');
        } else if (!isEmailValid(emailValue)) {
            setError(email, 'Looks like this is not an email');
        } else {
            setSuccess(email);
        }

        // check for password
        if (passwordValue === '') {
            setError(password, 'Password cannot be empty');
        } else if (passwordValue.length < 8) {
            setError(password, 'Password must be greater than 8 digits');
        } else {
            setSuccess(password);
        }

    }

    const setError = (input, errorMessage) => {
        const formControl = input.parentElement;

        // add error to class form control
        formControl.classList.add('error');
        const errorText = formControl.querySelector('em');

        // insert error into the tag
        errorText.textContent = errorMessage;
    }

    const setSuccess = (input) => {
        const formControl = input.parentElement;

        // remover error class from form control
        formControl.classList.remove('error');
    }

    // check email validity
    const isEmailValid = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    const removeColorClass = () => {
        // the variable formInputs is a nodelist
        const formInputs = document.querySelectorAll('.form-control');

        // convert the nodelist into an array
        const formInputArray = [...formInputs];

        // show error class is input fields are not filled properly
        let i = 0;
        for (i; i < formInputArray.length; i++) {
            if (formInputArray[i].classList.contains('error')) {
                formInputArray[i].classList.remove('color-change');
            }
        }
    }

    // function to validate form
    const validatForm = (e) => {
        e.preventDefault();
        checkInputs();
        removeColorClass();
    }

    form.addEventListener('submit', validatForm);
    
    const addColorClass = (e) => {
        const formControl = e.target.parentElement;
        if (formControl.classList.contains('error')) {
            formControl.classList.add('color-change');
        }
    }

    // The color-change class has a color property set to black.
    // Add an event listener to add this class to the parent div of input fields so as to change the color of input text back to black from red (if there is an error on any input field) once an input field has been interacted with and loses focus.
    form.addEventListener('focusout', addColorClass);
}

app();