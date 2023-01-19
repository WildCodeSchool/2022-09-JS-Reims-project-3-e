import React, { useEffect } from "react";

import "./NewsFeed.css";

import CommunicationPage from "./CommunicationPage/CommunicationPage";
import CreatePDC from "./CreatePDC/CreatePDC";

function NewsFeed() {
  const [articles, setArticles] = React.useState([]);
  const filteredData = articles.map((data) => {
    return <CommunicationPage title={data.title} content={data.content} />;
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/communication-plans`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setArticles(data);
    };
    fetchData();
  }, []);

  const submitHandler = (title, content) => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/communication-plans`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });
    setArticles((prevArticles) => {
      return [
        ...prevArticles,
        {
          title,
          content,
        },
      ];
    });
  };

  return (
    <div>
      <CreatePDC onSave={submitHandler} />
      {filteredData}
    </div>
  );
}

export default NewsFeed;
