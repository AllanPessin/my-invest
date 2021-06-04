import {
  Form,
  Button,
  message,
  DatePicker,
  Layout,
  Menu,
  Input,
  InputNumber,
  Select
} from "antd";
import "antd/dist/antd.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InvestingService from "../../services/InvestingService";
import CategoryService from "../../services/CategoryService";

const { Header, Content, Footer } = Layout;
// const { Option } = Select;

function CreateInvesting() {

  const[, setCategories] = useState([])
  const[, setCategory] = useState(null)

  useEffect(() =>{
    refreshCategory()
    return () => {}
  },[])

  async function refreshCategory() {
    CategoryService.retrieveAllCategories()
      .then(
        response => {
          setCategories(response.data)
        }
      )
  }

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 3,
    },
  };

  const tailLayout = {
    wrapperCol: {
      offset: 4,
    },
  };

  const onFinish = (values) => {
    InvestingService.saveIvesting(values)
    message.success("Investimento salvo!")
  }

  const onFinishFailed = (errorInfo) => {
    message.danger("Investimento salvo!")
    console.log("FAILED:", errorInfo)
  }

  // function handleChange(value) {
  //   setCategory(value)
  // }

  return (
    <div className="container">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/cadastrar-investimento">Cadastrar Investimento</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/listar-investimentos">Listar Investimentos</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <h2>CADASTRAR INVESTIMENTO</h2>
            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Código do Ativo"
                name="assetCode"
                rules={[
                  {
                    required: true,
                    message: "Insira o código do ativo!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Valor"
                name="value"
                rules={[
                  {
                    required: true,
                    message: "Insira o valor da cota!",
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                label="Quantidade de Cotas"
                name="amount"
                rules={[
                  {
                    required: true,
                    message: "Insira a quantidade de cotas!",
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                label="Data da compra"
                name="buyedAt"
                rules={[
                  {
                    required: true,
                    message: "Insira a data da compra!",
                  },
                ]}
              >
                <DatePicker />
              {/* </Form.Item>
              <Form.Item label="Categoria" 
                name="category"
                rules={[
                  {
                    required: false,
                  }
                ]}
              > */}
                {/* <Select onChange={handleChange}>
                  {categories.map(categories => (
                    <Option key={categories.id}>{categories.name}</Option>
                  ))}
                </Select> */}
                {/* <Select onChange={handleChange}> 
                {categories.map((item, index) => {
                  return (
                    <Option key={item.id} value={item.id}>
                      {item.name}
                    </Option>
                  )
                })}
                </Select> */}
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Salvar
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          My Invest ©2021 Created by Allan Pessin
        </Footer>
      </Layout>
    </div>
  )
}

export default CreateInvesting