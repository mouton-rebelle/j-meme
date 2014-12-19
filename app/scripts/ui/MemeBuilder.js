/** @jsx React.DOM */
/* global d3, document, window */
'use strict';
var React = require('react');

var MemeBuilder = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {
    d3.select("#svg").on("click", function(){
    var html = d3.select("svg")
    .attr("version", 1.1)
    .attr("xmlns:xlink","http://www.w3.org/1999/xlink")
    .node().parentNode.innerHTML;
console.log(html);
    //console.log(html);
    var imgsrc = 'data:image/svg+xml;base64,'+ window.btoa(html);
    var img = '<img src="'+imgsrc+'">';
    d3.select("#svgdataurl").html(img);


    var canvas = document.querySelector("canvas"),
    context = canvas.getContext("2d");

    var image = new window.Image();
    image.src = imgsrc;
    image.onload = function() {
    context.drawImage(image, 0, 0);

    var canvasdata = canvas.toDataURL("image/png");

    var pngimg = '<img src="'+canvasdata+'">';
    d3.select("#pngdataurl").html(pngimg);

    var a = document.createElement("a");
    a.download = "sample.png";
    a.href = canvasdata;
    a.click();
    };

    });
  },
  componentDidUpdate: function() {
    if (this.props.image)
    {
      var g = d3.select('#imageContainer');
      var img = g.selectAll('image').data([this.props.image]);

      img.enter()
        .append('svg:image')
        .attr('x',0)
        .attr('y',0)
        .attr('width',300)
        .attr('height',300);

      img.attr('xlink:href','/images/' + this.props.image);

    }
  },
  componentWillUnmount: function() {

  },
  render: function() {
    return <div className="meme_builder">
      <div>
        <svg id="svg" width="300" height="300">
          <g id="imageContainer" data-img={this.props.image}></g>
          <text x="150" y="30"
            fill="#FFF" stroke="#000" strokeWidth="1px"
            fontFamily="Arial" fontSize="30px" textAnchor="middle">{this.props.headerText.toUpperCase()}</text>
          <text x="150" y="270"
            fill="#FFF" stroke="#000" strokeWidth="1px"
            fontFamily="Arial" fontSize="30px" textAnchor="middle">{this.props.footerText.toUpperCase()}</text>
        </svg>
      </div>
      <canvas></canvas>
      <div id="svgdataurl"></div>
    </div>;
  }
});


module.exports = MemeBuilder;
