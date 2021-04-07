import { todoListFilterState, todoListState } from './atom'
import { selector } from 'recoil';

export const filteredTodoListState = selector({
	key: 'filteredTodoListState',
	get: ({ get }) => {
		const filter = get(todoListFilterState)
		const list = get(todoListState)

		switch (filter) {
			case 'completed':
				return list.filter(( item ) => item.isComplete)
			case 'uncompleted':
				return list.filter(( item ) => !item.isComplete)
			default:
				return list
		}
	}
})
export const todoListStatsState = selector({
	key: 'todoListStatsState',
	get: ({ get }) => {
		const totalNum = get(todoListState).length
		const totalCompleteNum = get(todoListState).filter((item) => item.isComplete).length
		const totalUncompleteNum = totalNum - totalCompleteNum
		const percentageComplete = totalNum === 0 ? 0 : totalCompleteNum / totalNum * 100
		return {
			totalNum,
			totalCompleteNum,
			totalUncompleteNum,
			percentageComplete
		}
	}
})
