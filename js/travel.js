/**
 * 하트 클릭 했을때 아이콘 변경하기 
 */
 $(".fa-heart").on("click", e => { //하트아이콘 클릭했을때 
    if($(e.target).hasClass("far")){ //빈하트이면 
      $(e.target).attr('class','fas fa-heart'); //색칠하트로 
    }
    else{
      $(e.target).attr('class','far fa-heart'); //빈하트로 
    }
});

/**
 * 이미지 슬라이드
 */
$(document).ready(function(){
    $('.bxslider').bxSlider();
});