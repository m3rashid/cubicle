export interface IGetPosts {
  edges: {
    cursor: any;
    node: {
      author: {
        bio: string;
        name: string;
        id: string;
        photo: {
          url: string;
        };
      };
      createdAt: string;
      slug: string;
      title: string;
      excerpt: string;
      featuredImage: {
        url: string;
      };
      categories: {
        name: string;
        slug: string;
      };
    }[];
  };
}

export interface IAuthor {
  bio: string;
  name: string;
  id: string;
  photo: {
    url: string;
  };
}

export interface ICategory {
  name: string;
  slug: string;
}

export interface IPost {
  author: IAuthor;
  createdAt: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: {
    url: string;
  };
  categories: ICategory[];
}

export interface SinglePost extends IPost {
  node: IPost;
}
