// ==UserScript==
// @id             iitc-plugin-highlight-ornaments@jonatkins
// @name           IITC plugin: hightlight portals with ornaments
// @category       Highlighter
// @version        0.0.1.@@DATETIMEVERSION@@
// @description    [@@BUILDNAME@@-@@BUILDDATE@@] Use the portal fill color to denote portals with additional 'ornament' markers. e.g. Anomaly portals
@@METAINFO@@
// ==/UserScript==

@@PLUGINSTART@@

// PLUGIN START ////////////////////////////////////////////////////////

// use own namespace for plugin
window.plugin.portalHighlightOrnaments = function() {};

window.plugin.portalHighlightOrnaments.highlight = function(data) {
  var d = data.portal.options.data;
  if(d.ornaments && d.ornaments.length > 0) {
    var fill_opacity = 0.75;
    var color = 'red';

    // TODO? match specific cases of ornament name and/or portals with multiple ornaments, and highlight in different colours?

    var params = {fillColor: color, fillOpacity: fill_opacity};
    data.portal.setStyle(params);
  }
}

var setup =  function() {
  window.addPortalHighlighter('Ornaments (anomaly portals)', window.plugin.portalHighlightOrnaments.highlight);
}

// PLUGIN END //////////////////////////////////////////////////////////

@@PLUGINEND@@
