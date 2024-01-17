import axios from "axios";
import React from "react";

function AddComment({ postId }) {
  const handleForm = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      `http://localhost:4001/posts/${postId}/comments`,
      { content: e.target.content.value }
    );
    e.target.content.value = ''
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Add Comment
          </label>
          <input
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
            placeholder="Add Comment here..."
            name="content"
          />
        </div>
        <button
          type="submit"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default AddComment;
