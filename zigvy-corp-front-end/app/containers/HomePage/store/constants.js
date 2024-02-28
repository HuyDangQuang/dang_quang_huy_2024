/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const FETCH_POST_LIST_REQUEST = 'FETCH_POST_LIST_REQUEST';
export const FETCH_POST_LIST_SUCCESS = 'FETCH_POST_LIST_SUCCESS';
export const FETCH_POST_LIST_FAILURE = 'FETCH_POST_LIST_FAILURE';

export const FETCH_COMMENT_POST_ID_REQUEST = 'FETCH_COMMENT_POST_ID_REQUEST';
export const FETCH_COMMENT_POST_ID_SUCCESS = 'FETCH_COMMENT_POST_ID_SUCCESS';
export const FETCH_COMMENT_POST_ID_FAILURE = 'FETCH_COMMENT_POST_ID_FAILURE';
