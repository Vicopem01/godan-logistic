import jwt from "jsonwebtoken";
import { Navigate } from "react-router";

export const phoneNumberCheck = (value) => {
  const regex = /^[0-9]{11}/;
  return regex.test(value);
};

export const emailCheck = (value) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(value);
};

export const playSound = (url) => {
  const audio = new Audio(url);
  audio.play();
};

export const createAutoLogout = () => {
  const token = localStorage.getItem("token");

  if (!token) return false;
  else {
    const data = jwt.decode(token);
    if (!data) return false;

    const newDate = new Date(data.exp) * 1000;

    if (newDate < new Date().getTime()) return false;
    const newTime = newDate - new Date().getTime();
    return {
      newTime,
      data,
    };
  }
};


export const ProtectedRoute = ({ children }) => {
  const validToken = createAutoLogout();
  return validToken ? children : <Navigate replace to="/login" />;
};