export const required = value => (value || typeof value === 'number' ? undefined : 'Required');

export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const maxLength20 = maxLength(20);

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;

const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

export const nameChars = value =>
  value && /[^a-zA-Z \-]/i.test(value)
    ? 'This field has certain characters that aren\'t allowed'
    : undefined;

export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined;

export const passwordsMatch = (value, allValues) =>
  value !== allValues.password ? `Passwords don't match` : undefined;
