$(document).ready(function () {

    /**
     * 프로필이미지 마우스접근시 이모지 튀어나오기 
     * 
     * 참고 : 04_jquery > 09_css.html
     */
    $("#imgBtn").hover(e => {
        const $emoji = $(".emoji");

        const style1 = {
            "font-size" : "50px"
        };

        const style2 = {
            "font-size" : "30px"
        };

        $emoji.css("display", "block");

        $emoji.animate(style1, 900, "easeInOutCubic", () => {
            $emoji.animate(style2, 1000);
        });
    });

    /**
     * 이미지사진에 마우스 떠났을때 효과 
     */
    $("#imgBtn").mouseleave(e => {
        const $emoji = $(".emoji");
        $emoji.css("display", "none");
    });


    /**
     * 이미지사진에 마우스클릭시 사진 바뀌기 
     */
    $("#imgBtn").click(e => {
        const $imgBtn = $("#imgBtn");
        $imgBtn.attr("src", "../image/tube_profile_2.gif");
    });  

});