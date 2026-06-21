export const validateLogin = (
    email: string,
    password: string,
) => {
    if (!email.trim()) {
        return 'Email is required';
    }

    if (!password.trim()) {
        return 'Password is required';
    }

    if (password.length < 6) {
        return 'Password must be at least 6 characters';
    }

    return '';
};