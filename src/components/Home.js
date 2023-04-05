import { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import About from "./About.js";
import Portfolio from "./Portfolio";
import Contact from "./Contact.js";
// import Resume from './components/resume.js';

function Home() {
  const [pages] = useState([
    {
      name: "about",
    },
    {
      name: "portfolio",
    },
    {
      name: "contact",
    },
    {
      name: "resume",
    },
  ]);

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    // return <Resume />;
  };

  const [currentPage, setCurrentPage] = useState("About");

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>{renderPage()}</main>

      <Footer />
    </div>
  );
}

export default Home;
