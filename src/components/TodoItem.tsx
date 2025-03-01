import { ITodo } from '../models/todo'

import './TodoItem.css'

export const TodoItem = (props: { todo: ITodo }) => {
  const { todo } = props

  return <li className="todos__group__item">{todo.title}</li>
}
