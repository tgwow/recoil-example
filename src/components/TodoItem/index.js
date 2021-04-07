import { useRecoilState } from 'recoil';
import { todoListState } from '../../recoil';

const replaceItemAtIndex = (arr, index, newItem) => {
	return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)]
}

const removeItemAtIndex = (arr, index) => {
	return [...arr.slice(0, index), ...arr.slice(index + 1)]
}

const TodoItem = ({ item }) => {
	const [todoList, setTodoList] = useRecoilState(todoListState)
	const index = todoList.findIndex((listItem) => listItem === item)

	const editItemText = ({target: {value}}) => {
		const newList = replaceItemAtIndex(todoList, index, {
			...item,
			text: value
		})

		setTodoList(newList)
	}

	const deleteItem = () => {
		const newList = removeItemAtIndex(todoList, index)

		setTodoList(newList)
	}

	const toggleItemCompletion = () => {
		const newList = replaceItemAtIndex(todoList, index, {
			...item,
			isComplete: !item.isComplete
		})

		setTodoList(newList)
	}
	return (
		<div>
			<input value={item.text} onChange={editItemText} />
			<input
				type='checkbox'
				checked={item.isComplete}
				onChange={toggleItemCompletion}
			/>
			<button onClick={deleteItem}>X</button>
		</div>
	)
}

export default TodoItem
