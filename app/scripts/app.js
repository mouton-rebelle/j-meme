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


React.renderComponent(<MemeApp images={['aurelie-01.jpg','aurelie-02.jpg','aurelie-03.jpg','aurelie-04.jpg','aurelie-05.jpg','aurelie-06.jpg','aurelie-07.jpg','aurelie-08.jpg','aurelie-09.jpg','baptiste-01.jpg','baptiste-02.jpg','baptiste-03.jpg','baptiste-04.jpg','baptiste-05.jpg','baptiste-06.jpg','camille-01.jpg','camille-02.jpg','camille-03.jpg','camille-04.jpg','camille-05.jpg','camille-06.jpg','camille-07.jpg','camille-08.jpg','cedric-01.jpg','cedric-02.jpg','cedric-03.jpg','cedric-04.jpg','cedric-05.jpg','elise-01.jpg','elise-02.jpg','elise-03.jpg','elise-04.jpg','elise-05.jpg','elise-06.jpg','elise-07.jpg','francis-01.jpg','francis-02.jpg','francis-03.jpg','francis-04.jpg','grouf-01.jpg','grouf-02.jpg','grouf-03.jpg','grouf-04.jpg','guillemette-01.jpg','guillemette-02.jpg','guillemette-03.jpg','guillemette-04.jpg','guillemette-05.jpg','julie-01.jpg','julie-02.jpg','julie-03.jpg','julie-04.jpg','julie-05.jpg','julie-06.jpg','julie-07.jpg','julien-01.jpg','julien-02.jpg','julien-03.jpg','julien-04.jpg','julien-05.jpg','margot-01.jpg','margot-02.jpg','margot-03.jpg','margot-04.jpg','margot-05.jpg','margot-06.jpg','margot-07.jpg','margot-08.jpg','margot-09.jpg','marion-01.jpg','marion-02.jpg','marion-03.jpg','olivier-01.jpg','olivier-02.jpg','olivier-03.jpg','olivier-04.jpg','pedy-01.jpg','pedy-02.jpg','pedy-03.jpg','pedy-04.jpg','pedy-05.jpg','thomas-01.jpg','thomas-02.jpg','thomas-03.jpg','thomas-04.jpg']} />, mountNode);

