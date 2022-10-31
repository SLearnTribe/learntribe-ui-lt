export const ExportReducer =
  (actionMap, defaultState) =>
  (state = defaultState, action) => {
    const { type } = action;

    // Clone state
    const clonedState = { ...state };

    // Check if the reducer should handle the current type
    if (type in actionMap) {
      return actionMap[type](clonedState, action.payload);
    }

    // If not type triggers a reducer, return the previous state
    return clonedState;
  };
