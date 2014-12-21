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
      ctx.textAlign = 'center';
      ctx.fillStyle = '#FFF';
      ctx.stokeStyle = '#000';
      ctx.lineWidth = 2;
      this.drawText(ctx,this.props.headerText.toUpperCase(),true);
      this.drawText(ctx,this.props.footerText.toUpperCase(),false);
    }.bind(this);
  },

  componentWillUnmount: function() {
  },
  drawText:function(ctx,longText,fromTop)
  {
    var txtArr = longText.split('\n');
    var font = ( window.navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? 'Bangers' : 'Impact' );
    if (!fromTop)
    {
      txtArr = txtArr.reverse();
    }

    txtArr.forEach(function(text,i){
      var baseFontSize = 80;
      ctx.font = 'bold '+baseFontSize+'pt ' + font;
      while(ctx.measureText(text).width>570)
      {
        baseFontSize--;
        ctx.font = 'bold '+baseFontSize+'pt ' + font;
      }
      var y = fromTop ? 10+(i+1)*baseFontSize*1.2 : 580 - i*baseFontSize*1.15;
      ctx.fillStyle = 'rgba(0,0,0,0.5)';
      ctx.fillText(text, 304,y+4,570);
      ctx.fillStyle = '#FFF';
      ctx.fillText(text, 300,y,570);
      ctx.strokeText(text, 300,y,570);
    });
  },
  render: function() {
    return <div className="meme_builder">

      <canvas id="canvas"></canvas>

    </div>;
  }
});


module.exports = MemeBuilder;
