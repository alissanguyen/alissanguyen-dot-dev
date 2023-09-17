import { json } from "@remix-run/node";

export interface ContactFormFieldErrors {
  email: ReturnType<typeof validateEmail>;
  message: ReturnType<typeof validateMessage>;
}
// TODO: Implement this when visitor subscribes 
export function validateSubscribeEmail(email: any) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(email);
}

export function validateMessage(message: any) {
  if (typeof message !== "string") {
    return "Your message is not a string.";
  }

  const transformedMsg = message.toLowerCase();

  if (
    transformedMsg.includes(" bot ") ||
    transformedMsg.includes("bot ") ||
    transformedMsg.includes(" money ") ||
    transformedMsg.includes(" rich ") ||
    transformedMsg.includes("crypto") ||
    transformedMsg.includes("robot ") ||
    transformedMsg.includes(" robot ")
  ) {
    return "Your activity is unusual, please try again or contact me through Linkedin.";
  }

  if (message.length < 10) {
    return "Message must be at least 10 characters.";
  }
}

export function validateEmail(email: any) {
  if (typeof email !== "string") {
    return "Your email is not a string.";
  }

  const emailParts = email.split("@");

  if (emailParts.length < 2) {
    return "Invalid email";
  }

  if (!email.includes("@")) {
    return "Invalid email";
  }
}
export function badRequest(data: any): Response {
  return json<ContactFormFieldErrors>(data, { status: 400 });
}

export function handleFormSubmitted(form: FormData, fields: string[]) {
  fields.forEach((field) => {
    form.delete(field);
  });
  return "Successfully clear form values";
}

export function handleEmailSend(statusCode: string) {
  if (statusCode === "400") {
    return "Bad request";
  }
  if (statusCode === "401") {
    return "Require authentication";
  }
  if (statusCode === "403") {
    return "From address doesn't match Verified Sender Identity.";
  }
  if (statusCode === "429") {
    return "Too many requests/Rate limit exceeded";
  }
  if (statusCode === "500") {
    return "Internal server error";
  }
}

export function splitTopicsStringIntoArray(topicsString: string | null) {
  if (topicsString === null) {
    return ["personal"];
  }
  if (topicsString === undefined) {
    return ["undefined"];
  }
  const topics = topicsString.split(",");
  return topics;
}


