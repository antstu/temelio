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
