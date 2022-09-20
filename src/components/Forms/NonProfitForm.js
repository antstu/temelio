import React from "react";
import "./styles.css";

const NonProfitForm = ({ values, onChange, onSubmit }) => {
  return (
    <form>
      <label>Name</label>
      <input name="name" value={values.name} onChange={onChange} />
      <label>Address</label>
      <input name="address" value={values.address} onChange={onChange} />
      <label>E-mail</label>
      <input name="email" value={values.email} onChange={onChange} />
      <button type="submit" className="submitButton" onClick={onSubmit}>
        Submit
      </button>
    </form>
  );
};

export default NonProfitForm;
