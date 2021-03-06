import React from "react";
import { render } from "react-dom";
import { Router, Route, hashHistory } from "react-router";
import Login from "./Login";
import Signup from "./Signup";
import Rooms from "./Rooms";
import Room from "./Room";

import firebase from "firebase/firebase-browser";

// Firebaseの初期化
const config = {
    apiKey: "AIzaSyB_pgQDdv9ClcsMRtZ_KPBJC_yAWrtcJEM",
    authDomain: "electron-chat-6a98e.firebaseapp.com",
    databaseURL: "https://electron-chat-6a98e.firebaseio.com",
    projectId: "electron-chat-6a98e",
    storageBucket: "electron-chat-6a98e.appspot.com",
    messagingSenderId: "638302186839"
  };
firebase.initializeApp(config);

// Routingの定義
const appRouting = (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
      <Route path="rooms" component={Rooms}>
        <Route path=":roomId" component={Room} />
      </Route>
    </Route>
  </Router>
);

// Routingの初期化
if (!location.hash.length) {
  location.hash = "#/login";
}

// Applicationをrendering
render(appRouting, document.getElementById("app"));
