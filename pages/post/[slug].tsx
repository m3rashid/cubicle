import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
  Loader,
} from "../../components";
import { getPosts, getPostDetails } from "../../services";
import { AdjacentPosts } from "../../sections";
import { IPost } from "../../services/types";

const PostDetails = ({ post }: { post: IPost }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  const keywords = post.title.split(" ");
  const result = keywords.filter((word: string) => word.length > 4);
  return (
    <>
      <div className="container mx-auto px-3 sm:px-6 lg:px-12 mb-8">
        <Head>
          <title>{post.title} | Cubicle</title>
          <meta name="description" content={post.excerpt} />
          <meta name="keywords" content={result.join(", ")} />

          <meta name="og:title" content={post.title + " | Cubicle"} />
          <meta name="og:description" content={post.excerpt} />
          <meta
            name="og:url"
            content={"https://cubicle.vercel.app/post/" + post.slug}
          />
          <meta name="twitter:title" content={post.title + " | Cubicle"} />
          <meta name="twitter:description" content={post.excerpt} />

          <meta name="image" content={post.featuredImage.url} />
          <meta name="og:image" content={post.featuredImage.url} />
          <meta name="twitter:image" content={post.featuredImage.url} />
        </Head>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            <Author author={post.author} />
            <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget
                slug={post.slug}
                categories={post.categories.map((category) => category.slug)}
              />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }: { params: { slug: string } }) {
  const data = await getPostDetails(params.slug);
  return {
    props: { post: data },
    revalidate: 20,
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }: { node: { slug: string } }) => ({
      params: { slug },
    })),
    fallback: true,
  };
}
