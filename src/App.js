import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactTooltip from "react-tooltip";

import { Container, Menu, PageBody } from "./AppStyled";

import HomeScreen from "./pages/HomeScreen";
import Tela2Screen from "./pages/Tela2Screen";

import PrivateRoute from "./components/PrivateRoute";
import MenuItem from "./components/MenuItem";
import Cart from "./components/Cart";

import store from "./assets/store.png";
import order from "./assets/order.png";
import profile from "./assets/profile.png";

export default () => {
  const name = useSelector((state) => state.user.name);

  return (
    <BrowserRouter>
      <Container>
        <Menu>
          <MenuItem title="Loja" icon={store} link="/" />
          <MenuItem title="Pedidos" icon={order} link="/orders" />
          <MenuItem title="Meu perfil" icon={profile} link="/profile" />
        </Menu>
        <PageBody>
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <PrivateRoute path="/orders">
              <div>Tela de PEDIDOS</div>
            </PrivateRoute>
            <PrivateRoute path="/profile">
              <div>Tela de PERFIL</div>
            </PrivateRoute>
            <Route path="/tela2/:nome">
              <Tela2Screen />
            </Route>
          </Switch>
        </PageBody>
        <Cart />
        <ReactTooltip id="tip-top" place="top" effect="solid" />
        <ReactTooltip id="tip-right" place="right" effect="solid" />
      </Container>
    </BrowserRouter>
  );
};
