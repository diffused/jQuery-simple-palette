/*!
jQuery simple palette

A quick and simple html color palette jquery plugin.

Copyright 2013, Shaun Fuchs

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/


(function($) {  	
  $.fn.palette = function(options) {
  	var self = this;

  	var defaults = {
      cols: 1,
  		container_class: 'colorbox',
  		row_class: 'colorbox_row',
  		cell_class: 'colorbox_cell'
  	}

  	// default to box preset
  	if(options == undefined)
  		options = $.fn.palette.presets['box'];
  	
  	self.settings = $.fn.palette.presets[options] || options;

  	self.settings = $.extend({}, defaults, self.settings);


  	this.has_leading_hash = function(color) {  		
  		return (color.lastIndexOf('#') === 0);
  	}

  	this.fix_color_hash = function(color) {      
  		if(self.has_leading_hash(color))
        return color;
  		return '#' + color;
  	}

  	this.color_index_from_row_col = function(row, col) {
			return (col+(row*self.settings.cols));
  	}

  	this.generate_html = function() {  		
			
			var color = '';
			var color_box = '';
      var colors_index = 0;
			var cols = self.settings.cols;
			var colors = self.settings.colors;

			var html = '<div class="' + self.settings.container_class + '">';

			var rows = colors.length / cols;	
			
			for(var row = 0; row < rows; row++) {
				html += '<div class="' + self.settings.row_class + '">';		
				
				for(var col = 0; col < cols; col++) {	
					colors_index = self.color_index_from_row_col(row, col);			
					
					color = self.fix_color_hash(colors[colors_index]);

					color_box = '<div class="' + self.settings.cell_class + '" data-color="'+color+'" style="background-color:'+color+';"></div>'
					
					html += color_box;			
				}
				html += '</div>';		
			}
			html += '</div>';
			
			return html;
  	};

  	return this.each(function() {   		
  		$(this).html(self.generate_html())
  	});  	
  }

  $.fn.palette.presets = {
  	thin: {
  		cols:3,  		
  		colors: ['f5a3b7', 'e73864', '95253d', 'e7a6c2', 'cb4e8e', '912a77', 'd3a7c5', 'a26096', '863c8a', 'bfa5c5', '7e619a', '693e89', 'ada3c8', '5d629c', '403f86', 'a7aad1', '4b669f', '3a4287', 'a9c9ee', '5486be', '196690', 'aed7eb', '6cbdd5', '008c93', 'afd6d1', '75baa2', '00957e', 'add1ab', '73b15b', '0c9557', 'bed6a0', '80b74d', '429554', 'dfe8a5', 'b4c93e', '77974c', 'fcf1a7', 'f6d728', '908d42', 'ffcfa6', 'f68e2c', '956831', 'f9aca6', 'e84b34', '952b2a', 'f397a1', 'e73844', '87212b', 'ffffff', 'eeeeee', 'dddddd', '999999', '555555', '000000']
  	}, 
  	strip: {
  		cols: 19,
  		colors: ['e73864', 'cb4e8e', 'a26096', '7e619a', '5d629c', '4b669f', '5486be', '6cbdd5', '75baa2', '73b15b', '80b74d', 'b4c93e', 'f6d728', 'f68e2c', 'e84b34', 'e73844', 'ffffff', '999999', '000000']
  	},
  	box: {
  		cols: 17, 
  		colors: ['fddce6', 'fadced', 'f6daee', 'eedcee', 'e4daef', 'dfe1f2', 'dfeefb', 'e1f5fb', 'e1f3f1', 'e2f1df', 'eaf3da', 'f8f9dd', 'fefce0', 'fff1dd', 'fee1dd', 'fcd4d8', 'ffffff', 'fac7d3', 'f5c7db', 'edc7dd', 'dfc7e0', 'd0c4e4', 'cbcbe8', 'c9e1f7', 'cdecf6', 'ceeae6', 'cee6ca', 'd7eac4', 'f0f3c8', 'fcf6ca', 'ffe7ca', 'fdcec8', 'f9b8bf', 'eeeeee', 'f5a3b7', 'e7a6c2', 'd3a7c5', 'bfa5c5', 'ada3c8', 'a7aad1', 'a9c9ee', 'aed7eb', 'afd6d1', 'add1ab', 'bed6a0', 'dfe8a5', 'fcf1a7', 'ffcfa6', 'f9aca6', 'f397a1', 'dddddd', 'ee839c', 'd689af', 'bf8bb3', 'a387b3', '8a82b3', '848bbb', '8ab7e2', '92cde2', '95c9bf', '95c18e', 'a9c980', 'd0da84', 'f9ea88', 'febd85', 'f38d85', 'ee7b83', 'cccccc', 'ea6a82', 'ce709f', 'b176a3', '8c6ea2', '716da2', '6b73a8', '73a1d3', '7fc1da', '83bfb5', '83ba73', '9abe5f', 'c3d269', 'f8e36d', 'fcaa6c', 'ee796c', 'eb626e', 'bbbbbb', 'e84b6f', 'cb6093', 'a5689c', '81659c', '67669e', '596aa0', '638fc4', '73bdd6', '7dbcaa', '7cb45f', '8aba4a', 'bccd41', 'f6da47', 'f99c48', 'ec644a', 'e94e57', 'aaaaaa', 'e73864', 'cb4e8e', 'a26096', '7e619a', '5d629c', '4b669f', '5486be', '6cbdd5', '75baa2', '73b15b', '80b74d', 'b4c93e', 'f6d728', 'f68e2c', 'e84b34', 'e73844', '999999', 'e72654', 'cd498d', 'a05e93', '7b5f99', '53609b', '46639d', '4e80b9', '6abbd4', '71b99f', '6fb059', '7eb44e', 'adc440', 'f1d41d', 'f18829', 'e7402e', 'de323d', '888888', 'd6254c', 'c24189', '9d5991', '765a96', '4e5d99', '445e9b', '437eb2', '55b4c8', '69b499', '68ac5a', '70af51', '9fc044', 'd5c428', 'd9802e', 'd73b2f', 'c8323a', '777777', 'ba2945', 'b13382', '914c8f', '6f4d90', '494e90', '405192', '3071a7', '29a5b5', '44ab8d', '48a85c', '61aa55', '8bb44a', 'b7ac3f', 'b97439', 'b93531', 'a72d37', '666666', '95253d', '912a77', '863c8a', '693e89', '403f86', '3a4287', '196690', '008c93', '00957e', '0c9557', '429554', '77974c', '908d42', '956831', '952b2a', '87212b', '555555', '79172b', '792465', '6e2e77', '513075', '382e72', '303871', '214e78', '01707a', '007a68', '107b49', '3b7b46', '657b43', '77733e', '795026', '77221e', '651c22', '333333', '541725', '591045', '511f5a', '3c1d5a', '231d58', '212258', '0e3b5a', '01535b', '015c46', '205c32', '335c2e', '475c2c', '5a5528', '593d1d', '541f0f', '431717', '000000']
  	}
  }
})(jQuery);