import { useState, useEffect, useContext } from "react";
import Groups from "../../components/Groups/Groups";
import CommunicationPage from "../../components/CommunicationPage/CommunicationPage";
import CreatePDC from "../../components/CreatePDC/CreatePDC";
import MembersSection from "../../components/MembersSection/MembersSection";
import FirstSteps from "../../components/FirstSteps/FirstSteps";
import Activity from "../../components/Activity/Activity";
import { UserContext } from "../../store/user-context";

import classes from "./Main.module.css";

function Main() {
  const [articles, setArticles] = useState([]);
  const { id, firstname, lastname, city } = useContext(UserContext);

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
      />
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
