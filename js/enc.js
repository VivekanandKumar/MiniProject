$(".enc-btn").click(function () {
  var shift = Number($("#shift").val());
  var cipher = $("#plain-text").val().toLowerCase();
  var result = "";
  var alphabet = "abcdefghijklmnopqrstuvwxyz";

  if (shift == "") {
    alert("Enter a shift value");
    return;
  } else if (cipher == "") {
    alert("Enter plain text");
  }
  if (shift > 26) {
    shift = shift % 26;
  } else if (shift < 0) {
    shift = (shift % 26) + 26;
  }
  for (var i = 0; i < cipher.length; i++) {
    var ch = cipher.charAt(i);
    if (/[a-zA-Z]/.test(ch)) {
      var index = alphabet.indexOf(ch);
      var x = index + shift;
      if (x > 25) {
        x = index - (26 - shift);
        result = result + alphabet.charAt(x);
      } else {
        result = result + alphabet.charAt(x);
      }
    } else {
      result = result + ch;
    }
  }
  $("#cipher-text").val(result);
});
