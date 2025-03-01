import { ITodo } from './todo'

export interface ITodoGroup {
  id: number
  title: string
  todos: ITodo[]
}
