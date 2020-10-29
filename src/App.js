import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./Home";
import Footer from "./components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import ItemsContextProvider from "./context/ItemsContext";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <ItemsContextProvider>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={SearchPage} />
          </ItemsContextProvider>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
