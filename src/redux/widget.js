// Actions
const LOAD = 'my-app/widgets/LOAD';
const CREATE = 'widget/CREATE';
const UPDATE = 'my-app/widgets/UPDATE';
const REMOVE = 'my-app/widgets/REMOVE';

// 맨 처음에 가지고 있는 값, object로
const initialState = {
    list : ['first', 'second', 'third']
}

// Action Creators 액션생성함수
export function loadWidgets() {
    return { type: LOAD };
}

export function createWidget(widget) {
    console.log(widget)
    return { type: CREATE, widget : widget };
}

export function updateWidget(widget) {
    return { type: UPDATE, widget };
}

export function removeWidget(widget) {
    return { type: REMOVE, widget };
}

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget() {
//     return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }

// Reducer
export default function reducer(state = initialState, action = {}) { // state = {} : 디폴트값
    switch (action.type) {
        case "widget/CREATE" : {
            const new_widget_list = [...state.list, action.widget];
            return {
                list : new_widget_list
            }
        }
        default: return state;
    }
}