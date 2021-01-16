function canvas() {
  $('canvas').attr('id', 'canvas');
  $('#down').removeClass('hidden')
};

function hidden() {
  $('#op-qrcode').empty()
};

$('#make').on('click', function(){
  hidden();
  var input = $('#ip-qrcode').val();//inputのvalueを取得
  var size = $('#size').val();
  var text = unescape(encodeURIComponent(input));//日本語対応
  if (input == '') {
    alert('文字を入力してください。\nPlease enter the characters.');
  } else if (size > 0) {
    $('#op-qrcode').qrcode({text: text, width: size, height: size});
    canvas();
  } else {
    $('#op-qrcode').qrcode({text: text});
    canvas();
  }
});

$('#500').on('click', function(){
  hidden();
  var input = $('#ip-qrcode').val();//inputのvalueを取得
  var text = unescape(encodeURIComponent(input));//日本語対応
  if (input == '') {
    alert('文字を入力してください。\nPlease enter the characters.');
  } else {
    $('#op-qrcode').qrcode({text:text, width:500, height:500});
    canvas();
  }
});

$('#1000').on('click', function(){
  hidden();
  var input = $('#ip-qrcode').val();//inputのvalueを取得
  var text = unescape(encodeURIComponent(input));//日本語対応
  if (input == '') {
    alert('文字を入力してください。\nPlease enter the characters.');
  } else {
    $('#op-qrcode').qrcode({text:text, width:1000, height:1000});
    canvas();
  }
});

$('#1500').on('click', function(){
  hidden();
  var input = $('#ip-qrcode').val();//inputのvalueを取得
  var text = unescape(encodeURIComponent(input));//日本語対応
  if (input == '') {
    alert('文字を入力してください。\nPlease enter the characters.');
  } else {
    $('#op-qrcode').qrcode({text:text, width:1500, height:1500});
    canvas();
  }
});

function download() {
  var canvas = document.getElementById('canvas');
  var link = document.getElementById('link');
  link.href = canvas.toDataURL('image/png');
  link.download = 'qrcode.png';
  link.click();
};
