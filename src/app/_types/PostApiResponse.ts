export type PostApiResponse = {
  audioUrl: string;
  id: string;
  title: string;
  content: string;
  coverImageURL: string;
  createdAt: string;
  categories: {
    category: {
      id: string;
      name: string;
    };
  }[];
};
