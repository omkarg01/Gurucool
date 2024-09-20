import React from "react";

// create a step component including the form fields (name, email, phone)
const FormStep1 = ({ formData, handleChange }) => (
  <div>
    <h2>Personal Information</h2>
    <div className="forms">
      <label>Name</label>
      <input
        type="text"
        name="name"
        // set the value of the name field to the value in the formData state
        value={formData.name}
        // call the handleChange function when the value of the name field changes
        onChange={handleChange}
        placeholder="e.g., John Doe"
      />
      {/* display an error message if the name field is empty */}
    </div>
    <div className="forms">
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="e.g., johndoe@example.com"
      />
    </div>
    <div className="forms">
      <label>Phone</label>
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="e.g., 1234567890"
      />
    </div>
  </div>
);

// export the Step1 component
export default FormStep1;
