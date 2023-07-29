# Smart-Login-System

Smart Login System with visually appealing pages - Sign in, Sign up, and Welcome. Utilizing Regex for input validation and Local Storage for data storage.

## Sign In Page:

- Checks if the user is registered in the system; if not, prompts the user to Sign Up.
- Provides clear error messages for typos in email or password fields - "Wrong email or password."

## Sign Up Page:

- Validates input for name, email, and password fields.
  - If the name or email already exists in the system, displays appropriate messages:
    - For name: "Choose another name, this name is already taken."
    - For email: "This email is already registered, please Sign In."
- Password Requirements:
  - Accepts passwords with 6 to 16 characters.
  - Requires at least 1 digit and 1 special character for a strong password.
- Name Requirements:
  - Accepts names with a minimum of 3 letters.
  - Only allows alphabetical letters for the name field.
- Email Requirements:
  - Validates that the email follows the format "name@example.com."

## Welcome Page:

- Upon successful sign-in, directs the user to the Welcome page.
- Displays a warm greeting like "Hello [user's name]" to personalize the experience.

## Video:



https://github.com/AyaAbdelmoghith/Smart-Login-System/assets/105630381/9e593399-a3e0-413f-9bf1-4f11e2f69ac5




