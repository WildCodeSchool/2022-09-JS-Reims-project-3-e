import { useState, useEffect, useContext } from "react";
import Groups from "../components/Groups/Groups";
import CommunicationPage from "../components/CommunicationPage/CommunicationPage";
import CreatePDC from "../components/CreatePDC/CreatePDC";
import MembersSection from "../components/Members/Members";
import FirstSteps from "../components/FirstSteps/FirstSteps";
import Activity from "../components/Activity/Activity";
import { UserContext } from "../store/user-context";
import Comments from "../components/Comments/Comments";

import classes from "./Main.module.css";

function Main() {
  const [articles, setArticles] = useState([]);

  const { id, firstname, lastname, city } = useContext(UserContext);

  const submitCommentHandler = async (comment, articleId) => {
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/comments/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment,
        author_id: id,
        communication_plan_id: articleId,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setArticles((prevState) => {
            const { comments } = prevState[articleId - 1];
            const newComments = [
              ...comments,
              {
                id: Math.random() * 1001212,
                author: { city, firstname, lastname },
                comment,
                author_id: id,
                communication_plan_id: articleId,
              },
            ];
            const newArticles = [...prevState];
            newArticles[articleId - 1].comments = newComments;
            return newArticles;
          });
        }
      })
      .catch((error) => console.error(error));
  };

  const filteredData = articles.map((data) => {
    return (
      <CommunicationPage
        id={data.id}
        key={data.id}
        title={data.title}
        content={data.content}
        firstname={data.firstname}
        lastname={data.lastname}
        avatar={data.avatar}
        city={data.city}
        image={data.image}
        onSubmit={submitCommentHandler}
      >
        {data.comments
          .map((comment) => {
            return (
              <Comments
                className={classes["comment-section"]}
                key={comment.id}
                comment={comment}
              />
            );
          })
          .filter(
            (comment) => comment.props.comment.communication_plan_id === data.id
          )}
      </CommunicationPage>
    );
  });

  const filteredDataByOrder = filteredData.reverse();

  const submitHandler = (title, content) => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/communication-plans`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        fk_author_id: id,
      }),
    });
    setArticles((prevArticles) => {
      return [
        ...prevArticles,
        {
          id: articles.length + 1,
          title,
          content,
          fk_author_id: id,
          firstname,
          lastname,
          city,
          comments: [],
        },
      ];
    });
  };

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

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/comments`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.warn(data);
    };
    fetchData();
  }, []);

  return (
    <div className={classes["main-container"]}>
      <div className={classes["col-1"]}>
        <Groups />
        <Activity />
      </div>
      <div className={classes["col-2"]}>
        <CreatePDC onSave={submitHandler} />
        {filteredDataByOrder}
      </div>
      <div className={classes["col-3"]}>
        <FirstSteps />
        <MembersSection />
      </div>
    </div>
  );
}

export default Main;
