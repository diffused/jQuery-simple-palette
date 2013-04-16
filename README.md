# jQuery simple palette
[https://github.com/diffused/jQuery-simple-palette](https://github.com/diffused/jQuery-simple-palette)

A quick and simple html color palette jquery plugin.

Displays a customizable, limited palette of colors in a simple html grid.

[Check out the demo](http://jsfiddle.net/diffused/AeaXf/embedded/result/)

##Basic usage

`.palette()` will replace the html in the given div.

`$('#whatever').palette(); // defaults to 'box' type`



##Presets
3 default palettes are included: 

`'thin'` : 3 columns wide, medium color selection

`$('#whatever').palette('thin');`


`'strip'` : single row, small color selection

`$('#whatever').palette('strip');`

`'box'` : 17x13 grid, larger selection

`$('#whatever').palette('box');`


## Custom layout and colors
Set your own colors and column width.

`cols` : int representing column width (default 1)

`colors` : string array of hex colors. Leading '#' is optional

    $('#whatever').palette({ 
        cols: 1, 
        colors:['c8323a', '#405192', '0c9557']
    });


##Styling
Include `jquery.simple-palette.css`

or implement the default CSS classes:

    .colorbox
    .colorbox_row
    .colorbox_cell

Assign your own class names by passing in options

    container_class
    row_class
    cell_class

`$('#whatever').palette({ container_class: 'my_container', row_class: 'my_row' });`
