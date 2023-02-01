$(document).ready(function() {

  $('textarea').on('input', function() {
    const limit = 140;
    const charCount = $(this).val().length;
    const charLeft = limit - charCount;

    if (charLeft < 0) {
      $('output').css('color', '#FF0000');
    } else {
      $('output').css('color', '#545149');
    }
    $('output').val(charLeft);
  })
});