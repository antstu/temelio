String.prototype.interpolate = function (params) {
  const names = Object.keys(params);
  const vals = Object.values(params);
  return new Function(...names, `return \`${this}\`;`)(...vals);
};

export const saveToLocalStorage = (type, data) => {
  const localData = JSON.parse(localStorage.getItem(type));
  if (localData) {
    localStorage.setItem(type, JSON.stringify([...localData, data]));
  } else {
    localStorage.setItem(type, JSON.stringify([data]));
  }
};

export const getFromLocalStorage = (type) => {
  const localData = JSON.parse(localStorage.getItem(type));
  if (localData) {
    return localData;
  } else {
    return [];
  }
};

export const sendEmails = (foundations, nonProfits, text) => {
  for (let foundation of foundations) {
    for (let nonProfit of nonProfits) {
      const emails = getFromLocalStorage("emails");
      console.log(emails);

      console.log({ name: nonProfit.name, address: nonProfit.address });

      if (emails.length > 0) {
        localStorage.setItem(
          "emails",
          JSON.stringify([
            ...emails,
            {
              from: foundation,
              to: nonProfit,
              message: text.interpolate({
                name: nonProfit.name,
                address: nonProfit.address,
              }),
            },
          ])
        );
      } else {
        localStorage.setItem(
          "emails",
          JSON.stringify([{ name: nonProfit.name, address: nonProfit.address }])
        );
      }
    }
  }
};
