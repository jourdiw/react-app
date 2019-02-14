import React, { Component } from "react";

class ShowPage extends Component {
  state = {
    loading: true,
    show: null
  };

  componentDidMount = async () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    try {
      const res = await fetch(`http://api.tvmaze.com/shows/${id}`);
      const json = await res.json();
      console.log(json);
      this.setState({ show: json, loading: false });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const { loading, show } = this.state;
    if (loading) return <p>loading...</p>;
    const { name } = show;
    return (
      <div>
        <h2>{name}</h2>
      </div>
    );
  }
}

export default ShowPage;
