import { BrowserRouter, Route, Switch } from "react-router-dom"
import CreateInvesting from "../pages/CreateInvesting"
import ListInvesting from "../pages/ListInvesting"

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ListInvesting} />
        <Route exact path="/cadastrar-investimento" component={CreateInvesting} />
        <Route exact path="/listar-investimentos" component={ListInvesting} />
      </Switch>
    </BrowserRouter>
  )
}