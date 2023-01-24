import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../UI/Card";

import classes from "./ArticlePage.module.css";

function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:8080/communication-plans/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setArticle(data);
    };
    fetchData();
  }, [id]);
  return (
    <Card classNames={classes["article-page"]}>
      <h1>{article?.title}</h1>
    </Card>
  );
}

export default ArticlePage;
