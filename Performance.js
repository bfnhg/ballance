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
  Space,
  Select,
  Radio,
  Tabs,
  Popconfirm,
} from "antd";
import axios from "axios";
const { Text } = Typography;
const { TextArea } = Input;

function Performance() {
  const [Reals, setReals] = useState("");
  const { TextArea } = Input;

  const [editingRow, setEditingRow] = useState(null);
  const [balance, setbalance] = useState("");
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

  useEffect(() => getdataReals(), []);
  useEffect(() => getdata(), []);

  const getdata = async () => {
    await axios
      .get(" http://localhost:5000/Budget")

      .then((res) => {
        console.log(res);

        setbalance(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

const getdataReals = async () => {
  await axios
    .get(" http://localhost:5000/Reals")

    .then((res) => {
      console.log(res);

      setReals(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};




  const columnsbalanceReals = [
    {
      title: <h1 style={{ textAlign: "center" }}>Year</h1>,

      width: 120,
      dataIndex: "year",
      aligne: "center",
    },
    {
      title: <h1 style={{ textAlign: "center" }}> Janvier</h1>,

      children: [
        {
          title: "Reals",
          dataIndex: "montantbudget",
          width: 150,
          align: "right",
        },
        {
          title: "Budget",

          dataIndex: "montantbudget",
          aligne: "left",
          width: 150,
          align: "right",
        },
        {
          title: "Difference",

          dataIndex: "street",
          width: 150,
          align: "right",
          // render: (text, record) => {
          //   <p style={{ textAlign: "right" }}>{record.montantbudget}-{record.montantbudget}</p>;
          // },
        },
      ],
      // render: (text, record) => {
      //   <p style={{ textAlign: "right" }}>{record.montant}</p>;
      // },
    },

    {
      title: <h1 style={{ textAlign: "center" }}> Février</h1>,
      aligne: "right",
      width: 120,
      children: [
        {
          title: "Reals",
          dataIndex: "fevrierbudget",
          width: 150,
          align: "right",
        },
        {
          title: "Budget",

          dataIndex: "fevrierbudget",
          width: 150,
          align: "right",
        },
        {
          title: "Difference",

          dataIndex: "street",
          width: 150,
          align: "right",
        },
      ],
      // render: (text, record) => {
      //   <p style={{ textAlign: "right" }}>{record.fevrierbudget}</p>;
      // },
    },

    {
      title: <h1 style={{ textAlign: "center" }}> Mars</h1>,
      aligne: "right",
      children: [
        {
          title: "Reals",
          dataIndex: "Marsbudget",
          width: 150,
          align: "right",
        },
        {
          title: "Budget",

          dataIndex: "Marsbudget",
          width: 150,
          align: "right",
        },
        {
          title: "Difference",

          dataIndex: "street",
          width: 150,
          align: "right",
        },
      ],
      // render: (text, record) => {
      //   <p style={{ textAlign: "right" }}>{record.Marsbudget}</p>;
      // },
    },

    {
      title: <h1 style={{ textAlign: "center" }}> Avril</h1>,
      aligne: "right",
      children: [
        {
          title: "Reals",
          dataIndex: "avrilbudget",
          width: 150,
          align: "right",
        },
        {
          title: "Budget",

          dataIndex: "avrilbudget",
          width: 150,
          align: "right",
        },
        {
          title: "Difference",

          dataIndex: "street",
          width: 150,
          align: "right",
        },
      ],
      render: (text, record) => {
        <p style={{ textAlign: "right" }}>{record.avrilbudget}</p>;
      },
    },

    {
      title: <h1 style={{ textAlign: "center" }}> Mai</h1>,
      aligne: "right",
      children: [
        {
          title: "Reals",
          dataIndex: "maibudget",
          width: 150,
          align: "right",
        },
        {
          title: "Budget",

          dataIndex: "maibudget",
          width: 150,
          align: "right",
        },
        {
          title: "Difference",

          dataIndex: "street",
          width: 150,
          align: "right",
        },
      ],
      render: (text, record) => {
        <p style={{ textAlign: "right" }}>{record.avrilbudget}</p>;
      },
    },

    {
      title: <h1 style={{ textAlign: "center" }}> Juin</h1>,
      aligne: "right",
      children: [
        {
          title: "Reals",
          dataIndex: "Juinbudget",
          width: 150,
          align: "right",
        },
        {
          title: "Budget",

          dataIndex: "Juinbudget",
          width: 150,
          align: "right",
        },
        {
          title: "Difference",

          dataIndex: "street",
          width: 150,
          align: "right",
        },
      ],
      render: (text, record) => {
        <p style={{ textAlign: "right" }}>{record.avrilbudget}</p>;
      },
    },

    // {
    //   title: <h1 style={{ textAlign: "center" }}>Mai</h1>,
    //   dataIndex: "maibudget",
    //   key: "6",
    //   width: 120,
    //   render: (text, record) => {
    //     console.log(editingRow);
    //     if (editingRow === record.id) {
    //       return (
    //         <Form.Item
    //           name="maibudget"
    //           rules={[
    //             {
    //               required: true,
    //               message: "Please enter your details",
    //             },
    //           ]}
    //         >
    //           <Input
    //             defaultValue={maibudget}
    //             onChange={(event) => {
    //               setmaibudget(event.target.value);
    //               console.log(maibudget);
    //             }}
    //           />
    //         </Form.Item>
    //       );
    //     } else {
    //       return <p style={{ textAlign: "right" }}>{record.maibudget}</p>;
    //     }
    //   },
    // },
    // {
    //   title: <h1 style={{ textAlign: "center" }}>Juin</h1>,
    //   dataIndex: "Juinbudget",
    //   key: "7",
    //   width: 120,
    //   render: (text, record) => {
    //     console.log(editingRow);
    //     if (editingRow === record.id) {
    //       return (
    //         <Form.Item
    //           name="Juinbudget"
    //           rules={[
    //             {
    //               required: true,
    //               message: "Please enter your details",
    //             },
    //           ]}
    //         >
    //           <Input
    //             defaultValue={Juinbudget}
    //             onChange={(event) => {
    //               setJuinbudget(event.target.value);
    //               console.log(Juinbudget);
    //             }}
    //           />
    //         </Form.Item>
    //       );
    //     } else {
    //       return <p style={{ textAlign: "right" }}>{record.Juinbudget}</p>;
    //     }
    //   },
    // },

    {
      title: <h1 style={{ textAlign: "center" }}> Juillet</h1>,
      aligne: "right",
      children: [
        {
          title: "Reals",
          dataIndex: "juilletbudget",
          width: 150,
          align: "right",
        },
        {
          title: "Budget",

          dataIndex: "juilletbudget",
          width: 150,
          align: "right",
        },
        {
          title: "Difference",

          dataIndex: "street",
          width: 150,
          align: "right",
        },
      ],
      render: (text, record) => {
        <p style={{ textAlign: "right" }}>{record.juilletbudget}</p>;
      },
    },
    // {
    //   title: <h1 style={{ textAlign: "center" }}>Juillet</h1>,
    //   dataIndex: "juilletbudget",
    //   key: "8",
    //   width: 120,
    //   render: (text, record) => {
    //     console.log(editingRow);
    //     if (editingRow === record.id) {
    //       return (
    //         <Form.Item
    //           name="juilletbudget"
    //           rules={[
    //             {
    //               required: true,
    //               message: "Please enter your details",
    //             },
    //           ]}
    //         >
    //           <Input
    //             defaultValue={juilletbudget}
    //             onChange={(event) => {
    //               setjuilletbudget(event.target.value);
    //               console.log(juilletbudget);
    //             }}
    //           />
    //         </Form.Item>
    //       );
    //     } else {
    //       return <p style={{ textAlign: "right" }}>{record.juilletbudget}</p>;
    //     }
    //   },
    // },

    {
      title: <h1 style={{ textAlign: "center" }}> Août </h1>,
      aligne: "right",
      children: [
        {
          title: "Reals",
          dataIndex: "aoutbudget",
          width: 150,
          align: "right",
        },
        {
          title: "Budget",

          dataIndex: "aoutbudget",
          width: 150,
          align: "right",
        },
        {
          title: "Difference",

          dataIndex: "street",
          width: 150,
          align: "right",
        },
      ],
      render: (text, record) => {
        <p style={{ textAlign: "right" }}>{record.aoutbudget}</p>;
      },
    },
    // {
    //   title: <h1 style={{ textAlign: "center" }}>Août</h1>,
    //   dataIndex: "aoutbudget",
    //   key: "9",
    //   width: 120,
    //   render: (text, record) => {
    //     console.log(editingRow);
    //     if (editingRow === record.id) {
    //       return (
    //         <Form.Item
    //           name="aoutbudget"
    //           rules={[
    //             {
    //               required: true,
    //               message: "Please enter your details",
    //             },
    //           ]}
    //         >
    //           <Input
    //             defaultValue={aoutbudget}
    //             onChange={(event) => {
    //               setaoutbudget(event.target.value);
    //               console.log(aoutbudget);
    //             }}
    //           />
    //         </Form.Item>
    //       );
    //     } else {
    //       return <p style={{ textAlign: "right" }}>{record.aoutbudget}</p>;
    //     }
    //   },
    // },
    {
      title: <h1 style={{ textAlign: "center" }}> Septembre </h1>,
      aligne: "right",
      children: [
        {
          title: "Reals",
          dataIndex: "septembrebudget",
          width: 150,
          align: "right",
        },
        {
          title: "Budget",

          dataIndex: "septembrebudget",
          width: 150,
          align: "right",
        },
        {
          title: "Difference",

          dataIndex: "street",
          width: 150,
          align: "right",
        },
      ],
      render: (text, record) => {
        <p style={{ textAlign: "right" }}>{record.septembrebudget}</p>;
      },
    },
    // {
    //   title: <h1 style={{ textAlign: "center" }}>Septembre</h1>,
    //   dataIndex: "septembrebudget",
    //   key: "10",
    //   width: 120,
    //   render: (text, record) => {
    //     console.log(editingRow);
    //     if (editingRow === record.id) {
    //       return (
    //         <Form.Item
    //           name="septembrebudget"
    //           rules={[
    //             {
    //               required: true,
    //               message: "Please enter your details",
    //             },
    //           ]}
    //         >
    //           <Input
    //             defaultValue={septembrebudget}
    //             onChange={(event) => {
    //               setseptembrebudget(event.target.value);
    //               console.log(septembrebudget);
    //             }}
    //           />
    //         </Form.Item>
    //       );
    //     } else {
    //       return <p style={{ textAlign: "right" }}>{record.septembrebudget}</p>;
    //     }
    //   },
    // },
    {
      title: <h1 style={{ textAlign: "center" }}> Octobre </h1>,
      aligne: "right",
      children: [
        {
          title: "Reals",
          dataIndex: "octobrebudget",
          width: 150,
          align: "right",
        },
        {
          title: "Budget",

          dataIndex: "octobrebudget",
          width: 150,
          align: "right",
        },
        {
          title: "Difference",

          dataIndex: "street",
          width: 150,
          align: "right",
        },
      ],
      render: (text, record) => {
        <p style={{ textAlign: "right" }}>{record.octobrebudget}</p>;
      },
    },
    // {
    //   title: <h1 style={{ textAlign: "center" }}>Octobre</h1>,
    //   dataIndex: "octobrebudget",
    //   key: "11",
    //   width: 120,
    //   render: (text, record) => {
    //     console.log(editingRow);
    //     if (editingRow === record.id) {
    //       return (
    //         <Form.Item
    //           name="octobrebudget"
    //           rules={[
    //             {
    //               required: true,
    //               message: "Please enter your details",
    //             },
    //           ]}
    //         >
    //           <Input
    //             defaultValue={octobrebudget}
    //             onChange={(event) => {
    //               setoctobrebudget(event.target.value);
    //               console.log(octobrebudget);
    //             }}
    //           />
    //         </Form.Item>
    //       );
    //     } else {
    //       return <p style={{ textAlign: "right" }}>{record.octobrebudget}</p>;
    //     }
    //   },
    // },
    {
      title: <h1 style={{ textAlign: "center" }}> Novembre </h1>,
      aligne: "right",
      children: [
        {
          title: "Reals",
          dataIndex: "novemberbudget",
          width: 150,
          align: "right",
        },
        {
          title: "Budget",

          dataIndex: "novemberbudget",
          width: 150,
          align: "right",
        },
        {
          title: "Difference",

          dataIndex: "street",
          width: 150,
          align: "right",
        },
      ],
      render: (text, record) => {
        <p style={{ textAlign: "right" }}>{record.novemberbudget}</p>;
      },
    },
    {
      title: <h1 style={{ textAlign: "center" }}> Décembre </h1>,
      aligne: "right",
      children: [
        {
          title: "Reals",
          dataIndex: "decembrebudget",
          width: 150,
          align: "right",
        },
        {
          title: "Budget",

          dataIndex: "decembrebudget",
          width: 150,
          align: "right",
        },
        {
          title: "Difference",

          dataIndex: "street",
          width: 150,
          align: "right",
        },
      ],
      render: (text, record) => {
        <p style={{ textAlign: "right" }}>{record.decembrebudget}</p>;
      },
    },
    
    {
      title: <h1 style={{ textAlign: "center" }}>Total $</h1>,
      width: 120,
      render: (_, record) => {
        return (
          <h3 style={{ textAlign: "right" }}>
            {" "}
            {record.fevrierbudget +
              record.Marsbudget +
              record.avrilbudget +
              record.maibudget +
              record.Juinbudget +
              record.juilletbudget +
              record.aoutbudget +
              record.septembrebudget +
              record.octobrebudget +
              record.decembrebudget}
          </h3>
        );
      },
    },
  ];


  return (
    <div>
     

      <Table
        columns={columnsbalanceReals}
        dataSource={balance}
        scroll={{
          x: 1300,
        }}
        pagination={true}
        bordered
        summary={(pageData) => {
          let totalmontantbudget = 0;

          let totalfevrierbudget = 0;
          let totalMarsbudget = 0;
          let totalavrilbudget = 0;
          let totalmaibudget = 0;
          let totalJuinbudget = 0;
          let totaljuilletbudget = 0;
          let totalaoutbudget = 0;
          let totalseptembrebudget = 0;
          let totaloctobrebudget = 0;
          let totalnovemberbudget = 0;
          let totaldecembrebudget = 0;
          let totaltotal = 0;
          pageData.forEach(
            ({
              montantbudget,
              repayment,
              fevrierbudget,
              Marsbudget,
              avrilbudget,
              maibudget,
              Juinbudget,
              juilletbudget,
              aoutbudget,
              septembrebudget,
              octobrebudget,
              novemberbudget,
              decembrebudget,
            }) => {
              totalmontantbudget += montantbudget;

              totalfevrierbudget += fevrierbudget;
              totalMarsbudget += Marsbudget;
              totalavrilbudget += avrilbudget;
              totalmaibudget += maibudget;
              totalJuinbudget += Juinbudget;
              totaljuilletbudget += juilletbudget;
              totalaoutbudget += aoutbudget;
              totalseptembrebudget += septembrebudget;
              totaloctobrebudget += octobrebudget;
              totalnovemberbudget += novemberbudget;
              totaldecembrebudget += decembrebudget;
              totaltotal +=
                fevrierbudget +
                Marsbudget +
                avrilbudget +
                maibudget +
                Juinbudget +
                juilletbudget +
                aoutbudget +
                septembrebudget +
                octobrebudget +
                novemberbudget +
                decembrebudget;
            }
          );
          return (
            <>
              <Table.Summary.Row>
                <Table.Summary.Cell index={1} colSpan={1}>
                  <h3 style={{ textAlign: "center" }}> Total $</h3>
                </Table.Summary.Cell>

                {/* Janvier */}
                {/* Budget */}
                <Table.Summary.Cell index={4}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}>
                      {totalmontantbudget}
                    </h6>
                  </Text>
                </Table.Summary.Cell>
                {/* Reals */}

                <Table.Summary.Cell index={4}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}>
                      {totalmontantbudget}
                    </h6>
                  </Text>
                </Table.Summary.Cell>
                {/* Performance */}

                <Table.Summary.Cell index={4}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}></h6>
                  </Text>
                </Table.Summary.Cell>

                {/* Fevrier */}

                <Table.Summary.Cell index={4}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}>
                      {totalfevrierbudget}
                    </h6>
                  </Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={4}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}>
                      {totalfevrierbudget}
                    </h6>
                  </Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={4}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}></h6>
                  </Text>
                </Table.Summary.Cell>

                {/* mars */}

                <Table.Summary.Cell index={5}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}>
                      {totalMarsbudget}
                    </h6>
                  </Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={5}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}>
                      {totalMarsbudget}
                    </h6>
                  </Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={5}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}></h6>
                  </Text>
                </Table.Summary.Cell>

                {/* Avril  */}

                <Table.Summary.Cell index={6}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}>
                      {totalavrilbudget}
                    </h6>
                  </Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={6}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}>
                      {totalavrilbudget}
                    </h6>
                  </Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={6}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}></h6>
                  </Text>
                </Table.Summary.Cell>

                {/* Mai  */}

                <Table.Summary.Cell index={7}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}>
                      {totalmaibudget}
                    </h6>
                  </Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={7}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}>
                      {totalmaibudget}
                    </h6>
                  </Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={7}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}></h6>
                  </Text>
                </Table.Summary.Cell>
                {/* Jui  */}

                <Table.Summary.Cell index={8}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}>
                      {totalJuinbudget}
                    </h6>
                  </Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={8}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}>
                      {totalJuinbudget}
                    </h6>
                  </Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={8}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}></h6>
                  </Text>
                </Table.Summary.Cell>
                {/* Juillet  */}

                <Table.Summary.Cell index={9}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}>
                      {totaljuilletbudget}
                    </h6>
                  </Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={9}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}>
                      {totaljuilletbudget}
                    </h6>
                  </Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={9}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}></h6>
                  </Text>
                </Table.Summary.Cell>

                {/* aout  */}
                <Table.Summary.Cell index={10}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}>
                      {totalaoutbudget}
                    </h6>
                  </Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={10}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}>
                      {totalaoutbudget}
                    </h6>
                  </Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={10}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}></h6>
                  </Text>
                </Table.Summary.Cell>

                {/* Septembre  */}

                <Table.Summary.Cell index={10}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}>
                      {totalseptembrebudget}
                    </h6>
                  </Text>
                </Table.Summary.Cell>

                <Table.Summary.Cell index={10}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}>
                      {totalseptembrebudget}
                    </h6>
                  </Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={10}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}></h6>
                  </Text>
                </Table.Summary.Cell>
                {/* Octobre  */}

                <Table.Summary.Cell index={10}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}>
                      {totaloctobrebudget}
                    </h6>
                  </Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={10}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}>
                      {totaloctobrebudget}
                    </h6>
                  </Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={10}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}></h6>
                  </Text>
                </Table.Summary.Cell>

                {/* Novembre  */}
                <Table.Summary.Cell index={10}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}>
                      {totalnovemberbudget}
                    </h6>
                  </Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={10}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}>
                      {totalnovemberbudget}
                    </h6>
                  </Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={10}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}></h6>
                  </Text>
                </Table.Summary.Cell>
                {/* Decembre  */}

                <Table.Summary.Cell index={11}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}>
                      {totaldecembrebudget}
                    </h6>
                  </Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={10}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}>
                      {totaldecembrebudget}
                    </h6>
                  </Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={10}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}></h6>
                  </Text>
                </Table.Summary.Cell>

                <Table.Summary.Cell index={10}>
                  <Text>
                    <h6 style={{ textAlign: "right", width: 100 }}>
                      {totaltotal}
                    </h6>
                  </Text>
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </>
          );
        }}
      />
    </div>
  );
}

export default Performance;
