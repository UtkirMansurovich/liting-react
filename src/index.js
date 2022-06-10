import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './i18next';
import './index.css';
import App from './App';
import {AppProvider} from "./context";
import $ from 'jquery';

ReactDOM.render(
    <Suspense fallback={
                    <div className="preloader">
                        <img src="../assets/images/pre-loader-1.svg" alt="img"/>
                    </div>
                }>
        <AppProvider>
            <App />
        </AppProvider>
    </Suspense>
    , document.getElementById('root')
);


