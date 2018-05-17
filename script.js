
$(document).ready(() => {
  let current_ask= {
    id:'#question__one',
    clicked: false
  }
  let current_label="#null";

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
    switch (current_ask.id) {
      case '#question__one':
        $(current_ask.id).css({
          "height": "0",
          "width": "0",
          "opacity": "0",
          "right": "-300px"
        });
        current_ask.id = '#question__two';
        $(current_ask.id).css({
          "height": "initial",
          "right": "0",
          "width": "initial",
          "opacity": "1"
        });
        $('#test__progress').css("width", "20%");
        $('#test__progress').removeClass().addClass("progress2");
        break;
      case '#question__two':
        $(current_ask.id).css({
          "height": "0",
          "width": "0",
          "opacity": "0",
          "right": "-300px"
        });
        current_ask.id = '#question__three';
        $(current_ask.id).css({
          "height": "initial",
          "right": "0",
          "width": "initial",
          "opacity": "1"
        });
        $('#test__progress').css("width", "40%");
        $('#test__progress').removeClass("progress2").addClass("progress3")
        break;
      case '#question__three':
        $(current_ask.id).css({
          "height": "0",
          "width": "0",
          "opacity": "0",
          "right": "-300px"
        });
        current_ask.id = '#question__four';
        $(current_ask.id).css({
          "height": "initial",
          "right": "0",
          "width": "initial",
          "opacity": "1"
        });
        $('#test__progress').css("width", "60%");
        $('#test__progress').removeClass("progress3").addClass("progress4")
        break;
      case '#question__four':
        $(current_ask.id).css({
          "height": "0",
          "width": "0",
          "opacity": "0",
          "right": "-300px"
        });
        current_ask.id = '#question__five';
        $(current_ask.id).css({
          "height": "initial",
          "right": "0",
          "width": "initial",
          "opacity": "1"
        });
        $('#test__progress').css("width", "80%");
        $('#test__progress').removeClass("progress4").addClass("progress5")
        break;
      case '#question__five':
        $(current_ask.id).css({
          "height": "0",
          "width": "0",
          "opacity": "0",
          "right": "-300px"
        });
        current_ask.id="#test__over";
        $(current_ask.id).css({
          "opacity": "1",
          "right": "0px",
          "width": "initial",
          "height": "initial",
        });
        $('#test__progress').css("width", "100%");
        $('#test__progress').removeClass("progress5").addClass("progress6");
        break;

    }
  })

  $('#prev').on('click', () => {
    console.log(current_ask.id);
    switch (current_ask.id) {
      case '#question__two':
        $(current_ask.id).css({
          "opacity": "0",
          "right": "-300px",
          "width": "0",
          "height": "0"
        })
        current_ask.id = "#question__one";
        $(current_ask.id).css({
          "opacity": "1",
          "right": "0px",
          "width": "initial",
          "height": "initial",
        })
        $('#test__progress').css("width", "0%");
        $('#test__progress').removeClass().addClass("progress1")
        break;
      case "#question__three":
        $(current_ask.id).css({
          "opacity": "0",
          "right": "-300px",
          "width": "0",
          "height": "0"
        })
        current_ask.id = "#question__two";
        $(current_ask.id).css({
          "opacity": "1",
          "right": "0px",
          "width": "initial",
          "height": "initial",
        })
        $('#test__progress').css("width", "20%");
        $('#test__progress').removeClass().addClass("progress2");
        break;

      case "#question__four":
        $(current_ask.id).css({
          "opacity": "0",
          "right": "-300px",
          "width": "0",
          "height": "0"
        })
        current_ask.id = "#question__three";
        $(current_ask.id).css({
          "opacity": "1",
          "right": "0px",
          "width": "initial",
          "height": "initial",
        })
        $('#test__progress').css("width", "40%");
        $('#test__progress').removeClass().addClass("progress3");
        break;

      case "#question__five":
        $(current_ask.id).css({
          "opacity": "0",
          "right": "-300px",
          "width": "0",
          "height": "0"
        })
        current_ask.id = "#question__four";
        $(current_ask.id).css({
          "opacity": "1",
          "right": "0px",
          "width": "initial",
          "height": "initial",
        })
        $('#test__progress').css("width", "60%");
        $('#test__progress').removeClass().addClass("progress4");
        break;
      case "#test__over":
        $(current_ask.id).css({
          "opacity": "0",
          "right": "-300px",
          "width": "0",
          "height": "0"
        })
        current_ask.id = "#question__five";
        $(current_ask.id).css({
          "opacity": "1",
          "right": "0px",
          "width": "initial",
          "height": "initial",
        })
        $('#test__progress').css("width", "80%");
        $('#test__progress').removeClass().addClass("progress5");
        break;


    }
  })

  $('.input__container').on('click', event => {
    $(current_label).find(".radio__checked").css({
      "transform": "scale(0)"
    })
    $(current_label).css({
      "border":"2px solid #e1e1e1"
    })
    current_label = event.target;
     $(current_label).find(".radio__checked").css({
      "transform": "scale(1)"
    })
    $(current_label).css({
      "border": "2px solid #cfb2a3"
    })
  })
})


