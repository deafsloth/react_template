import React from "react";
import { BrowserRouter as Router} from "react-router-dom"
import App from '../shared/App';

const Root = () => {
    return (
        <Router>
            <App />
        </Router>
    );
};

export default Root;