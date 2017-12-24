import React from 'react';
import PropTypes from 'prop-types';

const Project = ({
  item
}) => (
  <div>
    <h2>{ item.project }</h2>
    <h3>{ item.dates }</h3>
    <p>{ item.description }</p>
  </div>
);

Project.propTypes = {
  item: PropTypes.object
}

export default Project;

