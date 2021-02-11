import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    // relatively new React update lets you "catch" errors, thereby triggering that lifecycle and allowing this standard component. 
    componentDidCatch(error, info) {
        this.setState({ hasError: true})
    }

    render(){
        if (this.state.hasError) {
            return <h1>000oops, not good error</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;