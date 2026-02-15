import { createTodo } from "@/actions/todo-actions";
import { createTodoSchema } from "@/validations/todo";

export function useTodos(){
    const setTodos = useTodos((state)=>state.setTodos)
}