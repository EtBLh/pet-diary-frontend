import React, { useReducer } from 'react'
import { useEffect } from 'react';
import { useStorageState } from './useStorageState';
import { CalendarUtils } from 'react-native-calendars';

export enum DispatchType {
  CHANGE_DIARY_DATE = 'CDD'
}

export interface TStoreState {
  diaryDate: string
}

const initialState: TStoreState = {
  diaryDate: CalendarUtils.getCalendarDateString(new Date())
}

const StoreContext = React.createContext<{
  state: TStoreState,
  dispatch: React.Dispatch<any>
}>({
  state: initialState,
  dispatch: () => null
});

// This hook can be used to access the user info.
export function useStore() {
  const value = React.useContext(StoreContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useStore must be wrapped in a <StoreProvider />');
    }
  }

  return value;
}

const reducer = (state: TStoreState, action: { type: DispatchType, payload: any }) => {
  switch (action.type) {
    case DispatchType.CHANGE_DIARY_DATE:
      return {
        ...state,
        diaryDate: action.payload
      }
    default:
      return state;
  }
}

export function StoreProvider(props: React.PropsWithChildren) {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider
      value={{
        state, dispatch
      }}>
      {props.children}
    </StoreContext.Provider>
  );
}
