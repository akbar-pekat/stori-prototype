var chatMessages =
[{
  name: "ms",
  msg: "Ini adalah cuplikan dari dialog cerita #RatuRCS2 di Instagram @relationshipchat.line",
  delay: 0,
  align: "center",
  showTime: false,
  time: "19:58",
  people: "Akbar"
},{
  name: "ms0",
  msg: "Hari ini",
  delay: 0,
  align: "center",
  showTime: false,
  time: "19:58",
  people: "Akbar"
},
{
  name: "ms1",
  msg: "Kak Ratu, butuh kerjaan gak?",
  delay: 1000,
  align: "left",
  showTime: true,
  time: "19:58",
  people: "Akbar"
},
{
  name: "ms2",
  msg: "secara ga langsung ngatain gue pengangguran ya lo?!",
  delay: 2000,
  align: "right",
  showTime: true,
  time: "19:58",
  people: "Akbar"
},
{
  name: "ms3",
  msg: "Diih engga 😑",
  delay: 1000,
  align: "left",
  showTime: true,
  time: "19:58",
  people: "Akbar"
},
{
  name: "ms4",
  msg: "Gue ada nemu lowongan kerjaan nih, butuh tenaga kerja lumayan banyak",
  delay: 3000,
  align: "left",
  showTime: true,
  time: "19:58",
  people: "Akbar"
},
{
  name: "ms5",
  msg: "Syaratnya min s1 terus ipknya harus tinggi, lo cocok deh pasti. Banyak bidang yg dicari",
  delay: 5000,
  align: "left",
  showTime: true,
  time: "19:58",
  people: "Akbar"
},
{
  name: "ms6",
  msg: "Dapet lowongan kerjaan dari mana? Lo ga ngelamar?",
  delay: 2000,
  align: "right",
  showTime: false,
  time: "19:58",
  people: "Akbar"
},
{
  name: "ms7",
  msg: "Gue blm lulus kak, lo aja nih, taruh lamaran disitu kali aja di interview terus keterima",
  delay: 5000,
  align: "left",
  showTime: false,
  time: "19:58",
  people: "Akbar"
},
{
  name: "ms8",
  msg: "Yaudah boleh deh mana alamatnya",
  delay: 1000,
  align: "right",
  showTime: true,
  time: "19:58",
  people: "Akbar"
},
{
  name: "ms9",
  msg: "Ntar gue kirim",
  delay: 1000,
  align: "left",
  showTime: true,
  time: "19:58",
  people: "Akbar"
}];

var chatDelay = 0;

function onRowAdded() {
  $('.chat-container').animate({
    scrollTop: $('.chat-container').prop('scrollHeight')
  });
};
$.each(chatMessages, function(index, obj) {
  chatDelay = chatDelay + 4000;
  chatDelay2 = chatDelay + obj.delay;
  chatDelay3 = chatDelay2 + 10;
  scrollDelay = chatDelay;
  chatTimeString = " ";
  msgname = "." + obj.name;
  msginner = ".messageinner-" + obj.name;
  spinner = ".sp-" + obj.name;
  chatTimeString = "<span class='message-time'><b>"+ obj.people + "</b>&nbsp;   &nbsp;" + obj.time + "</span>";
  $(".chat-message-list").append("<li class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden><span class='message-text'>" + obj.msg + "</span>" + chatTimeString +"</div></li>");
  $(msgname).delay(chatDelay).fadeIn();
  $(spinner).delay(chatDelay2).hide(1);
  $(msginner).delay(chatDelay3).fadeIn();
  setTimeout(onRowAdded, chatDelay);
  setTimeout(onRowAdded, chatDelay3);
  chatDelay = chatDelay3;
});
