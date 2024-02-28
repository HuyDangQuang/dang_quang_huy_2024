/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';

import _concat from 'lodash/concat';

import {
  CHANGE_USERNAME,
  FETCH_COMMENT_POST_ID_FAILURE,
  FETCH_COMMENT_POST_ID_REQUEST,
  FETCH_COMMENT_POST_ID_SUCCESS,
  FETCH_POST_LIST_FAILURE,
  FETCH_POST_LIST_REQUEST,
  FETCH_POST_LIST_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from './constants';

// The initial state of the App
export const initialState = {
  username: '',

  isLoadingUserDefault: false,
  isSuccessUserDefault: false,
  isErrorUserDefault: false,
  userDefaultData: null,

  isLoadingPostList: false,
  isSuccessPostList: false,
  isErrorPostList: false,
  postListData: null,

  isLoadingCommentPostId: false,
  isSuccessCommentPostId: false,
  isErrorCommentPostId: false,
  commentPostIdData: [],
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        draft.username = action.username.replace(/@/gi, '');
        break;

      case FETCH_USER_REQUEST:
        draft.isLoadingUserDefault = true;
        draft.isErrorUserDefault = false;
        break;
      case FETCH_USER_SUCCESS:
        draft.isLoadingUserDefault = false;
        draft.userDefaultData = action.response;
        draft.isSuccessUserDefault = true;
        break;
      case FETCH_USER_FAILURE:
        draft.isLoadingUserDefault = false;
        draft.isErrorUserDefault = action.error;
        break;

      case FETCH_POST_LIST_REQUEST:
        draft.isLoadingPostList = true;
        draft.isErrorPostList = false;
        break;
      case FETCH_POST_LIST_SUCCESS:
        draft.isLoadingPostList = false;
        draft.postListData = action.response;
        draft.isSuccessPostList = true;
        break;
      case FETCH_POST_LIST_FAILURE:
        draft.isLoadingPostList = false;
        draft.isErrorPostList = action.error;
        break;

      case FETCH_COMMENT_POST_ID_REQUEST:
        draft.isLoadingPostList = true;
        draft.isErrorPostList = false;
        break;
      case FETCH_COMMENT_POST_ID_SUCCESS:
        draft.isLoadingPostList = false;
        draft.commentPostIdData = _concat(
          state.commentPostIdData,
          action.payload,
        );
        draft.isSuccessPostList = true;
        break;
      case FETCH_COMMENT_POST_ID_FAILURE:
        draft.isLoadingPostList = false;
        draft.isErrorPostList = action.error;
        break;
    }
  });

export default homeReducer;
