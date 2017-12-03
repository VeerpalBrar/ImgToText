import React, { Component } from 'react';
class ImageText extends Component {
    constructor(props) {
      super(props);
      this.state = {
          url: '', 
          text: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({url: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.url);
      event.preventDefault();
      fetch('https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/ocr?', {
        method: 'post',
        headers: new Headers({
        'Content-Type': 'application/json', 
        'Ocp-Apim-Subscription-Key':'keygoeshere',
	}), 
        body: JSON.stringify({
           url: this.state.url
        })
    }).then(res => res.json())
    .then(
      (result) => {
        console.log(JSON.stringify(result));
        if(result.code){
            this.setState({text: "Something went wrong! \n" + result.code + " : " + result.message});
        } else{
            var imgwords =""
            result.regions.forEach(function(region) {
                region.lines.forEach(function(line) {
                    line.words.forEach(function(word){
                        imgwords+= word.text + " "
                    })
                })
            });
            console.log(imgwords);
            this.setState({text: imgwords});
        }
        }, 
      
      (error) => {
        console.log(error);
      }
    )
    }
  
    render() {
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <label>
                Image URL:
                <input style={{marginLeft: 1 + 'em'}}type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input style={{marginLeft: 1 + 'em'}} type="submit" value="Submit" />
            </form>
            <p>{this.state.text}</p>
        </div>
      );
    }
  }
  export default ImageText;