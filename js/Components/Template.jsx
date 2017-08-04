import React from 'react'
import MainMenu from './TemplateComponents/MainMenu.jsx'
import Footer from './TemplateComponents/Footer.jsx'

class Template extends React.Component {
   render() {
       return <div>
           <header>
               <div id="logo">
                   <img src="./img/logo.jpg"/>
               </div>
               <MainMenu />
           </header>
           <main>
               {
                   this.props.children
               }
           </main>
           <footer>
               <Footer />
           </footer>
       </div>
   }
}

export default Template
