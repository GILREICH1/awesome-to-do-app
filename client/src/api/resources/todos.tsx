import { CategoryId, Category } from "../";

const server_url = "http://localhost:3001/todos";

export type TodoId = string;
export type TodoContent = string;
export type TodoCompleted = boolean;
export enum TodoPriorityEnum {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "High",
}
export interface Todo {
  id: TodoId;
  content: TodoContent;
  completed: TodoCompleted;
  priority?: TodoPriorityEnum;
  categoriesIds?: CategoryId[];
}
export interface TodoCreationProps {
  content: TodoContent;
  priority?: TodoPriorityEnum;
  categoriesIds?: CategoryId[];
}
export type TodoEditableProps = Partial<TodoCreationProps> & {
  completed: TodoCompleted;
};
export type TodoWithChildEntities = Todo & { categories?: Category[] };

export async function fetchTodos(): Promise<Todo[]> {
  const JSONtodos = await fetch(`${server_url}`);
  const response = await JSONtodos.json();
  return response;
}

export async function addTodo(todo: TodoCreationProps): Promise<TodoId> {
  const JSONtodoID = await fetch(`${server_url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const todoID = await JSONtodoID.json();
  return todoID;
}

export async function toggleTodo(id: TodoId): Promise<void> {
  const JSONtodoID = await fetch(`${server_url}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ _id: id }),
  });
  const todoID = await JSONtodoID.json();
  return todoID;
}

export async function removeTodo(id: TodoId): Promise<void> {
  const JSONtodoID = await fetch(`${server_url}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ _id: id }),
  });
  const todoID = await JSONtodoID.json();
  return todoID;
}

// NOT IN USE
// export async function updateTodo(
//   id: TodoId,
//   changes: TodoEditableProps
// ): Promise<void> {
//   await sleep(200);
// }
