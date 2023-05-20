export interface Response {
  urls: {
    regular: string;
  };
  user: {
    name: string;
  };
  created_at: string;
  likes: number;
  liked_by_user: boolean;
  alt_description: string;
  id: number;
}
