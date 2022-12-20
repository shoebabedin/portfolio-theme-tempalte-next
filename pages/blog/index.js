import Head from "next/head";
import React from "react";
import HeadAbout from "../../components/about/HeadAbout";
import BlogItem from "../../components/Blog/BlogItem";

const blog = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <HeadAbout title={"Latest News"} breadcum={"My Blog"} />
      <BlogItem />
    </>
  );
};

export default blog;
