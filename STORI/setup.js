var chatMessages =
[{
  name: "ms0",
  msg: "Ini adalah cuplikan dialog dari cerita-obrolan berjudul TERNYATA.",
  delay: 0,
  align: "center",
  showTime: true,
  time: "11:58",
  people: ""
},{
  name: "ms1",
  msg: "Sayaang, kamu dimana?",
  delay: 1000,
  align: "left",
  showTime: true,
  time: "11:58",
  people: "Rara"
},
{
  name: "ms2",
  msg: "Kamu jadi ke Villa kan?",
  delay: 1000,
  align: "left",
  showTime: true,
  time: "11:58",
  people: "Rara"
},
{
  name: "ms3",
  msg: "Iyaa, ini udah dijalan kesana kok.",
  delay: 2000,
  align: "right",
  showTime: true,
  time: "11:59",
  people: "Dirga"
},
{
  name: "ms4",
  msg: "Ohh iyaa",
  delay: 0,
  align: "left",
  showTime: true,
  time: "11:59",
  people: "Rara"
},
{
  name: "ms5",
  msg: "Kamu lagi ngapain yang?",
  delay: 1000,
  align: "right",
  showTime: true,
  time: "11:59",
  people: "Dirga"
},
{
  name: "ms6",
  msg: "Lagi main HP aja nih..",
  delay: 1000,
  align: "left",
  showTime: true,
  time: "12:00",
  people: "Rara"
},
{
  name: "ms7",
  msg: "Ngeliatin fotoku yaaaa 😘",
  delay: 1000,
  align: "right",
  showTime: true,
  time: "12:00",
  people: "Dirga"
},
{
  name: "ms8",
  msg: "Gini nih, derita punya pacar narsis pake banget 😫",
  delay: 3000,
  align: "left",
  showTime: true,
  time: "12:00",
  people: "Rara"
},
{
  name: "ms9",
  msg: "Kok gitu sih sayaang.. 😥",
  delay: 1000,
  align: "right",
  showTime: true,
  time: "12:01",
  people: "Dirga"
},
{
  name: "ms10",
  msg: "Hahaha",
  delay: 0,
  align: "left",
  showTime: true,
  time: "12:01",
  people: "Rara"
},
{
  name: "ms11",
  msg: "Yaudah, jangan main HP lagi..",
  delay: 1000,
  align: "left",
  showTime: true,
  time: "12:01",
  people: "Rara"
},
{
  name: "ms12",
  msg: "Hati hati nyetirnya, jangan ngebut ngebut yaah 😘",
  delay: 2000,
  align: "left",
  showTime: true,
  time: "12:02",
  people: "Rara"
},
{
  name: "ms13",
  msg: "Siap",
  delay: 0,
  align: "right",
  showTime: true,
  time: "12:02",
  people: "Dirga"
},
{
  name: "ms14",
  msg: "Kamu kesana sendirian aja yang?",
  delay: 1000,
  align: "left",
  showTime: true,
  time: "12:02",
  people: "Rara"
},
{
  name: "ms15",
  msg: "Iya nih",
  delay: 0,
  align: "right",
  showTime: true,
  time: "12:03",
  people: "Dirga"
},
{
  name: "ms16",
  msg: "Kenapa? Mau ikut yaa?",
  delay: 1000,
  align: "right",
  showTime: true,
  time: "12:03",
  people: "Dirga"
},
{
  name: "ms17",
  msg: "Itu mah maunya kamu dong..",
  delay: 1000,
  align: "left",
  showTime: true,
  time: "12:03",
  people: "Rara"
},
{
  name: "ms18",
  msg: "Bersambung",
  delay: 1000,
  align: "center",
  showTime: true,
  time: "12:04",
  people: ""
}
];

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
