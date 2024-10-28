import React, { Component } from 'react';

class LifecycleLogger extends Component {
  componentDidMount() {
    console.log('Component Mounted');
  }

  componentDidUpdate() {
    console.log('Component Updated');
  }

  render() {
    return <h2>Check the console for lifecycle logs.</h2>;
  }
}

export default LifecycleLogger;
