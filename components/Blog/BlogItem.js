import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const BlogItem = ({ item }) => {
  const [blogdata, setBlogdata] = useState({});
  const router = useRouter();
  const link = router.asPath;

  useEffect(() => {
    fetch("/assets/Data/blog.json")
      .then((res) => res.json())
      .then((differnet) => setBlogdata(differnet));
  }, []);

  return (
    <>
      <section className="blogs">
        <div className="container">
          <div className="row">
            {link === "/" && (
              <div className="col-md-12 text-center">
                <h5>Blogs</h5>
                <h2>Latest Updates</h2>
              </div>
            )}
            {blogdata.length > 0 &&
              blogdata.slice(0, item).map((item) => (
                <div key={item.id} className="col-lg-4 col-md-6 mb-md-3">
                  <Link href={`/blog/${item.slug}/${item.id}`}>
                    <div className="slider_items">
                      <Image
                        className="img-fluid"
                        src={`/assets/images/blog/${item.img}.webp`}
                        alt=""
                        width={416}
                        height={233}
                      />
                      <div className="content">
                        <nav aria-label="breadcrumb">
                          <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                              <Link href="#">{item.published_by}</Link>
                            </li>
                            <li className="breadcrumb-item">
                              <Link href="#">{item.comment_category}</Link>
                            </li>
                            <li className="breadcrumb-item" aria-current="page">
                              <Link href="#">
                                {item.comment.length} comments
                              </Link>
                            </li>
                          </ol>
                        </nav>
                        <Link href={`/blog/${item.slug}/${item.id}`}>
                          <h4>
                            {item.title.slice(0, 29)}
                            {item.title.length > 29 && "..."}
                          </h4>
                          <p>{item.desc.slice(0, 118)}</p>
                        </Link>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogItem;
