import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Form, Input, Select, Button } from 'antd';
import Authorized from '../../utils/Authorized';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

const FormItem = Form.Item;
const { Option } = Select;
const { Secured } = Authorized;

@Secured('admin')
@connect(state => ({
  submitting: state.member.add_submitting,
}))
@Form.create()
export default class BranchAdd extends PureComponent {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.dispatch({
          type: 'member/submitAddForm',
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
          <FormItem {...formItemLayout} label="用户名">
            {getFieldDecorator('userName', {
              rules: [
                {
                  required: true,
                  message: '请输入用户名',
                },
              ],
            })(<Input placeholder="输入用户名" />)}
          </FormItem>
          <FormItem {...formItemLayout} label="用户密码">
            {getFieldDecorator('password', {
              rules: [{}],
            })(<Input placeholder="输入密码: 默认 12345678" />)}
          </FormItem>
          <FormItem {...formItemLayout} label="用户分组">
            {getFieldDecorator('power', {
              rules: [
                {
                  required: true,
                  message: '请选择用户分组',
                },
              ],
            })(
              <Select>
                <Option value="co">程序</Option>
                <Option value="ar">美术</Option>
                <Option value="de">策划</Option>
                <Option value="qa">测试</Option>
                <Option value="pm">管理(ADMIN)</Option>
              </Select>
            )}
          </FormItem>
          <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
            <Button type="primary" htmlType="submit" loading={submitting}>
              添加用户
            </Button>
          </FormItem>
        </Form>
      </PageHeaderLayout>
    );
  }
}
