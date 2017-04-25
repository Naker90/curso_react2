import * as type from '../actions/actionsTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function ajaxStatusReducer(status = initialState.numberAjaxCallInProgress, action) {
  if(action.type ===  type.BEGIN_AJAX_CALL){
    return state + 1;
  }else if(actionTypeEndsInSuccess(action.type())){
    return state - 1;
  }

  return state;
}