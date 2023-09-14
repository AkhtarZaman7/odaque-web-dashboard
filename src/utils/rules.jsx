export const RULES = {
  password: [
    {
      required: true,
      message: 'Please enter your Password!',
    },
    {
      min: 8,
      message: 'Password must be at least 8 characters long.',
    },
    {
      pattern:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      message:
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
    },
  ],
  username: [
    {
      required: true,
      message: 'Please enter your Username!',
    },
    {
      pattern: /^[A-Za-z0-9_]{5,}$/,
      message:
        'Username should contain at least 5 characters and can include letters, numbers, and underscores.',
    },
  ],
};
