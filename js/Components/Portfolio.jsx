import React from 'react'
import PortfolioList from './PortolioComponents/PortfolioList.jsx'
import Descriptions from './PortolioComponents/Descriptions.jsx'
import JavaScript from './PortolioComponents/JavaScript.jsx'
import ReactJS from './PortolioComponents/ReactJS.jsx'
import Scss from './PortolioComponents/Scss.jsx'


class Portfolio extends React.Component {
    mainLiClick = event => {
        event.target.nextSibling.classList.toggle('hidden');
    }
    liClick = event => {
        event.target.children[0].classList.toggle('hidden');
        event.stopPropagation();
    }

    render() {
        return <div className="container">
            <h1>Portfolio</h1>
            <div className="row">
                <div className="col-2">
                    <PortfolioList
                        mainLiClick={this.mainLiClick}
                        liClick={this.liClick}
                    />
                </div>
                <div className="col-4">
                </div>
            </div>
        </div>
    }
}

export default Portfolio
