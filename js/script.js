$(document).ready(function() {

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
