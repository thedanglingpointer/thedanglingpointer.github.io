$(document).ready(function(){

$('#searchText').keyup(function(){
var matches=0;
$('.result').empty();
var searchText=$('#searchText').val().toLowerCase();
if(searchText.length==0)
$('.searchResults').hide();
$('.post').each(function(){
var postTitle=$(this).find('h1').html();
var postContent=$(this).find('h2').html();
if(postTitle.length>0 && (postTitle.toLowerCase().indexOf(searchText)>=0 || postContent.toLowerCase().indexOf(searchText)>=0) && searchText.length>0){
if(postTitle.toLowerCase().indexOf(searchText)>=0 && postContent.toLowerCase().indexOf(searchText)>=0){
matches=matches+2;
}
else
matches++;
$('.searchResults').show();
$('.result').append(formSearchResult(searchText,postTitle)+formSearchResult(searchText,postContent));
}
});
$('.searchResults span').html("<h2>"+matches+" match(es) found for "+searchText+"</h2>");
});
function formSearchResult(searchText,content){
var newContent="";
if(content.toLowerCase().indexOf(searchText)>=0){
while(content.toLowerCase().indexOf(searchText)>=0){
var matchedIndex=content.toLowerCase().indexOf(searchText);
var beforeMatchedContent=content.substring(0,matchedIndex);
var afterMatchedContent=content.substring(matchedIndex+searchText.length);
newContent= newContent+beforeMatchedContent+'<b>'+content.substring(matchedIndex,matchedIndex+searchText.length)+'</b>';
content=afterMatchedContent;
}
return newContent+afterMatchedContent;
}
else
return content
}
});