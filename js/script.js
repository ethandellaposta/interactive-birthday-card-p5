$(document).ready(function() {

  //Pic Scroll Section Stuff
  for(var x=1; x<23; x++){
    $('.pic_holder').append("<img class='pic pic"+x.toString()+"' src='pics/img"+x.toString()+".PNG'>")
  }
  $('.pic_holder').append("<video class='pic pic23' autoplay loop muted><source src='pics/vid1.mp4' type='video/mp4'>Your browser does not support the video tag.</video>")
  $('.pic_holder').append("<video class='pic pic24' autoplay loop muted><source src='pics/vid2.mp4' type='video/mp4'>Your browser does not support the video tag.</video>")

  var current_pic = 1;
  var $pic = $('html').find(".pic" + current_pic.toString());
  $pic.addClass('current_pic');
  $('.next, .back').click(function(){
    var what = $(this).attr('class');
    if(what=='next'){
      if(current_pic == 24){
        current_pic= 1;
      }else{
        current_pic+=1
      }
    }else{
      if(current_pic == 1){
        current_pic= 24;
      }else{
        current_pic-=1;
      }
    }
    $pic.addClass('go_away')
    setTimeout(function() {
      $pic = $('html').find(".pic" + current_pic.toString());
      $('html').find(".pic").removeClass('current_pic');
      $('html').find(".pic").removeClass('go_away');
      $pic.addClass('current_pic');
    }, 300);
  });

  //Make pencil button shrink
  function shrink_button(){
    $('#b1').toggleClass('clicked_button');
    $('#more').removeClass('more_click');
    $('#b2').removeClass('margin-top');
    $('.fa-pencil').removeClass('middle');
    $('#b1').removeClass('button_wider');
    $('#b1').find('.color').remove();
    $('#more').empty();
    $('#more').append('>');
  }

  //Make pencil button expand (revealing colors)
  function expand_button(){
    $('#b1').toggleClass('clicked_button');
    $('#more').addClass('more_click');
    $('#b1').addClass('button_wider');
    $('#b2').addClass('margin-top');
    $('.fa-pencil').addClass('middle');
    $('#more').empty();
    $('#more').append('<');
    setTimeout(function() {
      $('#b1').append('<span class="color" id="blue"></span><span class="color" id="green"></span><span class="color" id="red"></span><span class="color" id="yellow"></span><span class="color" id="gray"></span><span class="color" id="black"></span><span class="color" id="HotPink"></span><span class="color" id="white"></span>')
    }, 150);
  }

  //Doodle buttons
  $('#b1').click(function() {
    $('#b1').toggleClass('clicked_button');
    $('#test').addClass('no_paint')
    setTimeout(function() {
    $('#test').removeClass('no_paint')
  }, 10);
  });

  //Choose Colors
  $('button').on('click','span.color',function() {
    $('.fa-pencil').css('color', this.id);
    $('#b1').addClass('clicked_button')
    shrink_button();
  });

  //Choose color toggling
  $('#more').click(function() {
    var more = document.getElementById('more').classList.contains('more_click');
    if (!more) {
      expand_button();
    } else {
      shrink_button();
    }
  });


});
