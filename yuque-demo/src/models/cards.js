export default {
	//一个基本的 dva model 最少具备两个成员：namespace 和 state。
	//namespace 来作为一个 model 的唯一标识，state 中就是该 model 管理的数据。
	namespace: 'cards',
	state: {
		data3: [
			{
				id: 1,
				setup: 'Did you hear about the two silk worms in a race?',
				punchline: 'It ended in a tie',
			},
			{
				id: 3,
				setup: 'What happens to a frog\'s car when it breaks down?',
				punchline: 'It gets toad away',
			}],
		data4: [
			{
				id: 1,
				setup: 'Did you hear about the two silk worms in a race?',
				punchline: 'It ended in a tie',
			},
			{
				id: 3,
				setup: 'What happens to a frog\'s car when it breaks down?',
				punchline: 'It gets toad away',
			}],
		counter: 100,
	},
	reducers: {
		addNewCard(state, { payload: newCard }) {
			const nextCounter = state.counter + 1;
			//console.log(payload)
			const newCardWithId = { ...newCard, id: nextCounter };
			const nextData = state.data4.concat(newCardWithId);
			return { //返回值作为新的
				data3: state.data3,
				data4: nextData,
				counter: nextCounter,
			};
		}
	},
	/**
	 * reducer 干的事情和 React 中 setState(prevState => { ... }) 很像，
	 * 都要返回一个新构造的对象，但区别是：reducer 的返回值会 整个取代 (Replace) 
	 * 老的 state，而 setState 中回调函数的返回值是会 融合(Merge) 到老的 state 中去。
	 *  */
};