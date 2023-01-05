import "./Comment.css";
import submit from "../assets/submit.png";

function Comment() {
  return (
    <div className="comments">
      <input
        className="textcomment"
        forHtml="textcomment"
        type="text"
        size="40"
        placeholder="Commenter"
      />
      <button type="submit" className="submit">
        <img className="imgsubmit" src={submit} alt="imgsubmit" />
      </button>
    </div>
  );
}
export default Comment;
