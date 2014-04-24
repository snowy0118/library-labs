jQuery(document).ready(function($) {

  var doWink = function(target){
    $(target).toggleClass("icon-emo-happy").toggleClass("icon-emo-wink");
  }


  $("aside h3").hover(function(){
    doWink($("i",this));
  },function(){
    doWink($("i",this));
  });

});