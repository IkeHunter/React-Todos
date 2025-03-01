import { FormEvent, useRef, useState } from 'react'
import { ITodo } from '../models/todo'

import './TodoItem.css'

export const TodoItem = (props: {
  todo: ITodo
  onEditTodo: (id: number, data: Partial<ITodo>) => void
}) => {
  const { todo, onEditTodo } = props
  const [editMode, setEditMode] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputRef.current) return

    onEditTodo(todo.id, { title: inputRef.current.value })
    inputRef.current.value = ''
    setEditMode(false)
  }

  return (
    <li className="todos__item">
      {!editMode && (
        <>
          <span>{todo.title}</span>
          <button
            onClick={() => setEditMode(true)}
            className="todos__item__button"
          >
            Edit
          </button>
        </>
      )}
      {editMode && (
        <form onSubmit={handleSubmit} className="todos__item__form">
          <input type="text" defaultValue={todo.title} ref={inputRef} />
          <button type="submit" className="todos__item__button">
            Done
          </button>
        </form>
      )}
    </li>
  )
}
