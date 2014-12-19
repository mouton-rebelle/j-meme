/** @jsx React.DOM */
'use strict';
var React = require('react');
var cx = React.addons.classSet;
var ImagePickerItem = require('./ImagePickerItem');
var ImagePicker = React.createClass({
  getInitialState: function() {
    return {filter: '',selectedImage:''};
  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },
  onFilterChanged: function() {
    this.setState({
      filter:this.refs.filterTextInput.getDOMNode().value
    });
  },
  toggleSelectedImage: function(url)
  {
    this.props.onImagePicked(url);
    this.setState({
      selectedImage: url
    })
  },
  render: function() {
    return <div>
        <input value={this.state.filter}
               ref='filterTextInput'
               onChange={this.onFilterChanged} />
        <ul className="picker">
        {this.props.images.filter(function(img){
          if (!this.state.filter)
          {
            return true;
          } else {
            return img.substr(0,this.state.filter.length) === this.state.filter;
          }
        }.bind(this))
          .map(function(img){
            return <ImagePickerItem url={img} key={img} selected={this.state.selectedImage===img} toggle={this.toggleSelectedImage}/>
          }.bind(this))
        }</ul>
        <p>{this.state.selectedImage}</p>
      </div>;
  }
});


module.exports = ImagePicker;
