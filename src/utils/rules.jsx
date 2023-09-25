export const RULES = {
  fullname: [
    {
      required: true,
      whitespace: true,
      message: (
        <span className="text-red-500 text-xs font-roboto">
          Please enter your Full Name
        </span>
      ),
    },
  ],
  email: [
    // {
    //   validator: (_, value) => {
    //     if (!value || isEmailValid(value)) {
    //       return Promise.resolve();
    //     }
    //     return Promise.reject(
    //       <span className="text-xs font-roboto">
    //         Please enter a valid email address!
    //       </span>
    //     );
    //   },
    // },
    {
      type: "email",
      message: "Please enter your correct email",
    },
    {
      required: true,
      message: (
        <span
          style={{ marginTop: "-10px" }}
          className="text-red-500  text-xs font-roboto"
        >
          Please enter your email address!
        </span>
      ),
    },
  ],
  password: [
    {
      required: true,
      message: (
        <span className=" text-red-500 text-xs font-roboto">
          Please enter a password!
        </span>
      ),
    },
    {
      pattern: /^(?=.*[0-9]).{8,}$/,
      message: (
        <span className=" text-red-500 text-xs font-roboto">
          Must Include at least one number
        </span>
      ),
    },
  ],
  username: [
    {
      required: true,
      message: "Please enter your Username!",
    },
    {
      pattern: /^[A-Za-z0-9_]{5,}$/,
      message:
        "Username should contain at least 5 characters and can include letters, numbers, and underscores.",
    },
  ],
  confirmpassword: [
    {
      required: true,
      message: (
        <span className=" text-red-500 text-xs font-roboto">
          Please confirm your password!
        </span>
      ),
    },
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (!value || getFieldValue("Password") === value) {
          return Promise.resolve();
        }
        return Promise.reject(
          <span className="text-xs font-roboto">
            Passwords do not match. Please enter the same password.
          </span>
        );
      },
    }),
  ],

  lastName: [
    {
      required: true,
      message: "Please enter your Last Name!",
    },
    {
      pattern: /^[A-Za-z]+$/,
      message: "Last Name should contain only alphabetic characters.",
    },
  ],
  confirmnewpassword: [
    {
      required: true,
      message: "Please confirm your new password",
    },
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (!value || getFieldValue("newPassword") === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error("The two passwords do not match"));
      },
    }),
  ],
  address: [
    {
      required: true,
      message: "Please enter Address!",
    },
  ],
  location: [
    {
      required: true,
      message: "Please enter Location!",
    },
  ],
  city: [{ required: true, message: "Please choose City!" }],
  zipcode: [
    {
      required: true,
      message: "Please enter ZipCode!",
    },
  ],
  studiotype: [{ required: true, message: "Please select Studio!" }],
  contactno: [
    {
      required: true,
      message: "Please enter Contact No!",
    },
  ],
};
