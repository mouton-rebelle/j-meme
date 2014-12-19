/** @jsx React.DOM */
'use strict';
var React = require('react/addons');
var cx = React.addons.classSet;
var ImagePickerItem = React.createClass({

  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },
  toggle: function() {
    this.props.toggle(this.props.url);
  },
  render: function() {
    var classes = cx({
        'picker__item': true,
        'picker__item--selected': this.props.selected
      });
    return <li className={classes}><img className="picker__item__img" onClick={this.toggle} src={'/images/'+this.props.url} /></li>;
  },
});


module.exports = ImagePickerItem;
