export type Post = {
  id: string;
  title: string;
  content: string;
  coverImage: {
    url: string | null;
    width: number;
    height: number;
  };
  createdAt: string;
  starredAt: string | null;
  categories: {
    id: string;
    name: string;
  }[];
};
