import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { getServersData } from '../../api/api';

export interface TableState {
  status: 'standby' | 'isLoading' | 'data' | 'error';
  tokenObj: { token: string };
  data: [{ name: string; distance: number }];
}

const initialState: TableState = {
  status: 'standby',
  tokenObj: { token: '' },
  data: [{ name: '', distance: 0 }],
};

export const getServers = createAsyncThunk('table/getServers', async (token: string) => {
  const response = await getServersData(token);
  return response.data;
});

export const tableSlice = createSlice({
  name: 'tableSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getServers.pending, (state) => {
        state.status = 'isLoading';
      })
      .addCase(getServers.fulfilled, (state, action: PayloadAction<[{ name: string; distance: number }]>) => {
        state.status = 'data';
        state.data = action.payload;
      })
      .addCase(getServers.rejected, (state) => {
        state.status = 'error';
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = tableSlice.actions;

export const selectTableSlice = (state: RootState) => state.tableSlice;

export default tableSlice.reducer;
