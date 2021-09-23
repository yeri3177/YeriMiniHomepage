/**
 * 날짜 포맷 (유닉스타임(1632072249281) -> 날짜포맷(2021/09/20 02:24))
 */
 const datetimeFormatter = (dt) => {
    const d = (n) => n.toString().padStart(2, 0);
    return `${dt.getFullYear()}/${d(dt.getMonth() + 1)}/${d(dt.getDate())} ${d(dt.getHours())}:${d(dt.getMinutes())}`; 
}

/**
 * 회원조회하기
 */
const displayMember = (members = JSON.parse(localStorage.getItem("members"))) => {
  let $tbody = $("#membertable tbody");
  $tbody.empty();

  //값 있는지 확인
  if(members == null){
    alert("조회할 회원이 없습니다.");
    return;
  }

  // $.each(members?.reverse(), function(idx, member){ 
  //가입순으로 조회하기 
  $.each(members, function(idx, member){
    let joindate = new Date(member.joindate);

    let tr = `<tr>
    <td>${idx + 1}</td> 
    <td>${member.userId}</td>
    <td>${member.userName}</td>
    <td>${member.gender}</td>
    <td>${member.email}</td>
    <td>${member.favorite}</td>
    <td>${member.mailReceive}</td>
    <td>${member.userInfoCol}</td>
    <td>${datetimeFormatter(new Date(member.joindate))}</td>
    <td><button class="memDel">삭제</button></td>
    </tr>`

    $tbody.append(tr);
  });
};

/**
 * 회원전체삭제
 */
const deleteAllMember = (members = JSON.parse(localStorage.getItem("members"))) => {
  //값 있는지 확인
  if(members == null){
    alert("회원이 존재하지 않습니다.");
    return;
  }
  //삭제여부묻기
  const con = confirm("정말로 회원전체삭제를 하시겠습니까?");
  if(!con) return;

  //삭제하기
  localStorage.removeItem("members");

};