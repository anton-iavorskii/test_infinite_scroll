import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PassengerCard from "../../components/PassengerCard";

import "./index.css";

const MainPage = () => {
  const [passengers, setPassengers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [fething, setFetching] = useState(true);
  const [totalPages, setTotaPages] = useState(0);
  const [error, setError] = useState(false);

  const getPassengers = async () => {
    try {
      const response = await fetch("http://localhost:3100", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ currentPage }),
      });

      const dataResponse = await response.json();
      const { totalPages, data } = dataResponse;

      setPassengers([...passengers, ...data]);
      setCurrentPage((prev) => prev + 1);
      setTotaPages(totalPages);
      setFetching(false);
    } catch (error) {
      console.log("error fetch getPassengers");
      setError(true);
    }
  };

  useEffect(() => {
    if (fething && totalPages >= currentPage) {
      getPassengers();
    }
  }, [fething]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => document.removeEventListener("scroll", scrollHandler);
  }, []);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  return (
    <div className="MainPage">
      <Header />
      {error && <div className="error">Ошибка соединения...</div>}
      <PassengerCard passengers={passengers} />
      <Footer />
    </div>
  );
};

export default MainPage;
