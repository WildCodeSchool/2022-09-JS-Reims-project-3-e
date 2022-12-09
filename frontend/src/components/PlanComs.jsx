import { useEffect, useState } from "react";
import Blog from "./Blog";

function PlanComs() {
  const [planComs, setPlanComs] = useState([]);
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/articles`
    )
      .then((response) => response.json())
      .then((response) => setPlanComs(response));
  }, []);
  return (
    <div>
      {planComs.map((planCom, index) => {
        return (
          <Blog title={planCom.title} content={planCom.content} index={index} />
        );
      })}
    </div>
  );
}
export default PlanComs;
