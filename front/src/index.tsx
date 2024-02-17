
import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import './index.css';
import App from "./App";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route, RouterProvider,
} from "react-router-dom";
import Intro from "./Intro";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_API_GIT_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
          <Route path="/" element={<App/>}/>
          <Route path={'/intro'} element={<Intro/>}/>
        </>
    )
);

ReactDOM.render(
  <ApolloProvider client={client}>

          <RouterProvider router={router}/>

  </ApolloProvider>,
  document.getElementById("root")
);
