import React, { Fragment, useEffect, useState } from "react";
import { Layout } from "antd";
import FooterMain from "../components/Layout/Footer";
import Breadcrumb from "../components/Layout/Content";

import { useHistory } from "react-router-dom";

import {
  getDataFromConfigFile,
  updateDataFromConfigFile
} from "../services/configService";
import {
  transformConfigFileInOneJson,
  transformJsonToConfigFile
} from "../helpers/DynamicFormHelper";

import DynamicForm from "../components/DynamicForm/DynamicForm";
import { message } from "antd";
import { Spin } from "antd";

const { Content } = Layout;

const Setting = () => {
  const history = useHistory();
  const [dynamicForm, setDynamicForm] = useState(null);
  const [dynamicFormOrder, setDynamicFormOrder] = useState(null);

  useEffect(() => {
    getDataConfigFile();
  }, []);

  async function getDataConfigFile() {
    let response = await getDataFromConfigFile();
    let dataTransformed = transformConfigFileInOneJson(response.data.config);
    setDynamicForm(dataTransformed);
    setDynamicFormOrder(response.data.config);
  }

  const updateConfigFileOnSubmit = async data => {
    let dataToSend = transformJsonToConfigFile(data, dynamicFormOrder);
    await updateDataFromConfigFile({ config: dataToSend });
    history.push("/");
    success("Updated excel");
  };

  const success = messageText => {
    message.success(messageText);
  };

  return (
    <Fragment>
      <Content className="cl-content">
        <Breadcrumb />
        <div className="cl-content-bg">
          <Spin spinning={dynamicForm == null}>
            {dynamicForm != null && (
              <DynamicForm
                dynamicForm={dynamicForm}
                dynamicFormOrder={dynamicFormOrder}
                parentCallBack={updateConfigFileOnSubmit}
              />
            )}
          </Spin>
          ,
        </div>
      </Content>
      <FooterMain />
    </Fragment>
  );
};

export default Setting;
