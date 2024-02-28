/**
 * Gets the repositories of the user from Github
 */

import _get from 'lodash/get';

import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import axios from 'axios';
import { makeSelectUsername } from './selectors';
import {
  fetchCommentPostIdFailure,
  fetchCommentPostIdSuccess,
  fetchPostListFailure,
  fetchPostListSuccess,
  fetchUserFailure,
  fetchUserSuccess,
} from './actions';
import {
  FETCH_COMMENT_POST_ID_REQUEST,
  FETCH_POST_LIST_REQUEST,
  FETCH_USER_REQUEST,
} from './constants';

const requestURL = `https://jsonplaceholder.typicode.com`;

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export function* getUserDefault() {
  try {
    const response = yield axios.get(`${requestURL}/users/1`);

    yield put(fetchUserSuccess(response));
  } catch (err) {
    yield put(fetchUserFailure(err));
  }
}

export function* getPostList() {
  try {
    const response = yield axios.get(`${requestURL}/posts`);

    yield put(fetchPostListSuccess(response));
  } catch (err) {
    yield put(fetchPostListFailure(err));
  }
}

export function* getCommentPostId(action) {
  try {
    const { postId } = action;

    const response = yield axios.get(`${requestURL}/posts/${postId}/comments`);

    yield put(
      fetchCommentPostIdSuccess({
        postId,
        response: _get(response, 'data'),
      }),
    );
  } catch (err) {
    yield put(fetchCommentPostIdFailure(err));
  }
}

export default function* githubData() {
  yield all([
    takeLatest(LOAD_REPOS, getRepos),
    takeLatest(FETCH_USER_REQUEST, getUserDefault),
    takeLatest(FETCH_POST_LIST_REQUEST, getPostList),
    takeLatest(FETCH_COMMENT_POST_ID_REQUEST, getCommentPostId),
  ]);
}
