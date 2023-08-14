import React, { useState } from "react";
import "../App.css";

export default function () {
  const [postData, setPostData] = useState([]);
  const fetchPost = async () => {
    const postData = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData = await postData.json();
    setPostData(jsonData);
  };
  return (
    <div>
      <div className="btnMain">
        <button onClick={fetchPost} className="btnPost">
          All Posts
        </button>
      </div>
      <ol>
        {postData.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ol>
    </div>
  );
}
