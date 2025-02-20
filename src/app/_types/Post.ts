import { Category } from "./Category";
import { CoverImage } from "./CoverImage";

export type Post = {
  id: string;
  title: string;
  content: string;
  coverImage: {
    url: string;
    width: number;
    height: number;
  };
  createdAt: string;
  categories: {
    id: string;
    name: string;
  }[];
};
