import React from 'react'

class PortfolioList extends React.Component{
  render() {
          return <ul id="projects dropdown">
              <li onClick={this.props.mainLiClick}>Memogame</li>
              <ul className="hidden dropdown">
                  <li>Opis</li>
                  <li onClick={this.props.liClick}>
                      Technology
                      <ul className="technologies hidden dropdown">
                          <li>
                              Javascript
                          </li>
                          <li>
                              React
                          </li>
                          <li>
                              SCSS
                          </li>
                      </ul>
                  </li>
                  <li onClick={this.props.liClick}>
                      Structure
                      <ul className="structure hidden dropdown">
                          <li>
                              index.html
                          </li>
                          <li>
                              webpack.config.js
                          </li>
                          <li>
                              package.json
                          </li>
                          <li onClick={this.props.liClick}>
                              js
                              <ul className="js-files hidden dropdown">
                                  <li>
                                      app.jsx
                                  </li>
                                  <li>
                                      out.js
                                  </li>
                              </ul>
                          </li>
                      </ul>
                  </li>
              </ul>
        </ul>
      }
    }

export default PortfolioList
