import { Button, Layout, Menu, message, Table } from "antd"
import "antd/dist/antd.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import InvestingService from "../../services/InvestingService"

const { Header, Content, Footer } = Layout
const { Column } = Table

function ListInvesting() {

  const[investig, setInvestig] = useState([])

  useEffect(() =>{
    refreshInvesting()
    return () => {}
  },[])

  async function refreshInvesting() {
    InvestingService.retrieveAllInvesting()
      .then(
        response => {
          setInvestig(response.data)
        }
      )
  }

  function remove(record) {
    InvestingService.deleteInvesting(record.id)
    message.success("Investimento removido!")
  }

  return (
    <div className="container">
      <Layout>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">
              <Link to="/cadastrar-investimento">Cadastrar Investimento</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/listar-investimentos">Listar Investimento</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <h2>
              INVESTIMENTOS
            </h2>
            <Table dataSource={investig}>
              <Column title="Código do ativo" dataIndex="assetCode" key="codigoAtivo"></Column>
              <Column title="Valor" dataIndex="value" key="value"></Column>
              <Column title="Quantidade de cotas" dataIndex="amount" key=""></Column>
              <Column title="Remover" key="atualzar"render={(text, record) => (
                  <Button onClick={() => remove(record)} type="primary">
                    Remover
                  </Button>
                  )
                }>
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