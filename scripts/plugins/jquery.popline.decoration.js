/*
  jquery.popline.decoration.js 1.0.0

  Version: 1.0.0
  Updated: Sep 10th, 2014

  (c) 2014 by kenshin54
*/
;(function($) {

  $.popline.addButton({
    bold: {
      iconClass: "format_bold",
      mode: "edit",
      action: function(event) {
        document.execCommand("bold");
      }
    },

    italic: {
      iconClass: "format_italic",
      mode: "edit",
      action: function(event) {
        document.execCommand("italic");
      }
    },

    strikethrough: {
      iconClass: "format_strikethrough",
      mode: "edit",
      action: function(event) {
        document.execCommand("strikethrough");
      }
    },

    underline: {
      iconClass: "format_underline",
      mode: "edit",
      action: function(event) {
        document.execCommand("underline");
      }
    }

  });
})(jQuery);
