import React from "react";

const List = ({ data }) => {
  console.log("this is list daata");
  console.log(data);
  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map((str, idx) => (
              <th key={str + idx}>{str}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((item, idx) => (
              <tr key={item.email + idx}>
                {headers.map((header, idx) => (
                  <td key={header + idx}>{item[header]}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
