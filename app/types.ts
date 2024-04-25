export type Tech = {
  name: string;
  icon: string;
};
export enum AlertType {
  ERROR = "error",
  SUCCESS = "success",
  CONFIRMED = "confirmed"
}

export enum SupportedTheme {
  DARK = "dark",
  LIGHT = "light"
}

export enum ContactFormFields {
  email = "email",
  name = "name",
  subject = "subject",
  message = "message"
}

export type Message = {
  message: string;
  email: string;
  name: string
};


export enum SubscribeFormField {
  email = "email"
}