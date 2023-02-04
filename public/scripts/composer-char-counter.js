$(document).ready(function(event) {

  $('textarea').on('input', function() {
    const limit = 140;
    const charCount = $(this).val().length;
    const charLeft = limit - charCount;

    if (charLeft < 0) {
      $('output').css('color', '#FF9F1C');
    } else {
      $('output').css('color', '#FFFFFF');
    }
    $('output').val(charLeft);
  })
});