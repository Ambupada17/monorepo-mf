import React, { useState, useEffect } from "react";
import "./Form.css";

const Form = ({ initialData = {}, showErrors = false, isDisabled = false }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    phone: "",
    state: "",
    zip: "",
    gender: "",
    country: "",
    ...initialData,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData(initialData);
  },[initialData]);

  useEffect(() => {
    if (showErrors) {
      setErrors(validate());
    }
  }, [showErrors]);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone no is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.state) newErrors.state = "Email is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.zip) newErrors.zip = "Zip code is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.country) newErrors.country = "Country is required";

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Form has submitted successfully");
      setErrors({});
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__field">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          disabled={isDisabled}
        />
        {errors.firstName && (
          <span className="form__error">{errors.firstName}</span>
        )}
      </div>

      <div className="form__field">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          disabled={isDisabled}
        />
        {errors.lastName && (
          <span className="form__error">{errors.lastName}</span>
        )}
      </div>

      <div className="form__field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={isDisabled}
        />
        {errors.email && <span className="form__error">{errors.email}</span>}
      </div>

      <div className="form__field">
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          disabled={isDisabled}
        />
        {errors.phone && <span className="form__error">{errors.phone}</span>}
      </div>

      <div className="form__field">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          disabled={isDisabled}
        />
        {errors.address && (
          <span className="form__error">{errors.address}</span>
        )}
      </div>

      <div className="form__field">
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          disabled={isDisabled}
        />
        {errors.city && <span className="form__error">{errors.city}</span>}
      </div>

      <div className="form__field">
        <label htmlFor="state">State</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          disabled={isDisabled}
        />
        {errors.state && <span className="form__error">{errors.state}</span>}
      </div>

      <div className="form__field">
        <label htmlFor="zip">Zip</label>
        <input
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          disabled={isDisabled}
        />
        {errors.zip && <span className="form__error">{errors.zip}</span>}
      </div>

      <div className="form__field">
        <label>Gender</label>
        <div className="form__radio-group">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
              disabled={isDisabled}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
              disabled={isDisabled}
            />
            Female
          </label>
        </div>
        {errors.gender && <span className="form__error">{errors.gender}</span>}
      </div>
      <div className="form__field">
        <label htmlFor="country">Country</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          disabled={isDisabled}
        >
          <option value="">Select Country</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="uk">UK</option>
        </select>
        {errors.country && (
          <span className="form__error">{errors.country}</span>
        )}
      </div>

      <button type="submit" className="form__button" disabled={isDisabled}>
        Submit
      </button>
    </form>
  );
};
export default Form;
