$(document).ready(function() {

  $('textarea').on('input', function() {
    const limit = 140;
    const charCount = $(this).val().length;
    const charLeft = limit - charCount;

    if (charLeft < 0) {
      $('output').addClass('limit');
    } else {
      $('output').css('color', '#545149');
    }
    $('output').val(charLeft);
  })
});