const inputValidation = (fieldName, fieldValue) => {
    if (fieldValue.trim() === '') return `${fieldName} is required.`;
    else if (fieldValue.trim().length < 3)
        return `${fieldName} needs to be at least three characters.`;
    else return null;
};

export const validate = {
    username: username => inputValidation('Username', username),
    password: password => inputValidation('Password', password),
};

export const validateWithFormik = values => {
    let errors = {};
    const validEmail = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (!values.email) errors.email = 'Email is required.';
    else if (!validEmail.test(values.email))
        errors.email = 'Username needs to be a valid email.';

    if (!values.username) errors.username = 'Username is required.';
    else if (values.username.length < 3)
        errors.username = 'Username needs to be at least three characters.';

    if (!values.password) errors.password = 'Password is required.';
    else if (values.password.length < 3)
        errors.password = 'Password needs to be at least three characters.';

    return errors;
};
