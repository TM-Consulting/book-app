import axios from "axios";

const backEndUrl = process.env.REACT_APP_BACKEND_URL;

export const addUser = async (data: FormData) => {
  await axios.post(`${backEndUrl}/auth/register`, data);
};
export const userLogin = async (data: FormData) => {
  var received: any = null;
  await axios.post(`${backEndUrl}/auth/login`, data).then((res) => {
    console.log("testtttt", res.data);
    received = res.data;
  });
  return received;
};
