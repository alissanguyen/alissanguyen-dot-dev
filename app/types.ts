import { Post } from "@prisma/client";

export type Tech = {
  name: string;
  icon: string;
};
export enum AlertType {
  ERROR = "error",
  SUCCESS = "success",
  CONFIRMED = "confirmed"
}

export interface BlogIndexLoaderData {
  posts: Post[];
}

export type PostCardData = {
  id: string;
  thumbnailImage: string;
  excerpt: string | null;
  title: string;
  topics: string | null;
  createdAt: Date;
  updatedAt: Date;
};

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
  name: string;
  subject: string;
  message: string;
  email: string;
};
