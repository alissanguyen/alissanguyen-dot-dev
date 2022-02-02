import { Post } from "@prisma/client";

export interface NavbarLink {
  id: TopLevelRoute;
  friendlyName: string;
}
export interface BurgerLink {
  id: TopLevelRoute;
  friendlyName: string;
  icon: Object;
}
export type Tech = {
  name: string;
  icon: string;
};
export enum TopLevelRoute {
  HOME = "",
  BLOG = "blog",
  HIREME = "hireme",
  CONTACT = "contact",
}
export enum AlertType {
  ERROR = "error",
  SUCCESS = "success",
  CONFIRMED = "confirmed",
}

export interface BlogIndexLoaderData {
  posts: Post[];
}

export interface LikeData {
  count: number;
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
  LIGHT = "light",
}

export enum CursorState {
  DEFAULT = "default",
  ACTIVE = "active",
}

