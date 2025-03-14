"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Todos } from "../todolist/page";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const queryClient = useQueryClient();
  const addMutation = useMutation({
    mutationFn: async (newTodo: Todos) => {
      const response = await fetch("http://localhost:4000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
      if (!response.ok) {
        throw new Error(`Failed to post todo`);
      }
      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleAddTodo = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setTitle("");
    setContents("");
    addMutation.mutate({
      title,
      contents,
      isCompleted: false,
      imgPath: "https://picsum.photos/250/250",
      createdAt: Date.now(),
    });
  };

  return (
    <form className="todo-form" onSubmit={handleAddTodo}>
      <div className="form-group">
        <label htmlFor="title">제목:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="contents">내용:</label>
        <input
          id="contents"
          name="contents"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
          required
          className="form-input"
        />
      </div>
      <button type="submit" className="submit-button">
        추가하기
      </button>
    </form>
  );
}
