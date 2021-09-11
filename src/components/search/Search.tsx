import * as React from 'react';
import {ChangeEvent} from 'react';
import {IsearchProps} from './types/IsearchProps';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IsearchState} from './types/IsearchState';
import styles from './styles/search.module.scss';

//Example class component
class Search extends React.Component<IsearchProps, IsearchState> {
  timeout: any;

  constructor(props: IsearchProps | Readonly<IsearchProps>) {
    super(props);
    this.timeout = 0;

    this.state = {
      searchText: ''
    }

    this.doSearch = this.doSearch.bind(this);
    this.clearSearchField = this.clearSearchField.bind(this);
  }

  sendToParent(name: string): void {
    this.props.handleKeyUp(name);
  }

  doSearch(event: ChangeEvent<HTMLInputElement>) {
    this.setState({searchText: event.target.value});

    if (this.timeout) clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.sendToParent(this.state.searchText);
    }, 1600);
  }

  clearSearchField(): void {
    this.setState({searchText: ''});
    this.sendToParent('');
  }

  public render(): JSX.Element {
    return (
      <div className={`${styles.search}`}>
        <div className="search-box flex">
          {
            this.state?.searchText?.length > 0 &&
            <button onClick={this.clearSearchField.bind(this)} className="delete">
              <FontAwesomeIcon icon={faTimesCircle}/>
            </button>
          }
          <input
            name="searchText"
            value={this.state.searchText}
            onChange={this.doSearch}
            type="text"
          />
        </div>
      </div>
    );
  }
}

export default Search;
