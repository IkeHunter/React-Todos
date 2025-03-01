import './App.css'

interface Todo {
  id: number
  title: string
  description: string
  done?: boolean
}

interface TodoGroup {
  id: number
  title: string
  todos: Todo[]
}

const todoGroups: TodoGroup[] = [
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
  return (
    <div className="todos">
      {todoGroups.map((group) => (
        <div key={group.id} className="todos__group">
          <h2>{group.title}</h2>
          <ul className="todos__group__list">
            {group.todos.map((todo) => (
              <li key={todo.id} className="todos__group__item">
                {todo.title}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default App
