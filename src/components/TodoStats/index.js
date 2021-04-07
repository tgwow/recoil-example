import {  useRecoilValue } from 'recoil';
import { todoListStatsState } from '../../recoil';

const TodoListStats = () => {
	const {
		totalNum,
		totalCompleteNum,
		totalUncompleteNum,
		percentageComplete,
	} = useRecoilValue(todoListStatsState)
	return (
		<>
			Stats:
			<ul>
				<li>Total items: {totalNum}</li>
				<li>Total completed: {totalCompleteNum}</li>
				<li>Total not completed: {totalUncompleteNum}</li>
				<li>Percentage completed: {percentageComplete}</li>
			</ul>
		</>
	)
}

export default TodoListStats
