$(document).ready(function() {

  $('textarea').on('input', function() {
    const limit = 140;
    const charCount = $(this).val().length;
    const charLeft = limit - charCount;
    console.log(charLeft);
  })
});