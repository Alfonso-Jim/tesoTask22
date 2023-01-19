import { store } from '../../app/store';
import reducer, { login } from './homeSlice';

describe('test homeSlice', () => {
  test('check initial state of  HomeState', () => {
    let state = store.getState();
    let HomeState = state.homeSlice;
    expect(HomeState).toStrictEqual({
      status: 'standby',
      tokenObj: { token: '' },
      redirect: false,
      userNameError: false,
      userNameHelper: '',
      passwordError: false,
      passwordHelper: '',
    });
  });
  test('clear user errors in inputs', () => {
    let state = store.getState();
    let userNameError = state.homeSlice.userNameError;
    let userNameHelper = state.homeSlice.userNameHelper;
    expect(userNameError).toStrictEqual(false);
    expect(userNameHelper).toStrictEqual('');
  });
  test('clear password errors in inputs', () => {
    let state = store.getState();
    let passwordError = state.homeSlice.passwordError;
    let passwordHelper = state.homeSlice.passwordHelper;
    expect(passwordError).toStrictEqual(false);
    expect(passwordHelper).toStrictEqual('');
  });
  test('clear redirection', () => {
    let state = store.getState();
    let redirect = state.homeSlice.redirect;
    expect(redirect).toStrictEqual(false);
  });
  test('Check the state values when pending for login builder', () => {
    const action = { type: login.pending.type, payload: { token: '' } };
    let initialState = store.getState().homeSlice;
    let state = reducer(initialState, action);
    expect(state).toEqual({
      ...state,
      status: 'isLoading',
      tokenObj: { token: '' },
      redirect: false,
      userNameError: false,
      userNameHelper: '',
      passwordError: false,
      passwordHelper: '',
    });
  });
  test('Check the state values when fullfilled for login builder', () => {
    const action = { type: login.fulfilled.type, payload: { token: 'dummyToken' } };
    let initialState = store.getState().homeSlice;
    let state = reducer(initialState, action);
    expect(state).toEqual({
      ...state,
      status: 'data',
      tokenObj: { token: 'dummyToken' },
      redirect: true,
      userNameError: false,
      userNameHelper: '',
      passwordError: false,
      passwordHelper: '',
    });
  });
  test('Check the state values when pending for login builder', () => {
    const action = { type: login.rejected.type, payload: { status: 'error' } };
    let initialState = store.getState().homeSlice;
    let state = reducer(initialState, action);
    expect(state).toEqual({
      ...state,
      status: 'error',
      tokenObj: { token: '' },
      redirect: false,
      userNameError: true,
      userNameHelper: 'User not authorized',
      passwordError: true,
      passwordHelper: 'Password not authorized',
    });
  });
});
