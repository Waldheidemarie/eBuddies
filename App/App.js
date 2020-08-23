import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import createStore from 'App/Stores'
import * as firebase from 'firebase/app'
import { firebaseConfig } from './Config/firebase'
// import RootScreen from './Containers/Root/RootScreen'

// import Login from './Containers/Login/LoginScreen'
// import ChatScreen from './Containers/Chat/ChatScreen'

import Login from './Containers/Login/LoginScreen'
import SignUp from './Containers/SignUp/SignUpScreen'
import SignUpTwo from './Containers/SignUpTwo/SignUpTwoScreen'
import Interests from './Containers/Interests/InterestsScreen'
import AllEventsScreen from './Containers/AllEvents/AllEventsScreen'

const { store, persistor } = createStore()

export default class App extends Component {
  constructor() {
    super()
    this.initializeFirebase()
  }
  initializeFirebase = () => {
    firebase.initializeApp(firebaseConfig)
  }
  render() {
    return (
      /**
       * @see https://github.com/reduxjs/react-redux/blob/master/docs/api/Provider.md
       */
      <Provider store={store}>
        {/**
         * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
         * and saved to redux.
         * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
         * for example `loading={<SplashScreen />}`.
         * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
         */}
        <PersistGate loading={null} persistor={persistor}>
          <SignUp />
          {/* <SignUpTwo /> */}
          {/* <Interests /> */}

          {/* <AllEventsScreen /> */}
          {/* <RootScreen /> */}
          {/* <ChatScreen /> */}
        </PersistGate>
      </Provider>
    )
  }
}
