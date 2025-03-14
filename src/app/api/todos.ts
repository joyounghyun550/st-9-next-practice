import { Todo } from "../todolist/[id]/client.page";

export const getDetail = async ({
  queryKey,
}: {
  queryKey: string[];
}): Promise<Todo> => {
  console.log(queryKey);
  const [, id] = queryKey;

  const response = await fetch(`http://localhost:4000/todos/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch a detail todo ${id}`);
  }
  return await response.json();
};
