import xhr from '../lib/xhr';
import ServerActionCreators from '../projects/actions/ServerActionCreators';

export default {
  loadList () {
    xhr.getJSON('https://api.github.com/orgs/silentcog/repos', (err, res) => {
      ServerActionCreators.loadedList(res);
    });
  }
};
