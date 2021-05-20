import axios from "axios";

const backEndUrl = process.env.REACT_APP_BACKEND_URL;

export const addUser = async (data: FormData) => {
  await axios.post(`${backEndUrl}/auth/register`, data);
};
export const userLogin = async (data: FormData) => {
  var received: any = null;
  await axios.post(`${backEndUrl}/auth/login`, data).then((res) => {
    received = res.data;
  });
  return received;
};
export const getUser = async () => {
  var received: any = null;
  await axios
    .get(`${backEndUrl}/auth/user-profile`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt-token")}` },
    })
    .then((res) => {
      received = res.data;
    });
  return received;
};

export const getUserBooks = async (id: number) => {
  var received: any = null;
  await axios
    .get(`${backEndUrl}/auth/users/${id}/books`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt-token")}` },
    })
    .then((res) => {
      received = res.data;
    });
  return received;
};
