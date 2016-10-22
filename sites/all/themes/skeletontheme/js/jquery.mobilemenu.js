(function($){var settings={combine:true,groupPageText:'Main',nested:true,prependTo:'body',switchWidth:480,topOptionText:'Select a page'},$menus,menuCount=0,uniqueLinks=[];function goTo(url){document.location.href=url;}
function menuExists(){return($('.mnav').length)?true:false;}
function isList($this){var pass=true;$this.each(function(){if(!$(this).is('ul')&&!$(this).is('ol')){pass=false;}});return pass;}
function isMobile(){return($(window).width()<settings.switchWidth);}
function getText($item){return $.trim($item.clone().children('ul, ol').remove().end().text());}
function isUrlUnique(url){return($.inArray(url,uniqueLinks)===-1)?true:false;}
function checkForDuplicates($menu){$menu.find(' > li').each(function(){var $li=$(this),link=$li.find('a').attr('href'),parentLink=function(){if($li.parent().parent().is('li')){return $li.parent().parent().find('a').attr('href');}else{return null;}};if($li.find(' ul, ol').length){checkForDuplicates($li.find('> ul, > ol'));}
if(!$li.find(' > ul li, > ol li').length){$li.find('ul, ol').remove();}
if(!isUrlUnique(parentLink(),uniqueLinks)&&isUrlUnique(link,uniqueLinks)){$li.appendTo($menu.closest('ul#mmnav').find('li:has(a[href='+parentLink()+']):first ul'));}
else if(isUrlUnique(link)){uniqueLinks.push(link);}
else{$li.remove();}});}
function combineLists(){var $menu=$('<ul id="mmnav" />');$menus.each(function(){$(this).children().clone().appendTo($menu);});checkForDuplicates($menu);return $menu;}
function createOption($item,$container,text){if(!text){$('<option value="'+$item.find('a:first').attr('href')+'">'+$.trim(getText($item))+'</option>').appendTo($container);}else{$('<option value="'+$item.find('a:first').attr('href')+'">'+text+'</option>').appendTo($container);}}
function createOptionGroup($group,$container){var $optgroup=$('<optgroup label="'+$.trim(getText($group))+'" />');createOption($group,$optgroup,settings.groupPageText);$group.children('ul, ol').each(function(){$(this).children('li').each(function(){createOption($(this),$optgroup);});});$optgroup.appendTo($container);}
function createSelect($menu){var $select=$('<select id="mm'+menuCount+'" class="mnav" />');menuCount++;if(settings.topOptionText){createOption($('<li>'+settings.topOptionText+'</li>'),$select);}
$menu.children('li').each(function(){var $li=$(this);if($li.children('ul, ol').length&&settings.nested){createOptionGroup($li,$select);}
else{createOption($li,$select);}});$select.change(function(){goTo($(this).val());}).prependTo(settings.prependTo);}
function runPlugin(){if(isMobile()&&!menuExists()){if(settings.combine){var $menu=combineLists();createSelect($menu);}
else{$menus.each(function(){createSelect($(this));});}}
if(isMobile()&&menuExists()){$('.mnav').show();$menus.hide();}
if(!isMobile()&&menuExists()){$('.mnav').hide();$menus.show();}}
$.fn.mobileMenu=function(options){if(options){$.extend(settings,options);}
if(isList($(this))){$menus=$(this);runPlugin();$(window).resize(function(){runPlugin();});}else{alert('mobileMenu only works with <ul>/<ol>');}};})(jQuery);