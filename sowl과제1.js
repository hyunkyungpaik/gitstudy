var a = document.getElementById('hi');
a.addEventListener('click',function(){
  location.href="https://www.naver.com";
});
function time_output() {
  var times = document.getElementById('time');
  console.log(times);
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth()+1;
  var date = now.getDate();
  var hour = now.getHours();
  var minutes = now.getMinutes();
  var second = now.getSeconds();

  times.innerHTML = year +" 년" +month+ " 월" +date+ " 일"+ hour + " 시"+ minutes+" 분"+ second+ " 초";
  setTimeout(function(){
    time_output();
  },1000);
};
