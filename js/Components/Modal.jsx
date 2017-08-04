import React from 'react'

const backgroundStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 50
};

// The modal "window"
const mainStyle = {
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 500,
    minHeight: 300,
    margin: '0 auto',
    padding: 30
};

class Modal extends React.Component {
    render() {
        if (!this.props.canShow) {
            return null
        }

        return <div style={backgroundStyle}>
            <div style={mainStyle}>
                {
                    this.props.children
                }
                <div className="foot">
                    <button onClick={this.props.toggleModal}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    }
}

export default Modal
