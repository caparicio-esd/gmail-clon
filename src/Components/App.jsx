import React from "react";
import Layout from "./Layout";

import { Provider } from 'react-redux'
import store from './../Redux/index'

const App = () => {
    return (
        <React.Fragment>
            <Provider store={store}>
                <Layout />
            </Provider>
        </React.Fragment>
    );
};

export default App;
