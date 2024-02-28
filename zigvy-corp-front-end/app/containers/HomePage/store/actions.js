import {
  CHANGE_USERNAME,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_POST_LIST_REQUEST,
  FETCH_POST_LIST_SUCCESS,
  FETCH_POST_LIST_FAILURE,
  FETCH_COMMENT_POST_ID_REQUEST,
  FETCH_COMMENT_POST_ID_SUCCESS,
  FETCH_COMMENT_POST_ID_FAILURE,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}

/**
 * GET USER DEFAULT
 */
export const fetchUserRequest = () => ({
  type: FETCH_USER_REQUEST,
});

export const fetchUserSuccess = response => ({
  type: FETCH_USER_SUCCESS,
  response,
});

export const fetchUserFailure = error => ({
  type: FETCH_USER_FAILURE,
  error,
});

/**
 * GET POST LIST
 */
export const fetchPostListRequest = () => ({
  type: FETCH_POST_LIST_REQUEST,
});

export const fetchPostListSuccess = response => ({
  type: FETCH_POST_LIST_SUCCESS,
  response,
});

export const fetchPostListFailure = error => ({
  type: FETCH_POST_LIST_FAILURE,
  error,
});

/**
 * GET COMMENT POST ID
 */
export const fetchCommentPostIdRequest = postId => ({
  type: FETCH_COMMENT_POST_ID_REQUEST,
  postId,
});

export const fetchCommentPostIdSuccess = payload => ({
  type: FETCH_COMMENT_POST_ID_SUCCESS,
  payload,
});

export const fetchCommentPostIdFailure = error => ({
  type: FETCH_COMMENT_POST_ID_FAILURE,
  error,
});
