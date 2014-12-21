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
  downloadCanvas: function(evt) {
    var btn = document.getElementById('downloadLink');
    btn.href = document.getElementById('canvas').toDataURL();
    var now = new Date(),
        tmp = this.state.image.split('.');
    var name = [
      tmp[0],
      now.getDate(),
      (now.getMonth()+1),
      now.getFullYear(),
      now.getHours()+'h'+now.getMinutes(),
      'png'
    ];
    btn.download = name.join('.');
  },
  render: function() {
    return (
      <div>
        <ImagePicker images={this.props.images} onImagePicked={this.imagePicked}/>
        <div className="row">
          <div className="col-sm-6">
            <MemeBuilder image={this.state.image} headerText={this.state.header} footerText={this.state.footer}/>
          </div>
          <div className="col-sm-6">
            <form className="form">
              <div className="form-group">
                <textarea className="form-control" placeholder="head of your jeune" type="text" onChange={this.onTextsChanged} ref="headerTextInput" rows="2"></textarea>
              </div>
              <div className="form-group">
                <textarea className="form-control" placeholder="jeune to the bottom" type="text" onChange={this.onTextsChanged} ref="footerTextInput" rows="2"/>
              </div>
              <div className="form-group">
                <a className="btn btn-block btn-primary" disabled={!this.state.image} href="#" id="downloadLink" onClick={this.downloadCanvas}>Save your jeune</a>
              </div>
            </form>
          </div>
        </div>

      </div>
    );
  }
});


React.renderComponent(<MemeApp images={['aurelie-01.jpg','cam-01.jpg','francis-01.jpg','julie-01.jpg','margo-01.jpg','margo-02.jpg','olivier-01.jpg','pedy-01.jpg','pedy-02.jpg']} />, mountNode);

