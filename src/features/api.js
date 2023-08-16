const LIVE_SERVER = "https://bored-lime-armadillo.cyclic.cloud/api";
const LOCAL_SERVER = "http://localhost:5000/api";

export const url = LIVE_SERVER;

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return headers;
};
