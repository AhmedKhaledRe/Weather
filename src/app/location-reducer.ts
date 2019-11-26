
export const initialState = '';
export const SET_LOCATION = 'SET_LOCATION';

//if location not insert in top-bar-componnt input-text state=initalstate
//else state=SET_LOCATION and check for location(payload)

export function locationReducer(state = initialState, action: any) {
    switch (action.type) {
      case SET_LOCATION:
          return action.payload
        default:
            return state;
    }
}



