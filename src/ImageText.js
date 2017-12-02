import React, { Component } from 'react';
class ImageText extends Component {
    constructor(props) {
      super(props);
      this.state = {url: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({url: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.url);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Image URL:
            <input style={{marginLeft: 1 + 'em'}}type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input style={{marginLeft: 1 + 'em'}} type="submit" value="Submit" />
        </form>
      );
    }
  }
  export default ImageText;