import { FormEvent, useContext, useRef, useState } from 'react'
import { ITodo } from '../models/todo'

import { TodoContext } from '../App'
import './TodoItem.css'

export const TodoItem = (props: { todo: ITodo }) => {
  const { todo } = props
  const [editMode, setEditMode] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { editTodo, toggleTodoDone, deleteTodo } = useContext(TodoContext)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputRef.current) return

    editTodo(todo.id, { title: inputRef.current.value })
    inputRef.current.value = ''
    setEditMode(false)
  }

  return (
    <li className={`todos__item${todo.done ? ' todos__item--done' : ''}`}>
      {!editMode && (
        <>
          <input
            type="checkbox"
            name="completed"
            id={todo.id.toString()}
            checked={todo.done ?? false}
            onChange={() => toggleTodoDone(todo.id)}
            className="todos__item__checkbox"
          />
          <span onClick={() => setEditMode(true)} className="todos__item__text">
            {todo.title}
          </span>

          <button
            onClick={() => deleteTodo(todo.id)}
            className="todos__item__button"
          >
            Delete
          </button>
        </>
      )}
      {editMode && (
        <form onSubmit={handleSubmit} className="todos__item__form">
          <input
            type="text"
            defaultValue={todo.title}
            ref={inputRef}
            autoFocus
          />
          <button type="submit" className="todos__item__button">
            Save
          </button>
        </form>
      )}
    </li>
  )
}
