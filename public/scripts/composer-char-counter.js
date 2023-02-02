$(document).ready(function(event) {

  $('textarea').on('input', function() {
    const limit = 140;
    const charCount = $(this).val().length;
    const charLeft = limit - charCount;

    if (charLeft < 0) {
      $('output').css('color', '#ff331f');
    } else {
      $('output').css('color', '#545149');
    }
    $('output').val(charLeft);
  })
});