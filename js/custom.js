$(document).ready(function(){

injectMenu();

$(".navlink").hover(function(){
$('li').removeClass('active');
$(this).addClass('active');
});


});

function injectMenu(){
var navigationMenu="<nav class='navbar navbar-inverse navbar-fixed-top'><div class='container-fluid'><div class='mobile-menu'><span class='glyphicon glyphicon-menu-hamburger'></span></div><div class='navbar-header'><a class='navbar-brand' href='/main.html'>mind blogging<span class='glyphicon glyphicon-leaf'></span></a></div><ul class='nav navbar-nav'><li class='navlink active'><a href='/main.html'>Home</a></li><li class='navlink'><a href='#'>Stories</a></li><li class='navlink'><a href='/submit.html'>Submit Your Posts</a></li><li class='navlink'><a href='#'>Gallery</a></li></ul><div class='searchbar'><input type='text' placeholder='Search for posts....'></input><span class='glyphicon glyphicon-search search-icon'></span></div></div></nav>";

$('#menu').html(navigationMenu);

}