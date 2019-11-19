import React from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return { cats: state.cats };
};

const ConnectedList = ({ cats }) => (
  <ul className="list-group list-group-flush">
    {cats.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.label}
      </li>
    ))}
  </ul>
);
const ShowCats = connect(mapStateToProps)(ConnectedList);
export default ShowCats;