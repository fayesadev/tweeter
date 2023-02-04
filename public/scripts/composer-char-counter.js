$(document).ready(function(event) {

  //Counts characters in text area and changes color of counter depnding on count
  $('textarea').on('input', function() {
    const limit = 140;
    const charCount = $(this).val().length;
    const charLeft = limit - charCount;
    
    if (charLeft < 0) {
      $('output').css('color', '#FF9F1C');
    } else {
      $('output').css('color', '#545149');
    }
    //Displays how many characters are left
    $('output').val(charLeft);
  })
});