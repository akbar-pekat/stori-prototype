$(document).ready(function() {
  $(".chatbox-name").text("Bro");
  $('.chatbox-image').attr('src','asset/img/user.png');
  window.scrollTo(0,document.body.scrollHeight);

  $('.chat').delay(0).queue(function(next) {
    $(".chat").append('<div class="author messages"><div class="message">Selamat datang di STORYCHAT.<br>Ini adalah tampilan versi BETA untuk cerita yang akan ditampilkan dalam bentuk chatting.</div></div>');
    window.scrollTo(0,document.body.scrollHeight);
    next();
  });

  $('.chat').delay(5000).queue(function(next) {
    $(".chat").append('<div class="me messages"><div class="message">Bro</div></div>');
    window.scrollTo(0,document.body.scrollHeight);
    next();
  });
  $('.chat').delay(2500).queue(function(next) {
    $(".chat").append('<div class="me messages"><div class="message">p</div></div>');
    window.scrollTo(0,document.body.scrollHeight);
    next();
  });
  $('.chat').delay(2500).queue(function(next) {
    $(".chat").append('<div class="me messages"><div class="message">p</div></div>');
    window.scrollTo(0,document.body.scrollHeight);
    next();
  });
  $('.chat').delay(2500).queue(function(next) {
    $(".chat").append('<div class="me messages"><div class="message last">Bro</div></div>');
    window.scrollTo(0,document.body.scrollHeight);
    next();
  });

  $('.chat').delay(2500).queue(function(next) {
    $(".chat").append('<div class="her messages"><div class="message">Oi</div></div>');
    window.scrollTo(0,document.body.scrollHeight);
    next();
  });
  $('.chat').delay(2500).queue(function(next) {
    $(".chat").append('<div class="her messages"><div class="message last">yah?</div></div>');
    window.scrollTo(0,document.body.scrollHeight);
    next();
  });

  $('.chat').delay(2500).queue(function(next) {
    $(".chat").append('<div class="me messages"><div class="message">tdk ji bro</div></div>');
    window.scrollTo(0,document.body.scrollHeight);
    next();
  });
  $('.chat').delay(2500).queue(function(next) {
    $(".chat").append('<div class="me messages"><div class="message last">ngetest ja</div></div>');
    window.scrollTo(0,document.body.scrollHeight);
    next();
  });

  $('.chat').delay(2500).queue(function(next) {
    $(".chat").append('<div class="her messages"><div class="message">ah elah</div></div>');
    window.scrollTo(0,document.body.scrollHeight);
    next();
  });
  $('.chat').delay(2500).queue(function(next) {
    $(".chat").append('<div class="her messages"><div class="message last">kira napa lo</div></div>');
    window.scrollTo(0,document.body.scrollHeight);
    next();
  });

  $('.chat').delay(2500).queue(function(next) {
    $(".chat").append('<div class="me messages"><div class="message">maaf</div></div>');
    window.scrollTo(0,document.body.scrollHeight);
    next();
  });
  $('.chat').delay(2500).queue(function(next) {
    $(".chat").append('<div class="me messages"><div class="message last">jeljar disini</div></div>');
    window.scrollTo(0,document.body.scrollHeight);
    next();
  });

});
