import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function refreshPage() {
  setTimeout(() => {
    window.location.reload(false);
  }, 500);
  console.log("page to reload");
}

const Header = () => {
  const router = useRouter();

  const [scrollPosition, setPosition] = useState({ scrollY: 0 });

  useEffect(() => {
    function updatePosition() {
      setPosition({ scrollY: window.scrollY });
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <>
      <section
        id="navbar"
        className={`${scrollPosition.scrollY > 300 ? "sticky" : ""}`}
      >
        <nav className="navbar navbar-light">
          <div className="container">
            <Link className="navbar-brand me-auto" href="/">
              <Image
                src="/assets/images/logo/logo.png"
                alt=""
                width={171}
                height={51}
              />
            </Link>

            <Link href="contact" className="lets-chat">
              Let&rsquo;s Chat
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="">
                <svg
                  width="41"
                  height="35"
                  viewBox="0 0 41 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 12.0283H29M12.5 17.2783H29M12.5 22.5283H29"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      router.asPath === "/" ? "active" : ""
                    }`}
                    aria-current="page"
                    href="/"
                    onClick={refreshPage}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      router.asPath === "/about" ? "active" : ""
                    }`}
                    href="/about"
                    onClick={refreshPage}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      router.asPath === "/portfolio" ? "active" : ""
                    }`}
                    href="/portfolio"
                    onClick={refreshPage}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      router.asPath === "/blog" ? "active" : ""
                    }`}
                    href="/blog"
                    onClick={refreshPage}
                  >
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      router.asPath === "/contact" ? "active" : ""
                    }`}
                    href="/contact"
                    onClick={refreshPage}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Header;
