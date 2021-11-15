import axios, { AxiosRequestConfig } from "axios";
import ContactEntity from "../models/contactEntity";

async function sendEmail(payload: ContactEntity): Promise<Boolean> {
  const requestInfo: AxiosRequestConfig = {
    data: payload.toJSON(),
    baseURL:
      process.env.NODE_ENV !== "production"
        ? "https://dev.italianscodeitbetter.com/api/landing"
        : "https://api.italianscodeitbetter.com/landing",
    url: "/contact-us",
    method: "POST",
  };
  console.log("process env: ", process.env);
  const response = await axios.request(requestInfo);
  if (response.status != 200) {
    return false;
  } else {
    return true;
  }
}

export { sendEmail };
