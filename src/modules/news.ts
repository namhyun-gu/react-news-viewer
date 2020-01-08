import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';
import { News } from '../api/NewsAPI';
import { loadNews } from '../api/NewsAPI';
import { call, put, takeEvery, all } from 'redux-saga/effects';

export type NewsState = { status: 'loading'; } | { status: 'finished'; data: News[]; };

const newsSlice = createSlice({
  name: 'news',
  initialState: { status: 'loading' } as NewsState,
  reducers: {
    fetchLoading: (_state: NewsState) => {
      return { status: 'loading' } as NewsState;
    },
    fetchCompleted: (_state: NewsState, action: PayloadAction<News[]>) => {
      return { status: 'finished', data: action.payload } as NewsState;
    }
  }
});

export const fetchRequested = createAction('news/fetchRequested');

export const { fetchLoading, fetchCompleted } = newsSlice.actions;

export default newsSlice.reducer;

export function* fetchNews() {
  yield put(fetchLoading());
  const data = yield call(loadNews);
  yield put(fetchCompleted(data));
}

export function* watchFetchNews() {
  yield takeEvery('news/fetchRequested', fetchNews);
}

export function* newsSaga() {
  yield all([watchFetchNews()]);
}