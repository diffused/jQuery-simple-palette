jQuery simple palette

A quick and simple html color palette jquery plugin.

usage:

Palette will replace the html in the given div.

$('#whatever').palette(); // defaults to 'box' type

3 default palettes are included: 
	'thin'
	'strip'
	'box'

$('#whatever').palette('thin');

$('#whatever').palette('strip');

$('#whatever').palette('box');

You can set your own colors and column width.
	cols : int representing number of colors wide (default 1).
	colors : string array of hex colors. Leading '#' is optional.

$('#whatever').palette({cols:1, colors:['c8323a', '#405192', '0c9557']});


default css classes:
	.colorbox 
	.colorbox_row
	.colorbox_cell
