import { ITodoGroup } from '../models/todoModel'
import { TodoItem } from './TodoItem'

import { FormEvent, useRef } from 'react'
import { ITodo } from '../models/todo'
import './TodoGroup.css'

export const TodoGroup = (props: {
  group: ITodoGroup
  onAddTodo: (groupId: number, item: ITodo) => void
  onEditTodo: (todoId: number, data: Partial<ITodo>) => void
}) => {
  const { group, onAddTodo, onEditTodo } = props
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // Prevent page from reloading
    e.preventDefault()
    // Check if the input exists
    if (!inputRef.current) return

    // Add item to group
    onAddTodo(group.id, {
      id: Date.now(),
      title: inputRef.current.value,
    })

    // Reset form
    inputRef.current.value = ''
  }

  return (
    <div key={group.id} className="todos__group">
      <h2>{group.title}</h2>
      <ul className="todos__group__list">
        {group.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onEditTodo={onEditTodo} />
        ))}
        <form onSubmit={handleSubmit} className="todos__group__form">
          <input
            type="text"
            id={`new-task-${group.id}`}
            ref={inputRef}
            className="todos__item"
            placeholder="Enter a title"
          />
        </form>
      </ul>
    </div>
  )
}
