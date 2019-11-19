import React, { Component } from 'react';
import PropTypes from 'prop-type';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';

class ItemList extends Component {
    componentDidMount() {//'http://localhost:3000/cat.json'
        //this.props.fetchData('http://599167402df2f40011e4929a.mockapi.io/items');
        this.props.fetchData('http://localhost:3000/item.json?ws=2');
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
                {this.props.items.map((item) => (
                    <li key={item.id}>
                        {item.label}
                    </li>
                ))}
            </ul>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(ItemList);
