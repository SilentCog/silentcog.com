import React from 'react';

const DefaultTemplate = React.createClass({

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>{this.props.contents}</div>
      </div>
    );
  }
});

export default DefaultTemplate;
