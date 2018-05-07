
$(document).ready(() => {
  let current_ask = '#question__one';

  $('.response__menu__icon').on('click', () => {
    switch ($('#nav').attr('class')) {
      case 'header__nav':
        $('#nav').attr('class', "header__responsive__nav");
        break;
      case "header__responsive__nav":
        $('#nav').attr('class', "header__nav");
        break;
    }

  })



  $('#response__menu__icon').on('click', () => {
    switch ($('#foot_nav').attr('class')) {
      case 'footer__nav':
        $('#foot_nav').attr('class', "footer__responsive__nav");
        break;
      case "footer__responsive__nav":
        $('#foot_nav').attr('class', "footer__nav");
        break;
    }
  })

  $("section").on('click', () => {
    if ($('#foot_nav').attr('class') == "footer__responsive__nav") {
      $('#foot_nav').attr('class', "footer__nav");
    }
  })

  $(".top__desc__test").on('click', () => {
    $(".container_test").css({
      transform: "scale(1)"
    })
    $(".test_div").css({
      transform: "scale(1)"
    })
    $("body").css({
      overflow: "hidden"
    })


  })

  $('.test__close').on('click', () => {
    $(".container_test").css({
      transform: "scale(0)"
    })
    $(".test_div").css({
      transform: "scale(0)"
    })

    $("body").css({
      overflow: "scroll"
    })

  })
  $('#next').on('click', () => {
    switch (current_ask) {
      case '#question__one':
        $(current_ask).css({
          "height":"0",
          "width":"0",
          "opacity":"0",
          "right":"-300px"
        });
        current_ask = '#question__two';
        $(current_ask).css({
          "height":"initial",
          "right": "0",
          "width":"initial",
          "opacity":"1"
        });
        $('#test__progress').css("width", "20%");
        $('#test__progress').removeClass().addClass("progress2");
        break;
      case '#question__two':
        $(current_ask).css({
          "height":"0",
          "width":"0",
          "opacity":"0",
          "right":"-300px"
        });
        current_ask = '#question__three';
        $(current_ask).css({
          "height":"initial",
          "right": "0",
          "width":"initial",
          "opacity":"1"
        });
        $('#test__progress').css("width", "40%");
        $('#test__progress').removeClass("progress2").addClass("progress3")
        break;
      case '#question__three':
        $(current_ask).css({
          "height":"0",
          "width":"0",
          "opacity":"0",
          "right":"-300px"
        });
        current_ask = '#question__four';
        $(current_ask).css({
          "height":"initial",
          "right": "0",
          "width":"initial",
          "opacity":"1"
        });
        $('#test__progress').css("width", "60%");
        $('#test__progress').removeClass("progress3").addClass("progress4")
        break;
      case '#question__four':
        $(current_ask).css({
          "height":"0",
          "width":"0",
          "opacity":"0",
          "right":"-300px"
        });
        current_ask = '#question__five';
        $(current_ask).css({
          "height":"initial",
          "right": "0",
          "width":"initial",
          "opacity":"1"
        });
        $('#test__progress').css("width", "80%");
        $('#test__progress').removeClass("progress4").addClass("progress5")
        break;
      case '#question__five':
        $(current_ask).css({
          "height":"0",
          "width":"0",
          "opacity":"0",
          "right":"-300px"
        });
        current_ask = '#question__one';
        $(current_ask).css({
          "height":"initial",
          "right": "0",
          "width":"initial",
          "opacity":"1"
        });
        $('#test__progress').css("width", "100%");
        $('#test__progress').removeClass("progress5").addClass("progress6")
        break;

    }
  })
})


