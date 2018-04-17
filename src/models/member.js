import { message } from 'antd/lib/index';
import { memberAddSubmit, memberSetPower, memberSetPassword } from '../services/api';

export default {
  namespace: 'member',
  state: {
    add_submitting: false,
    del_submitting: false,
  },
  effects: {
    *submitAddForm({ payload }, { call, put }) {
      yield put({
        type: 'changeRegularFormSubmitting',
        payload: true,
      });
      const response = yield call(memberAddSubmit, payload);
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });
      if (response.status === 'ok') {
        message.success('创建成功');
      } else {
        message.info('创建失败: '.concat(response.message));
      }
      yield put({
        type: 'changeRegularFormSubmitting',
        payload: false,
      });
    },

    *submitSetPower({ payload }, { call, put }) {
      yield put({
        type: 'changeRegularFormSubmitting',
        payload: true,
      });
      yield call(memberSetPower, payload);
      yield put({
        type: 'changeRegularFormSubmitting',
        payload: false,
      });
      message.success('提交成功');
    },

    *submitSetPassword({ payload }, { call, put }) {
      yield put({
        type: 'changeRegularFormSubmitting',
        payload: true,
      });
      yield call(memberSetPassword, payload);
      yield put({
        type: 'changeRegularFormSubmitting',
        payload: false,
      });
      message.success('提交成功');
    },
  },
  reducers: {

  },
};
