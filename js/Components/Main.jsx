import React from 'react'
import Slider from './MainComponents/Slider.jsx'
import Modal from './Modal.jsx'

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            images: [
                "./img/logo.jpg",
                "./img/slider1.jpg",
                "./img/slider2.jpg"
            ],
            active: 0,
            showModal: false
        }
    }
    handleLeftArrowClick = () => {
        if (this.state.active === 0) {
            this.setState({
                active: this.state.images.length - 1
            });
        } else {
            this.setState({
                active: this.state.active - 1
            });
        }
    }

    handleRigthArrowClick = () => {
        if (this.state.active === this.state.images.length - 1) {
            this.setState({
                active: 0
            });
        } else {
            this.setState({
                active: this.state.active + 1
            });
        }
    }
    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        });
    }
    render() {
        return <div className="container">
            <h1>Welcome!</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi cumque debitis deserunt dolor eveniet expedita fuga itaque libero, maxime quasi rerum. A dignissimos maiores quidem! Dicta dolor quod tempora!
            </p>
            <Slider
                rightArrowClick={this.handleRigthArrowClick}
                leftArrowClick={this.handleLeftArrowClick}
                el={this.state.images[this.state.active]}
                toggleModal={this.toggleModal}
            />
            <Modal canShow={this.state.showModal} toggleModal={this.toggleModal}>
                <Slider
                    rightArrowClick={this.handleRigthArrowClick}
                    leftArrowClick={this.handleLeftArrowClick}
                    el={this.state.images[this.state.active]}
                />
            </Modal>
        </div>
    }
}

export default Main
