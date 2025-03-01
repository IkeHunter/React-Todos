import { useState } from 'react'
import './App.css'
import { TodoGroup } from './components/TodoGroup'
import { ITodoGroup } from './models/todoModel'

const initialTodoGroups: ITodoGroup[] = [
  {
    id: 0,
    title: 'Group 1',
    todos: [
      { id: 0, title: 'Test 1', description: 'Lorem ipsum' },
      { id: 1, title: 'Test 2', description: 'Lorem ipsum' },
      { id: 2, title: 'Test 3', description: 'Lorem ipsum' },
    ],
  },
  {
    id: 1,
    title: 'Group 2',
    todos: [{ id: 1, title: 'Test 2', description: 'Lorem ipsum' }],
  },
  {
    id: 2,
    title: 'Group 3',
    todos: [{ id: 2, title: 'Test 3', description: 'Lorem ipsum' }],
  },
]

function App() {
  const [todoGroups, setTodoGroups] = useState(initialTodoGroups)

  return (
    <div className="todos">
      {todoGroups.map((group) => (
        <TodoGroup group={group} />
      ))}
    </div>
  )
}

export default App
