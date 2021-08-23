import EmailValidator from 'email-validator'

export const loginValidator = (userName, pass) => {
    if ('admin' === userName && 'admin' === pass) {
        return true;
    }
    return false;
}
export const userNameVlidate = (userName) => {
    if ('admin' === userName || userName.length < 4) {
        return false;
    }

    return true;
}
export const emailVlidate = (email) => {
    if ('admin@gmail.com' === email) {
        return false;
    }
    return EmailValidator.validate(email);
}
export const passwordVerifyValidate = (pass, verify) => {

    if (pass != verify) return false;

    return true;
}
export const passwordLength = (pass) => {

    if (pass.length < 6) return false;

    return true;
}