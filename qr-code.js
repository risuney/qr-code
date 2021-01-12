$('#make').on('click', function(){
  var input = $('#ip-qrcode').val();//inputのvalueを取得
  if (input == '') {
    alert('文字を入力してください。\nPlease enter the characters.');
  } else {
    $('#op-qrcode').qrcode({text: input});
  }
})
