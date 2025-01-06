const setUserData = (data) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("docData", JSON.stringify(data));
  }
};

const getUserData = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("docData");
    return data ? JSON.parse(data) : null;
  }
  return null;
};

export { setUserData, getUserData };
