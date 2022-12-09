// eslint-disable-next-line react/prop-types
function Blog({ index, title, content }) {
  return (
    <div key={index}>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}
export default Blog;
