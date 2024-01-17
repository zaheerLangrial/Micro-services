import axios from "axios";
import React, { useEffect, useState } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

function PostList() {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setPosts(res.data);
    console.log(res.data);
  };

  return (
    <ul className="grid grid-cols-3 gap-5">
      {Object.values(posts).map((post) => {
        return (
          <li key={post.id} class="w-full p-4">
            <div class="border border-gray-300 p-6 rounded-lg">
              <div className="flex justify-between">
                <h2 class="text-4xl font-medium title-font mb-2">
                  {post.title}
                </h2>
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                  Delete
                </button>
              </div>
              <div className="ml-5">
                <p>Comments</p>
                <CommentList postId={post.id} />
              </div>
              <hr className="mt-3" />
              <AddComment postId={post.id} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default PostList;
