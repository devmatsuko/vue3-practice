import {InjectionKey, ref} from 'vue'

type Todo = {
  id: number,
  title: string,
}

const defaultTodos = [{ id: 0, title: 'first'},{ id: 1, title: 'second'}]

export const todos = (() => {
  const todos = ref<Todo[]>(defaultTodos)
  const addTodo = (title: string) => {
    const todo: Todo = {
      id: Math.random(),
      title,
    }
    todos.value.push(todo)
  }

  return { todos, addTodo }
})();

type TodosType = typeof todos
export const todoKey: InjectionKey<TodosType> = Symbol('useTodos')
