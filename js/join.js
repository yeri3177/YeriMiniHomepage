/**
 * 좋아하는것 > "선택해제" 체크박스 기능
 * 참고 : 03_javascript >  03_access_dom.html  
 */
function favNotChk(){
    let favAll = document.getElementsByName("favorite");

    for(let i = 0; i < favAll.length; i++){
        let favorite = favAll[i];
        favorite.checked = false;
    }
    checkAll.checked = false;
    notCheck.checked = false;
}

/* 좋아하는것 > "전체선택" 체크박스 기능 */
function favAllChk(){
    let elem = document.getElementById("checkAll");

    let favAll = document.getElementsByName("favorite");
    for(let i = 0; i < favAll.length; i++){
        let favorite = favAll[i];
        favorite.checked = elem.checked;
    }
}

/*  이메일주소 자동완성 */
function emailSelect() {
    var emailAddress = document.getElementById("emailAddress");
    var emailSelect = document.getElementById("emailSelect");
  
    var idx = emailSelect.options.selectedIndex;
    var val = emailSelect.options[idx].value;
  
    emailAddress.value = val;
  
    if(idx>=1 && idx <=3){
      emailAddress.disabled = true;
    }else {
      emailAddress.disabled = false;
      emailAddress.focus();
    }
  }

/**
 * 정규식 검사 함수 
 * regExp : 정규표현식
 * el : 유효성검사할 요소 
 * msg : 경고메세지 
 */
 function regExpTest(regExp, el, msg){
  if(regExp.test(el.value)) return true;
  
  //적합한 문자열이 아닌 경우
  alert(msg);
  el.value="";
  el.focus();
  return false;
}

/**
* 비밀번호 일치여부 
*/
function isEqualPwd(){
  if(pwd.value == pwdChk.value){
      return true;
  }
  else{
    alert("비밀번호가 일치하지 않습니다.");
    pwd.select(); 
  }
}

/**
 * 비밀번호 일치한지 바로 확인 
 * 참고 : https://ungdoli0916.tistory.com/298
 */
 $("#pwdChk").focusout(function () {
  var pwd1 = $("#pwd").val();
  var pwd2 = $("#pwdChk").val();
  var text = $("#pwdText");

  if(pwd1 != pwd2) {
    pwdText.innerText = "비밀번호가 일치하지 않습니다.";
    text.css("color", "red");
  }
  else if(pwd1 == pwd2) {
    pwdText.innerText = "비밀번호가 일치합니다.";
    text.css("color", "blue");
  }
});

/**
 * 유효성 검사
 */
function joinform_check() {
  var userId = document.getElementById("userId"); //아이디
  var pwd = document.getElementById("pwd"); //비밀번호
  var pwdChk = document.getElementById("pwdChk"); //비밀번호재확인 
  var userName = document.getElementById("userName"); //이름
  var gender = document.getElementById("gender"); //성별
  var emailId = document.getElementById("emailId"); //이메일아이디 
  var emailAddress = document.getElementById("emailAddress"); //이메일주소 
  var favorite = document.getElementsByName("favorite"); //좋아하는것 
  var userInfoCol = document.getElementById("userInfoCol"); //개인정보수집동의 
  var mailReceive = document.getElementById("mailReceive"); //메일수신여부 

  //1.아이디검사
  //첫글자는 반드시 영소문자로 이루어지고, 
  //숫자가 하나이상 포함되어야함.
  //아이디의 길이는 4~12글자사이
  var regExp1 = /^[a-z][a-z\d]{3,11}$/;
  var regExp2 = /[0-9]/;
  if(!regExpTest(regExp1
                ,userId
                ,"아이디는 영소문자로 시작하는 4~12글자입니다."))
      return false;
  if(!regExpTest(regExp2
                ,userId
                ,"아이디는 숫자를 하나이상 포함하세요."))
      return false;

  //2.비밀번호 확인 검사
  //숫자/문자/특수문자/ 포함 형태의 8~15자리 이내의 암호 정규식 
  //전체길이검사 /^.{8,15}$/
  //숫자하나 반드시 포함 /\d/ 
  //영문자 반드시 포함 /[a-zA-Z]/
  //특수문자 반드시 포함  /[\*!&]/
      
  var regExpArr = [/^.{8,15}$/, /\d/, /[a-zA-Z]/, /[\*!&]/];

  for(let i = 0; i < regExpArr.length; i++){
      if(!regExpTest(regExpArr[i], pwd, "비밀번호는 8~15자리 숫자/문자/특수문자를 포함해야합니다.")){
          return false;
      }
  }

  //비밀번호일치여부
  if(!isEqualPwd()){
      
      return false;
  }

  //3.이름검사
  //한글2글자 이상만 허용. [가-힣] 으로 해도되긴 하지만 자음만(ㄱㄴㄷㄹ)있으면 필터링이 안됨
  var regExp3 = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,}$/;
  if(!regExpTest(regExp3,userName,"한글2글자이상 입력하세요."))
      return false;

  //이메일주소 검사 
  if(emailId.value == ""){
    alert("이메일 주소를 입력하세요.");
    emailId.focus();
    return false;
  }

  if(emailAddress.value == ""){
    alert("@ 이후의 이메일 주소를 입력하세요.");
    emailAddress.focus();
    return false;
  }

  // 개인정보수집동의 체크 
  if(!userInfoCol.checked){
    alert("개인정보 수집 동의에 체크해주세요.");
    return false;
  }

  // alert("입력완료");

  //입력값 전송
  document.joinForm.submit();
}

/**
 * 회원가입폼 전송 
 */
$(document.joinForm).submit(e => {
  
  //조인함수 실행
  joinMember();
});


/**
 * 생성자 함수 
 */
function MemberEntry(userId,pwd,userName,gender,emailId,emailAddress,
                    mailReceive,userInfoCol,favorite1,favorite2,favorite3,favorite4){
  this.userId = userId; //아이디
  this.pwd = pwd; //비밀번호 
  this.userName = userName; //이름 
  this.gender = gender; //성별
  this.email = emailId+"@"+emailAddress; //이메일 
  this.mailReceive = mailReceive; //메일수신여부  
  this.userInfoCol = userInfoCol; //개인정보수집동의 
  this.favorite = new Array(favorite1, favorite2, favorite3, favorite4);
  this.joindate = Date.now();
}

/**
 * localStorage에 회원 저장 
 */
const joinMember = () => {
  //gender value값 가져오기 
  var gender = $("input[name='gender']:checked").val();

  //favorite value값 가져오기 
  var favorite1 = $("input[id='favorite1']:checked").val();
  var favorite2 = $("input[id='favorite2']:checked").val();
  var favorite3 = $("input[id='favorite3']:checked").val();
  var favorite4 = $("input[id='favorite4']:checked").val();

  //메일수신여부 -> O,X 구분하기 
  var mailAgree = $("input[id='mailReceive']:checked").val();
  var mailVal = (mailAgree==null)?"X":"O";

  //개인정보수집동의여부 -> O,X 구분하기 
  var userinfoAgree = $("input[id='userInfoCol']:checked").val();
  var userinfoVal = (userinfoAgree==null)?"X":"O";


  //객체생성 
  const member = new MemberEntry(userId.value, pwd.value, userName.value, gender, emailId.value, emailAddress.value,
    mailVal, userinfoVal, favorite1, favorite2, favorite3, favorite4);
  
  const members = JSON.parse(localStorage.getItem('members')) || [];
  
  members.push(member);
  
  localStorage.setItem('members', JSON.stringify(members));

  // 가입완료축하 함수실행 
  joinComplete();
};

/**
 * 가입완료 및 축하 
 * 참고 : 03_javascript > 15_window.html
 */
const joinComplete = () => {

  //페이지이동
  $(location).attr("href", "../html/index.html");

  //가입축하 팝업창 뜨기 
  joinpopup();
}

/**
 * 가입축하 팝업창 생성 
 */
const joinpopup = () => {

  const popup = open("../html/popup.html", "", "width=500, height=310, top=300, left=550");
};