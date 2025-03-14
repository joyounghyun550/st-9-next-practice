"use client";

import Image from "next/image";
import { Todos } from "../todolist/page";
import { useRouter } from "next/navigation";

function TodoItem({ todo }: { todo: Todos }) {
  const router = useRouter();
  return (
    <li
      key={todo.id}
      style={{
        border: "1px solid black",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>{todo.title}</h3>
      <Image
        src={`${todo.imgPath}?random=${Math.random()}`}
        alt="투두 이미지"
        width={50}
        height={50}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={() => router.push(`/todolist/${todo.id}`)}>
          내용보기
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
