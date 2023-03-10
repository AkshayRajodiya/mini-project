import { createStore } from 'redux'

/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object. It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */
function thaliReducer(state = { chapati: { count: 0, image: '', displayName: '', total: 0 }, curd: { count: 0, image: '', displayName: '', total: 0 }, dal: { count: 0, image: '', displayName: '', total: 0 }, paneerDish: { count: 0, image: '', displayName: '', total: 0 }, pickel: { count: 0, image: '', displayName: '', total: 0 }, sweet: { count: 0, image: '', displayName: '', total: 0 } }, action) {
  switch (action.type) {
    case 'chapati':
      return { ...state, chapati: action.payload };
    case 'curd':
      return { ...state, curd: action.payload };
    case 'dal':
      return { ...state, dal: action.payload };
    case 'paneerDish':
      return { ...state, paneerDish: action.payload };
    case 'pickel':
      return { ...state, pickel: action.payload };
    case 'sweet':
      return { ...state, sweet: action.payload };
    default:
      return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(thaliReducer)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

store.subscribe(() => console.log(''))

export default store;