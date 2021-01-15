import React from 'react';
import PropTypes from 'prop-types'

class ValidationError extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        if (this.props.message) {
            return (
                <div className="error">{this.props.message}</div>
            )
        }
        return (
            <></>
        )
    }
}

ValidationError.propTypes = {
    message: PropTypes.string.isRequired
}

export default ValidationError