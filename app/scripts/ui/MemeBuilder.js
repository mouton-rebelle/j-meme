/** @jsx React.DOM */
/* global d3, document, window */
'use strict';
var React = require('react');

var MemeBuilder = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidUpdate: function() {
    var canvas = document.querySelector("canvas"),
        ctx = canvas.getContext("2d"),
        image = new window.Image();
    canvas.width = 600;
    canvas.height = 600;
    image.src = '/images/'+this.props.image;
    image.onload = function() {
      ctx.drawImage(image, 0, 0,600,600);
      ctx.font = 'bold 60pt Arial';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#FFF';
      ctx.stokeStyle = '#000';
      ctx.lineWidth = 2;
      this.props.headerText.split('\n').forEach(function(text,i){
        ctx.fillText(text, 300, (i+1)*70,570);
        ctx.strokeText(text, 300, (i+1)*70,570);
      });


      ctx.fillText(this.props.footerText, 300, 560,570);
      ctx.strokeText(this.props.footerText, 300, 560,570);
    }.bind(this);
  },

  componentWillUnmount: function() {

  },
  render: function() {
    return <div className="meme_builder">

      <canvas id="canvas"></canvas>

    </div>;
  }
});


module.exports = MemeBuilder;
