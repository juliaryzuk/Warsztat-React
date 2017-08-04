import React from 'react'

class Slider extends React.Component {
    render() {
        return <div className="slider">
            <span className="left arrow"
                  onClick={this.props.leftArrowClick}/>
            <div onClick={this.props.toggleModal}>
                <img src={this.props.el} />
            </div>
            <span className="right arrow"
                  onClick={this.props.rightArrowClick}/>
        </div>
    }
}

export default Slider
