Multi-Step Form with React - Frontend Developer Assignment
Objective
This project aims to create a responsive multi-step form using React.js, focusing on sequential data collection, form validation, error handling, and smooth navigation. The form data is saved in local storage and can be retrieved when the form is revisited. The form has three steps, each dealing with a specific type of information.

Features
Three-Step Form: Collects personal, address, and confirmation details.
Client-Side Validation: Ensures all fields are filled before proceeding to the next step, with error messages for invalid input.
State Management: React state and hooks (useState, useEffect) manage form data and step navigation.
Local Storage Persistence: Data is saved to local storage as users navigate between steps.
Responsive Design: Ensures compatibility across devices like desktops, tablets, and mobile phones.
Requirements
1. Form Structure
The form is divided into three distinct steps:

Step 1: Personal Information (Name, Email, Phone)
Step 2: Address Information (Address Line 1, Address Line 2, City, State, Zip Code)
Step 3: Confirmation (Review and confirm entered data)
2. Navigation & Buttons
Users can navigate between steps using tabbed navigation.
The back button is disabled on the first step, preventing backward navigation.
The next button is disabled on the last step, where it is replaced by a submit button.
3. Form Validation
Each step includes client-side validation to ensure fields are properly filled before proceeding.
Error messages are displayed for empty or invalid fields (e.g., email format).
Fields with errors are highlighted for better user experience.
4. State Management
React hooks (useState and useEffect) are used to manage and update the form's state.
The form state reflects user inputs and is updated as users navigate between steps.
5. Local Storage
Form data is saved to local storage after each step, so users don't lose their progress when navigating away from the page.
When the form is revisited, previously entered data is pre-filled from local storage.
6. Responsive Design
The form is designed to be fully responsive, working seamlessly across desktop, tablet, and mobile devices.
CSS and possibly a CSS framework (such as Bootstrap or Material UI) is used to ensure proper layout and responsiveness.
Getting Started
Prerequisites
Node.js
npm (Node Package Manager)
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/your-repo/multi-step-form.git
Navigate to the project directory:
bash
Copy code
cd multi-step-form
Install dependencies:
bash
Copy code
npm install
Running the Project
To start the development server:

bash
Copy code
npm start
The app will be accessible at http://localhost:3000.

Building for Production
To create a production build of the project:

bash
Copy code
npm run build
Technologies Used
React.js: For building the user interface and managing state.
Local Storage: For persisting form data.
CSS/SCSS: For responsive design.
React Router: For navigating between form steps.
React Hooks: useState, useEffect for state management.
Validation: Custom validation logic for form fields.
Future Enhancements
Integration with a backend API to submit the form data.
Additional form steps if needed (e.g., payment information).
Unit testing with Jest and React Testing Library.
License
This project is licensed under the MIT License.

