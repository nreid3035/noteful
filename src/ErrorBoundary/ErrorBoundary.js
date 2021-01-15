import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    render() {
        console.log(this.props)
        if (this.state.hasError) {
            return (
               <h2>An error has occured</h2>
            )
        } else {
            return this.props.children
        }
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.object.isRequired
}

export default ErrorBoundary