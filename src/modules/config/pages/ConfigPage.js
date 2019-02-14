import React from "react";

import { Header } from "semantic-ui-react";
import { connect } from "react-redux";

import { updateTitle, updateClockDisplay } from "../actions";

const TitleInput = connect(
  (state, ownProps) => ({ title: state[ownProps.namespace].appTitle }),
  dispatch => ({ handleTitleChange: value => dispatch(updateTitle(value)) })
)(({ title, handleTitleChange }) => (
  <input value={title} onChange={e => handleTitleChange(e.target.value)} />
));

const DisplayInput = connect(
  (state, ownProps) => ({
    displayClock: state[ownProps.namespace].displayClock
  }),
  dispatch => ({
    handleClockDisplay: value => dispatch(updateClockDisplay(value)) // dispatch(updateClockDisplay(value))
  })
)(({ displayClock, handleClockDisplay }) => (
  <input
    type="checkbox"
    onChange={e => handleClockDisplay(e.target.checked)}
    checked={displayClock}
  />
));

const ConfigPage = ({ namespace }) => (
  <>
    <Header>About this site</Header>
    <p>
      <TitleInput namespace={namespace} />
    </p>
    <p>
      <label>Display clock ? </label>
      <DisplayInput namespace={namespace} />
    </p>
  </>
);
ConfigPage.defaultProps = {
  handleTitleChange: a => a
};

export default ConfigPage;
