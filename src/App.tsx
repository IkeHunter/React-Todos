import { useState } from 'react'
import './App.css'
import { TodoGroup } from './components/TodoGroup'
import { ITodo } from './models/todo'
import { ITodoGroup } from './models/todoModel'

const initialTodoGroups: ITodoGroup[] = [
  {
    id: 0,
    title: 'Group 1',
    todos: [
      { id: 0, title: 'Test 1' },
      { id: 1, title: 'Test 2' },
      { id: 2, title: 'Test 3' },
    ],
  },
  {
    id: 1,
    title: 'Group 2',
    todos: [{ id: 10, title: 'Test 2' }],
  },
  {
    id: 2,
    title: 'Group 3',
    todos: [{ id: 20, title: 'Test 3' }],
  },
]

function App() {
  const [todoGroups, setTodoGroups] = useState(initialTodoGroups)

  const handleAddTodo = (groupId: number, todo: ITodo) => {
    setTodoGroups((currentGroups) =>
      currentGroups.map((group) => {
        if (group.id !== groupId) {
          return group
        } else {
          return { ...group, todos: [...group.todos, todo] }
        }
      }),
    )
  }

  const handleEditTodo = (todoId: number, data: Partial<ITodo>) => {
    setTodoGroups((currentGroups) => {
      const group = currentGroups.find((group) =>
        group.todos.some((todo) => todo.id === todoId),
      )

      if (!group) return currentGroups

      const updatedGroup: ITodoGroup = {
        ...group, // Keep existing group fields
        todos: group.todos.map((todo) => {
          if (todo.id !== todoId) {
            return todo // Ignore irrelevant todos
          }

          // Return updated todo
          return {
            ...todo,
            ...data,
          }
        }),
      }

      return [
        ...currentGroups.filter(
          (currentGroup) => currentGroup.id !== updatedGroup.id,
        ),
        updatedGroup,
      ].sort((a, b) => a.id - b.id)
    })
  }

  return (
    <div className="todos">
      {todoGroups.map((group) => (
        <TodoGroup
          group={group}
          onAddTodo={handleAddTodo}
          onEditTodo={handleEditTodo}
        />
      ))}
    </div>
  )
}

export default App
