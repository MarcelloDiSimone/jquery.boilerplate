jQuery.PluginBoilerplate - A boilerplate for building your JQuery Plugin
==================================================

This is just a boilerplate template for building your own JQuery plugin upon. Overall it includes some best practices in
building JQuery plugins and provides a extremely flexible ground structure for configuring an use of the plugin. For example
the instance of the plugin class is stored as 'pluginname' in the data attribute
of the element (JQuery handles it internally). This data attribute is also used to implement some kind of singleton to
prevent a second initialisation. The plugin class itself provides a standard prototypical inheritance approach, so you're
able to easily extend the plugin with your personalized version. Inside of the constructor references to the HTML element
(this.el) and the appropriate JQuery element (this.$el) is set, for use throughout your code. Also the plugin defaults are exposed
to the global namespace, so you're able to change the default settings globally for all elements on a site. You can also
define configuration on the HTML element itself with a JSON string inside of the data-options attribute.
