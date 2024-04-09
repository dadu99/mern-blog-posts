import Post from "../Post";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        //console.log("posts =>", posts);

        setPosts(posts);
      });
    });
  }, []);

  const headingDay = {
    color: "#37424c",
    fontSize: "2xl",
    textAlign: "center",
    mt: "16px",
  };
  return (
    <>
      <h1 style={headingDay}>Have a nice day! </h1>
      {posts.length > 0 &&
        posts.map((post) => <Post key={post._id} {...post} />)}
    </>
  );
}
