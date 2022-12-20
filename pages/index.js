import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import BlogItem from '../components/Blog/BlogItem'
import Client from '../components/Client/Client'
import Counter from '../components/Couter/Counter'
import About from '../components/Home/About'
import Hero from '../components/Home/Hero'
import PortfolioModal from '../components/Portfolio/PortfolioModal'
import PortfolioTabs from '../components/Portfolio/PortfolioTabs'
import Services from '../components/services/Services'
import Testimnial from '../components/Testimonial/Testimnial'


export default function Home() {
  const [show, setShow] = useState(false);
  const [portfolioData, setPortfolioData] = useState({});

  useEffect(() => {
    fetch("/assets/data/portfolio.json")
      .then((res) => res.json())
      .then((differnet) => setPortfolioData(differnet));
  }, []);
  
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* hero */}
      <Hero />
      {/* hero */}

      {/* visitor */}
      <Counter />
      {/* visitor */}

      {/* about */}
      <About />
      {/* about */}

      {/* services */}
      <Services />
      {/* services */}

      {/* portfolio */}
      <section className="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h5>Portfolio</h5>
              <h2>Featured Projects</h2>
            </div>
            <PortfolioTabs
              setShow={setShow}
              show={show}
              data={portfolioData.length > 0 && portfolioData?.slice(0, 8)}
            />
            <div className="col-md-12 text-lg-end text-md-center view-all-btn">
              <Link href="/portfolio" className="view-all">
                View All
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Modal --> */}
      <PortfolioModal setShow={setShow} show={show} />
      {/* portfolio */}

      {/* testimonial */}
      <Testimnial />
      {/* testimonial */}

      {/* Client */}
      <Client />
      {/* Client */}

      {/* Blog */}
      <BlogItem item={3} />
      {/* Blog */}
    </>
  )
}
