import * as cardsService from '../../service/cards'

export default {
    namespace: 'myCards',
    state: {
        cardsList: [],
        statistic: {},
    },
    effects: {
        *queryList({ _ }, { call, put }) {
            const rsp = yield call(cardsService.queryList);
            yield put({ type: 'saveList', payload: { cardsList: rsp.result } });
        },
    },
    reducers: {//名字不能打错 reducers
        saveList(state, { payload: { cardsList } }) {
            return {
                ...state,
                cardsList,
            }
        },
    }
}