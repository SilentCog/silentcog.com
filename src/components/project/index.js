import React from 'react';
import PropTypes from 'prop-types';

const Project = ({
  item
}) => (
  <div>
    <h2><a href={ item.homepage }>{ item.name }</a></h2>
    <h3><a href={ item.svn_url }>Github</a></h3>
    <p>{ item.description }</p>
  </div>
);

Project.propTypes = {
  item: PropTypes.object
}

export default Project;

