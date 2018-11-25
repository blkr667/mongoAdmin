export default function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return { ...state, initialText: 'changed in the browser!' };
    case 'AUTHENTICATE':
        return { ...state, authenticated: true, loggedUser: action.username };
    case 'LOG_OUT':
        return { ...state, authenticated: false, loggedUser: null };
    case 'SET_ACTIVE_TAB':
        return { ...state, loggedUser: action.selectedTab };
    default:
      return { ...state };
  }
}
