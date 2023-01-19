import { store } from '../../app/store';
import reducer, { getServers } from './tableSlice';

describe('test tableSlice', () => {
  test('check initial state of  TableState', () => {
    let state = store.getState();
    let TableState = state.tableSlice;
    expect(TableState).toStrictEqual({
      status: 'standby',
      tokenObj: { token: '' },
      data: [{ name: '', distance: 0 }],
    });
  });
  test('Check the state values when pending for getServersbuilder', () => {
    const action = { type: getServers.pending.type, payload: { token: '' } };
    let initialState = store.getState().tableSlice;
    let state = reducer(initialState, action);
    expect(state).toEqual({
      ...state,
      status: 'isLoading',
    });
  });
  test('Check the state values when fullfilled for getServersbuilder', () => {
    const action = { type: getServers.fulfilled.type, payload: { data: {} } };
    let initialState = store.getState().tableSlice;
    let state = reducer(initialState, action);
    console.log(state);
    expect(state).toEqual({
      ...state,
      status: 'data',
      tokenObj: { token: '' },
      data: { data: {} },
    });
  });
  test('Check the state values when pending for getServersbuilder', () => {
    const action = { type: getServers.rejected.type, payload: { status: 'error' } };
    let initialState = store.getState().tableSlice;
    let state = reducer(initialState, action);
    expect(state).toEqual({
      ...state,
      status: 'error',
    });
  });
});
