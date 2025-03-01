import { ITodoGroup } from '../models/todoModel'
import { TodoItem } from './TodoItem'

export const TodoGroup = (props: { group: ITodoGroup }) => {
  const { group } = props

  return (
    <div key={group.id} className="todos__group">
      <h2>{group.title}</h2>
      <ul className="todos__group__list">
        {group.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  )
}
