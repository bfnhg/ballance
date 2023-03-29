import React from "react";
import { useState, useEffect } from "react";
import {
  Button,
  Form,
  Table,
  Card,
  Input,
  InputNumber,
  Typography,
  Select,
  Space,
  Radio,
  Tabs,
  Popconfirm,
  ConfigProvider,
} from "antd";
import Budget from "./Tables/Budget";
import Reals from "./Tables/Reals";
import Performance from "./Tables/Performance";
import { EditOutlined } from "@ant-design/icons";
import axios from "axios";

const { TextArea } = Input;
const { Text } = Typography;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 12,
  },
};

// ON CHANGE SELECT
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
// For tabs
const onChange = (key) => {
  console.log(key);
};

//for tabs Form
const onChangee = (key) => {
  console.log(key);
};

function Balance() {
  //mode of tabs

  const [balance, setbalance] = useState("");
  const { TextArea } = Input;

  const [editingRow, setEditingRow] = useState(null);
  const [categori, setcategori] = useState("");
  const [year, setyear] = useState("");
  const [montant, setmontant] = useState("");
  const [repayment, setrepayment] = useState("");
  const [fevrierbudget, setfevrierbudget] = useState("");

  const [Marsbudget, setMarsbudget] = useState("");
  const [avrilbudget, setavrilbudget] = useState("");
  const [maibudget, setmaibudget] = useState("");
  const [Juinbudget, setJuinbudget] = useState("");

  const [juilletbudget, setjuilletbudget] = useState("");
  const [aoutbudget, setaoutbudget] = useState("");
  const [septembrebudget, setseptembrebudget] = useState("");

  const [octobrebudget, setoctobrebudget] = useState("");
  const [novemberbudget, setnovemberbudget] = useState("");
  const [decembrebudget, setdecembrebudget] = useState("");

  // for table Buget ,Reals and Performance
  const items = [
    {
      key: "1",
      label: <h1 style={{ width: 300, textAlign: "center" }}>Budget</h1>,
      children: (
        <div>
          <Budget />
        </div>
      ),
    },

    {
      key: "2",
      label: <h1 style={{ width: 300, textAlign: "center" }}>Reals</h1>,
      children: (
        <div>
          <Reals />
        </div>
      ),
    },
    {
      key: "3",
      label: <h1 style={{ width: 300, textAlign: "center" }}>Perfermonce</h1>,
      children: (
        <div>
          <Performance />
        </div>
      ),
    },
  ];

  //main Information
  const itemsForm = [
    {
      key: "1",
      label: <h1 style={{ width: 300,textAlign:"center" }}>Main information</h1>,
      children: (
        <div>
          <Form
            {...layout}
            name="nest-messages"
            style={{
              maxWidth: 800,
              margin: "auto",
            }}
          >
            <h1
              style={{
                margin: "auto",
                textAlign: "center",
              }}
            >
              Single Blance Sheet Details
            </h1>
            <br></br>
            <Form.Item
              style={{}}
              //   name={["user", "name"]}
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                defaultValue=" Class"
                disabled
                style={{
                  width: 400,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "Class",
                    label: "Class 1 ",
                  },
                  {
                    value: "Class2 ",

                    label: "Class 2",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              label="Category"
              rules={[
                {
                  type: "Category",
                },
              ]}
            >
              <Select
                defaultValue=" Category"
                style={{
                  width: 400,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "Category",
                    label: "Category 1 ",
                  },
                  {
                    value: "Category2 ",

                    label: "Category 2",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              label="Type"
              rules={[
                {
                  type: "Type",
                },
              ]}
            >
              <Select
                defaultValue=" Type"
                disabled
                style={{
                  width: 400,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "type",
                    label: "Type 1 ",
                  },
                  {
                    value: "type ",

                    label: "Type 2",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              // name={["user", "website"]}
              label="Gl Account"
            >
              <Select
                defaultValue=" Gl Account"
                disabled
                style={{
                  width: 400,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "glaccount",
                    label: "Gl Account 1 ",
                  },
                  {
                    value: "glaccount ",

                    label: "Gl Account 2",
                  },
                ]}
              />
            </Form.Item>

            <Form.Item label="Note">
              <Input.TextArea
                style={{
                  width: 400,
                }}
                rows={2}
              />
            </Form.Item>
            <Form.Item></Form.Item>
          </Form>
        </div>
      ),
    },
    {
      key: "2",
      label: <h1 style={{ width: 300,textAlign:"center" }}>Hyphotheses GL</h1>,
      children: <div></div>,
    },
  ];

  return (
    <div>
      <Card
        style={{
          width: 900,
          margin: "auto",
          background: "#FFFDFD",
        }}
      >
        <Space
          direction="vertical"
          style={{
            width: "27%",
            height: "50",
          }}
        >
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#059BFF",
              },
            }}
          >
            {" "}
            <Button type="primary" block>
              Save Changes
            </Button>
          </ConfigProvider>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#FFA805",
              },
            }}
          >
            {" "}
            <Button type="primary" block>
              Back to Financial Statements
            </Button>
          </ConfigProvider>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#FF0606",
              },
            }}
          >
            {" "}
            <Button type="primary" block>
              Delete Statements
            </Button>
          </ConfigProvider>
        </Space>{" "}
        <br></br>
        <br></br>
        <Tabs
          style={{ marginBottom: 32, Color: "#059BFF" }}
          type="card"
          centered
          defaultActiveKey="1"
          items={itemsForm}
          onChange={onChangee}
        />
      </Card>

      <br></br>
      <br></br>
      <div>
        <Tabs
          style={{ marginBottom: 32, Color: "#059BFF" }}
          type="card"
          centered
          defaultActiveKey="2"
          items={items}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default Balance;
