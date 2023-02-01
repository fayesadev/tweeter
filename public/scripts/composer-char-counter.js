$(document).ready(function() {

  // $('textarea').click(function() {
  //   console.log("I was clicked!");
  //   console.log(this);
  // })

  // $('textarea').blur(function() {
  //   console.log("I was blurred");
  //   console.log(this);
  // })

  // $('textarea').keydown(function() {
  //   console.log("keydown");
  //   console.log(this);
  // })

  // $('textarea').keyup(function() {
  //   console.log("keyup");
  //   console.log(this);
  // })

  // $('textarea').keypress(function () {
  //   console.log("keypress");
  //   console.log(this);
  // })

  // $('textarea').change(function() {
  //   console.log("change");
  //   console.log(this);
  // })

  $('textarea', this).on('input',function() {
    console.log("input");
    console.log();
  })
});