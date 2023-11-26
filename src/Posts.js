import React, { useState, useEffect } from "react";
import { AllPosts } from "./Service"; // Import your API functions

function Posts() {
  const [data, setData] = useState(null);

  // Fetch data when the component mounts
  async function fetchData() {
    try {
      const result = await AllPosts();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // useEffect block
  useEffect(() => {
    fetchData();
  }, []);

  return (
<div>
    {data ? (
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Title</th>
            <th>Post</th>
          </tr>
        </thead>
        <tbody>
          {data.map((Post, index) => (
            <tr key={Post.id}>
              <td>{Post.userId}</td>
              <td>{Post.title}</td>
              <td>{Post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  );
}

export default Posts;
