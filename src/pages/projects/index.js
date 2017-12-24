import React, { Component } from 'react';

import ListStore from '../../state/projects/stores/';
import ViewActionCreators from '../../state/projects/actions/ViewActionCreators';

import Project from '../../components/project/';

class Projects extends Component {
  constructor (props) {
    super(props);

    this.state = ListStore.getState();

    this.handleStoreChange = this.handleStoreChange.bind(this);
  }

  componentDidMount () {
    ListStore.addChangeListener(this.handleStoreChange);
    ViewActionCreators.loadList();
  }

  componentWillUnmount () {
    ListStore.removeChangeListener(this.handleStoreChange);
  }

  handleStoreChange () {
    this.setState(ListStore.getState());
  }

  render() {
    const projects = this.state.items.map((item, index) => (
      <Project key={ index } item={ item } />
    ));

    return (
      <div>
        { projects }
      </div>
    );
  }
}

export default Projects;
