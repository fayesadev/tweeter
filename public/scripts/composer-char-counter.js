$(document).ready(function() {

  $('textarea').click(()=> {
    console.log("I was clicked!");
  })

  $('textarea').blur(()=> {
    console.log("I was blurred");
  })

  $('textarea').keydown(()=> {
    console.log("keydown");
  })

  $('textarea').keyup(()=> {
    console.log("keyup");
  })

  $('textarea').keypress(()=> {
    console.log("keypress");
  })

  $('textarea').change(()=> {
    console.log("change");
  })
  $('textarea').input(()=> {
    console.log("input");
  })
});