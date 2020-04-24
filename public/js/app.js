const app = () => {
    const form = document.getElementById('form')
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const password = document.getElementById('password');
    const email = document.getElementById('email');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        checkInputs();
    })

    const checkInputs = () => {
        const firstNameValue = firstName.value.trim();
        const lastNameValue = lastName.value.trim();
        const passwordValue = password.value.trim();
        const emailValue = email.value.trim();

        // check for First Name
        if(firstNameValue === '') {
            setError(firstName, 'First Name cannot be empty');
        } else {
            setSuccess(firstName);
        }

        // check for last Name
        if(lastNameValue === '') {
            setError(lastName, 'Last Name cannot be empty');
        } else {
            setSuccess(lastName);
        }

        // check for email
        if(emailValue === '') {
            setError(email, 'email cannot be empty');
        } else if(!isEmailValid(emailValue)) {
            setError(email, 'Looks like this is not an email');
        } else {
            setSuccess(email);
        }

        // check for password
        if(passwordValue === '') {
            setError(password, 'Password cannot be empty');
        } else if(passwordValue.length < 8) {
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
    
}

app();