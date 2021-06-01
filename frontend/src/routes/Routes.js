import { BrowserRouter, Switch, Route } from "react-router-dom"
import CreateInvesting from "../pages/CreateInvesting"
import ListInvesting from "../pages/ListInvesting"

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact patch="/" component={ListInvesting} />
        <Route exact patch="/listar-investimentos" component={ListInvesting} />
        <Route exact patch="/cadastrar-investimento" component={CreateInvesting} />
      </Switch>
    </BrowserRouter>
  )
}