import React from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export type Todos = {
  id?: string;
  title: string;
  contents: string;
  isCompleted?: boolean;
  imgPath: string;
  createdAt: number;
};

const Todolist = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2 className="blog-main-title">서버통신 투두리스트 by useState</h2>
      <div className="description-text">
        <p>
          Next.js에서 CSR은 마운트 시점까지의 데이터는 미리 프리렌더링해두고,
          사용자 요청에 따라 데이터를 가져와서 페이지를 렌더링하는 방식입니다.
        </p>
        <p>
          CSR 페이지는 사용자와의 인터랙션이 있는 페이지에 적절한 렌더링
          방식입니다.
        </p>
      </div>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Todolist;
