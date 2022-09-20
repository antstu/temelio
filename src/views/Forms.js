import React, { useRef, useState } from "react";
import {
  FoundationForm,
  List,
  NonProfitForm,
  SegmentedControl,
} from "../components";
import { getFromLocalStorage } from "../helpers";
import useForm from "../hooks/useForm";
import "./styles.css";

const Forms = () => {
  const [type, setType] = useState("foundation");
  const handleSetType = (val) => {
    console.log("this is being called");
    console.log(val);
    setType(val);
  };

  const [foundationValues, foundationOnHandleChange, foundationOnSubmit] =
    useForm({
      name: "",
      email: "",
    });

  const [nonProfitValues, nonProfitOnHandleChange, nonProfitOnSubmit] = useForm(
    {
      name: "",
      address: "",
      email: "",
    }
  );

  const foundationHandleOnSubmit = (e) => foundationOnSubmit(e, "foundation");

  const nonProfitHandleOnSubmit = (e) => nonProfitOnSubmit(e, "nonProfit");

  const data = getFromLocalStorage(type);

  return (
    <div>
      <SegmentedControl
        name="group-1"
        callback={handleSetType}
        defaultIndex={0}
        controlRef={useRef()}
        segments={[
          {
            label: "Foundation",
            value: "foundation",
            ref: useRef(),
          },
          {
            label: "Non-Profit",
            value: "nonProfit",
            ref: useRef(),
          },
        ]}
      />
      <div className="forms">
        <div className="left-form">
          Create New
          {type === "foundation" ? (
            <FoundationForm
              values={foundationValues}
              onChange={foundationOnHandleChange}
              onSubmit={foundationHandleOnSubmit}
            />
          ) : (
            <NonProfitForm
              values={nonProfitValues}
              onChange={nonProfitOnHandleChange}
              onSubmit={nonProfitHandleOnSubmit}
            />
          )}
        </div>
        <div className="right-form">
          All
          <List data={data} />
        </div>
      </div>
    </div>
  );
};

export default Forms;
