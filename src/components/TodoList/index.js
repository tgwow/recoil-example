import { useRecoilValue } from 'recoil';
import TodoItem from '../TodoItem';
import TodoItemCreator from '../TodoItemCreator';
import {filteredTodoListState  } from '../../recoil/';
import TodoListFilters from '../TodoFilter';
import TodoListStats from '../TodoStats';

const TodoList = () => {
	// Esse hook é utilizado para retornar um atom/selector readonly
	// Um selector só será writable se ele tiver um prop (set) definida
	const filteredTodoList = useRecoilValue(filteredTodoListState)
	return (
		<>
			<TodoListStats/>
			<TodoListFilters/>
			<TodoItemCreator/>
			{filteredTodoList.map((todoItem) => (
				<TodoItem key={todoItem.id} item={todoItem} />
			))}
		</>
	)
}

export default TodoList
