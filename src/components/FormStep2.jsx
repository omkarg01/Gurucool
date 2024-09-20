import React from "react";

// create a step component including the form fields (address1, address2, city, state, zip)
const FormStep2 = ({ formData, handleChange }) => (
  <div>
    <h2>Address Information</h2>
    <div className="forms">
      <label>Address Line 1</label>
      <input
        type="text"
        name="address1"
        // set the value of the address1 field to the value in the formData state
        value={formData.address1}
        // call the handleChange function when the value of the address1 field changes
        onChange={handleChange}
        placeholder="Enter Address Line 1"
      />
      {/* display an error message if the address1 field is empty */}
    </div>
    <div className="forms">
      <label>Address Line 2</label>
      <input
        type="text"
        name="address2"
        value={formData.address2}
        onChange={handleChange}
        placeholder="Enter Address Line 2"
      />
    </div>
    <div className="forms">
      <label>City</label>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="Enter City"
      />
    </div>
    <div className="forms">
      <label>State</label>
      <input
        type="text"
        name="state"
        value={formData.state}
        onChange={handleChange}
        placeholder="Enter State"
      />
    </div>
    <div className="forms">
      <label>Zip Code</label>
      <input
        type="text"
        name="zip"
        value={formData.zip}
        onChange={handleChange}
        placeholder="Enter Zip Code"
      />
    </div>
  </div>
);

// export the FormStep2 component
export default FormStep2;
