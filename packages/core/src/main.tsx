import React from "react";
import ReactDOM from "react-dom";
import ReactSearchBox from "./core";

ReactDOM.render(
  <React.StrictMode>
    <ReactSearchBox
      placeholder="Search for John, Jane or Mary"
      data={[
        {
          key: "john",
          value: "John Doe",
        },
        {
          key: "jane",
          value: "Jane Doe",
        },
        {
          key: "mary",
          value: "Mary Phillips",
        },
        {
          key: "robert",
          value: "Robert",
        },
        {
          key: "karius",
          value: "Karius",
        },
      ]}
      onSelect={(record: any) => console.log(record)}
      onFocus={() => {
        console.log("This function is called when is focussed");
      }}
      onChange={(value) => console.log(value)}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
