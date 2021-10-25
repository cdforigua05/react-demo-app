export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case "delete":
      return state.filter(element => element.id!==action.payload);
    case "toggle":
      return state.map(
        (element) => {
          if (element.id === action.payload){ 
            return {...element, done:!element.done};
          }
          else{
            return element;
          }
        }
      )
    default:
      return state;
  }
};
