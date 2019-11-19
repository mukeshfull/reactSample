import React, { Component } from 'react';
import PropTypes from 'prop-type';
import { connect } from 'react-redux';

import { catsFetchData } from '../actions/cats';
class CatList extends Component {
    componentDidMount() {
                //dispatch(catsAlreadyLoaded(true));
        if( ! this.props.hasLoaded  )
            this.props.fetchData('http://localhost:3000/cat.json');
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <ul>
                {this.props.cats.map((cat) => (
                    <li key={cat.id}>
                        {cat.label}
                    </li>
                ))}
            </ul>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        cats: state.cats,
        hasErrored: state.catsHasErrored,
        isLoading: state.catsIsLoading,
        hasLoaded: state.catsAlreadyLoaded
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(catsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CatList);