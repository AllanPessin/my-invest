import { Button, Layout, Menu, message, Table } from "antd"
import "antd/dist/antd.css"
import { useState } from "react"
import { Link } from "react-router-dom"

const { Header, Content, Footer } = Layout
const { Column } = Table

function ListInvesting() {

  // const[investig, setinvestig] = useState([])

  function remove(record) {
    message.success("Investimento removido!")
  }

  return (
    <div className="container">
      <Layout>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">
              <Link to="/cadastrar-investimento">
                Cadastrat Investimento
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/listar-investimento">
                Listar Investimento
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <h2>
              INVESTIMENTOS
            </h2>
            <Table /**dataSource={investig}*/>
              <Column title="Código do ativo" dataIndex="codigoAtivo" key="codigoAtivo"></Column>
              <Column title="Valor" dataIndex="valor" key="valor"></Column>
              <Column title="Quantidade de cotas" dataIndex="quantidadeCots" key=""></Column>
              <Column title="Remover" key="atualzar"
                render>={(text, record) => (<Button onClick={() => remove}></Button>)}
              </Column>
            </Table>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>My Invest ©2021 Created by Allan Pessin</Footer>
      </Layout>
    </div>
  )
}

export default ListInvesting