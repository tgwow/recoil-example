import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../../recoil/todoList/atom';

const TodoListFilters = () => {
	const [filter, setFilter] = useRecoilState(todoListFilterState)

	const updateFilter = ({ target: { value } }) => {
		setFilter(value)
	}
	return (
		<>
			Filter:
			<select value={filter} onChange={updateFilter}>
				<option value='all'>All</option>
				<option value='completed'>Completed</option>
				<option value='uncompleted'>Uncompleted</option>
			</select>
		</>
	)
}

export default TodoListFilters
