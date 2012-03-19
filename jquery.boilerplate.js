/*!*
 * PluginBoilerplate 0.1
 *
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and/or GPL (GPL-LICENSE.txt) licenses.
 *
 * @date $Date: 2011-11-27 14:03:28 +0100 (N, 27 lis 2011) $
 * @author Marcello di Simone
 * @version 0.0.1
 */

/**
 * @description This is a boilerplate for a jquery plugin.
 * @module JQSlider
 * @requires jQuery
 * @param {Object}       $            Aliased jQuery object or alternatively Zepto.
 * @param {HTMLElement}  windows      Reference to the window object
 * @param {HTMLElement}  document     Reference to the document object
 * @param {undefined}    undefined    this is just a way to assure that undefined has not been overloaded with some other value than undefined
 */
;(function( $, window, document, undefined ){

    /**
     * @description Plugin Constructor
     * @class JQSlider
     * @constructor
     * @param {HTMLElement} elem      element to be initialized
     * @param {Object}      options   Options for the Plugin Member
     */
    var PluginBoilerplate = function( elem, options ){
        /**
         * Stores a reference to the DOMElement of the module
         * @property el
         * @type Node
         */
        this.el = elem;
        /**
         * Stores a reference to the jQuery object of the module
         * @property $el
         * @type Object
         */
        this.$el = $(elem);
        /**
         * This next line takes advantage of HTML5 data attributes
         * to support customization of the plugin on a per-element
         * basis. For example,
         * <div class="item" data-options="{'defaults':{'autoinit':'true'}}"></div>
         * @property PluginBoilerplate#metadata
         * @type Object
         */
        this.metadata = $.parseJSON( ( this.$el.data( 'options' ) || "" ).replace(/'/g,"\"") );
        /**
         * Object with the configuration options of the module
         * @property PluginBoilerplate#o
         * @type Object
         */
        this.o = $.extend({}, this.defaults, options, this.metadata);

        if( this.o.autoinit !== false ) this.init();
    };

    PluginBoilerplate.prototype = {
        /**
         * Stores all configuration settings, this set will be extended with client configuration objects
         * @type Object
         * @property defaults
         */
        defaults:{
            /**
             * You can prevent an automatic initialisation of the slider if you want to run it later on.
             * @config autoinit
             * @type Boolean
             * @default true
             */
            autoinit: true
        },
        /**
         * Initialises the jqslider plugin and binds the available events to it. Finally it triggers the init event.
         * @public
         * @method init
         * @return Object
         */
        init:function(){
            // do initialisation stuff here
            return this;
        }
    };
    PluginBoilerplate.defaults = PluginBoilerplate.prototype.defaults;
    /**
     * @description Initialize each object of the jQuery set as an instance of JQSlider, sets a reference to the instance
     * in data-jqslider which is used as a singleton.
     * @name jqslider
     * @param {Object} options  Object with plugin settings
     * @return {Object} jQuery object
     */
    $.fn.pluginname = function(options) {
        return this.each(function(){
            if ( undefined == $( this ).data('pluginname') ) {
                $( this ).data('pluginname', new PluginBoilerplate( this, options) );
            }
        });
    };

    window.PluginBoilerplate = PluginBoilerplate;

})( window.jQuery || window.Zepto, window , document );
