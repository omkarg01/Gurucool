import { useState } from "react";
import Navigation from "./Navigation";
import "../App.css";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";

// create a form component
const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });

  // create a state for errors
  const [touchedFields, setTouchedFields] = useState({});

  // create a function to handle the next button
  const handleNext = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
    setStep(step + 1);
  };

  // create a function to handle the back button
  const handleBack = () => {
    setStep(step - 1);
  };

  // create a function to handle the change in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Mark the field as touched
    setTouchedFields({
      ...touchedFields,
      [name]: true,
    });
  };

  // create a function to handle the form submission
  const handleFormSubmit = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
    console.log("Form submitted", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address1: "",
      address2: "",
      country: "",
      state: "",
      city: "",
      zip: "",
    });
    setStep(1);
    setTimeout(() => {
      localStorage.removeItem("formData");
    }, 100);

    // Refresh the page after 1.5 seconds
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
    <div className="form-container">
      <form onSubmit={(e) => e.preventDefault()}>
        {step === 1 && (
          <FormStep1 formData={formData} handleChange={handleChange} />
        )}
        {step === 2 && (
          <FormStep2 formData={formData} handleChange={handleChange} />
        )}
        {step === 3 && <FormStep3 formData={formData} />}
        <Navigation
          step={step}
          handleNext={handleNext}
          handleBack={handleBack}
          handleFormSubmit={handleFormSubmit}
        />
      </form>
    </div>
  );
};

export default Form;
