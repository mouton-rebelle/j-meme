/** @jsx React.DOM */
/* global window, document */

'use strict';

var React = window.React = require('react/addons'),
    ImagePicker = require('./ui/ImagePicker'),
    MemeBuilder = require('./ui/MemeBuilder'),
    mountNode = document.getElementById('app');


var MemeApp = React.createClass({
  getInitialState: function() {
    return {
      image: '',
      header: '',
      footer: ''
    };
  },
  onTextsChanged: function() {
    this.setState({
      header:this.refs.headerTextInput.getDOMNode().value,
      footer:this.refs.footerTextInput.getDOMNode().value,
    });
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  imagePicked: function(url) {
    this.setState({image: url});
  },
  render: function() {
    return (
      <div>
        <h3>Pick ton jeune</h3>
        <ImagePicker images={this.props.images} onImagePicked={this.imagePicked}/>
        <div className="row">
          <div className="col-sm-6">
            <MemeBuilder image={this.state.image} headerText={this.state.header} footerText={this.state.footer}/>
          </div>
          <div className="col-sm-6">
            <form className="form">
              <div className="form-group">
                <input className="form-control" placeholder="header" type="text" onChange={this.onTextsChanged} ref="headerTextInput"/>
              </div>
              <div className="form-group">
                <input className="form-control" placeholder="footer" type="text" onChange={this.onTextsChanged} ref="footerTextInput"/>
              </div>
            </form>
          </div>
        </div>

      </div>
    );
  }
});


React.renderComponent(<MemeApp images={['aurelie-01.jpg','cam-01.jpg','francis-01.jpg','julie-01.jpg','margo-01.jpg','margo-02.jpg','olivier-01.jpg','pedy-01.jpg','pedy-02.jpg']} />, mountNode);

