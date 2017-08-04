import React from 'react'
import ReactDOM from 'react-dom'
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Main from './Components/Main.jsx';
import NotFound from './Components/NotFound.jsx';
import Portfolio from './Components/Portfolio.jsx';
import Template from './Components/Template.jsx';

import {
    Router,
    Route,
    IndexRoute,
    hashHistory
} from 'react-router'

import "../scss/main.scss";

document.addEventListener('DOMContentLoaded', function() {
   ReactDOM.render(
       <Router history={hashHistory}>
           <Route path="/" component={Template} >
               <IndexRoute component={Main} />
               <Route path="/about" component={About} />
               <Route path="/portfolio" component={Portfolio} />
               <Route path="/contact" component={Contact} />
               <Route path="*" component={NotFound} />
           </Route>
       </Router>,
       document.getElementById('app')
   )
});
