(function($){var cache={},uuid=0;$.fn.once=function(id,fn){if(typeof id!='string'){if(!(id in cache)){cache[id]=++uuid;}
if(!fn){fn=id;}
id='jquery-once-'+ cache[id];}
var name=id+'-processed';var elements=this.not('.'+ name).addClass(name);return $.isFunction(fn)?elements.each(fn):elements;};$.fn.removeOnce=function(id,fn){var name=id+'-processed';var elements=this.filter('.'+ name).removeClass(name);return $.isFunction(fn)?elements.each(fn):elements;};})(jQuery);