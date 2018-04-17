import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Form, Input, Button } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
// import styles from './style.less';
const FormItem = Form.Item;

@connect(state => ({
  submitting: state.member.add_submitting,
}))
@Form.create()
export default class ChangePassword extends PureComponent {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.dispatch({
          type: 'member/submitSetPassword',
          payload: values,
        });
      }
    });
  };

  render() {
    const { submitting } = this.props;
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 10 },
      },
    };

    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      },
    };

    return (
      <PageHeaderLayout title="" content="">
        <Form onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
          <FormItem {...formItemLayout} label="原密码">
            {getFieldDecorator('passOld', {
              rules: [
                {
                  required: true,
                  message: '原密码不能为空',
                },
              ],
            })(<Input placeholder="原密码" />)}
          </FormItem>
          <FormItem {...formItemLayout} label="新密码">
            {getFieldDecorator('passNew', {
              rules: [
                {
                  required: true,
                  message: '新密码不能为空',
                },
              ],
            })(<Input placeholder="输入新密码" />)}
          </FormItem>
          <FormItem {...formItemLayout} label="再次输入密码">
            {getFieldDecorator('passNewRepeat', {
              rules: [
                {
                  required: true,
                  message: '新密码不能为空',
                },
              ],
            })(<Input placeholder="再次输入新密码" />)}
          </FormItem>
          <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
            <Button type="primary" htmlType="submit" loading={submitting}>
              提交
            </Button>
          </FormItem>
        </Form>
      </PageHeaderLayout>
    );
  }
}
