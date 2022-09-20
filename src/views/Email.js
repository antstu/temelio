import React, { useState } from "react";
import Select from "react-select";
import NavBar from "../components/NavBar/NavBar";
import { getFromLocalStorage, sendEmails } from "../helpers";

const email = "Sending money to nonprofit ${name} at address ${address}";

const Email = () => {
  const [foundationValues, setFoundationValues] = useState([]);

  const [nonProfitValues, setNonProfitValues] = useState([]);

  const handleFoundationMultiChange = (option) => {
    setFoundationValues((c) => [...c, option]);
  };

  const handleNonProfitMultiChange = (option) => {
    setNonProfitValues((c) => [...c, option]);
  };

  const foundations = getFromLocalStorage("foundation").map((item) => ({
    ...item,
    value: item.email,
    label: item.name,
  }));
  const nonProfits = getFromLocalStorage("nonProfit").map((item) => ({
    ...item,
    value: item.email,
    label: item.name,
  }));

  const onSubmit = () => {
    sendEmails(foundationValues, nonProfitValues, email);
    setFoundationValues([]);
    setNonProfitValues([]);
  };

  return (
    <div>
      <NavBar />
      <Select
        name="filters"
        placeholder="Filters"
        value={foundationValues}
        options={foundations}
        onChange={handleFoundationMultiChange}
        multi
        isClearable
      />

      <Select
        name="filters"
        placeholder="Filters"
        value={nonProfitValues}
        options={nonProfits}
        onChange={handleNonProfitMultiChange}
        multi
      />
      <input value={email} />

      <button type="submit" value={email} onClick={onSubmit}>
        Send Email
      </button>
    </div>
  );
};

export default Email;
