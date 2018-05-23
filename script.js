
$(document).ready(() => {
  let current_ask = {
    id: '#question__one',
    clicked: false
  }
  let current_label = "#null";

  $('.relat').on('click', () => {
    $(".hidden__menu").toggle();
  })
  $('.scroll').click(function () { // ловим клик по ссылке с классом go_to
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
    }
    return false; // выключаем стандартное действие
  });

  $(".top__desc__test").on('click', () => {
    $(".container_test").css({
      transform: "scale(1)"
    })
    $(".test_div").css({
      transform: "scale(1)"
    })
    $("body").css({
      "overflow-x": "hidden"
    })


  })

  $('.test__close').on('click', () => {
    $(".container_test").css({
      transform: "scale(0)"
    })
    $(".test_div").css({
      transform: "scale(0)"
    })

    $("main").css({
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
        $('#progspan').removeClass().addClass("progress2");
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
        $('#progspan').removeClass("progress2").addClass("progress3")
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
        $('#progspan').removeClass("progress3").addClass("progress4")
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
        $('#progspan').removeClass("progress4").addClass("progress5")
        break;
      case '#question__five':
        $(current_ask.id).css({
          "height": "0",
          "width": "0",
          "opacity": "0",
          "right": "-300px"
        });
        current_ask.id = "#test__over";
        $(current_ask.id).css({
          "opacity": "1",
          "right": "0px",
          "width": "initial",
          "height": "initial",
        });
        $('#test__progress').css("width", "100%");
        $('#progspan').removeClass("progress5").addClass("progress6");
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
        $('#progspan').removeClass().addClass("progress1")
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
        $('#progspan').removeClass().addClass("progress2");
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
        $('#progspan').removeClass().addClass("progress3");
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
        $('#progspan').removeClass().addClass("progress4");
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
        $('#progspan').removeClass().addClass("progress5");
        break;


    }
  })

  $('.input__container').on('click', event => {
    $(current_label).find(".radio__checked").css({
      "transform": "scale(0)"
    })
    $(current_label).css({
      "border": "2px solid #e1e1e1"
    })
    current_label = event.currentTarget;
    $(current_label).find(".radio__checked").css({
      "transform": "scale(1)"
    })
    $(current_label).css({
      "border": "2px solid #cfb2a3"
    })
  })

  $('#show__hidden__why').on('click', () => {
    console.log('thats o`kay');
    switch ($('.why__item.visible').css("display")) {
      case "none":
        $('.why__item.visible').css({
          display: "block",
          top: "-500px",
        });
        setTimeout(() => {
          $('.why__item.visible').css("top", "0");
        }, 10);
        $('#show__hidden__why').text("Cкрыть");
        break;
      default:
        $('.why__item.visible').css({
          display: "none",
          top: "-500px;",
        });
        $('#show__hidden__why').text("Показать все");
    }
  })

  $('#show__hidden__our').on('click', () => {
    switch ($('.item__work.visible').css("display")) {
      case "none":
        $('.item__work.visible').css({
          display: "block",
          top: "-500px",
        });
        setTimeout(() => {
          $('.item__work.visible').css("top", "0");
        }, 10);
        $('#show__hidden__our').text("Cкрыть");
        break;
      default:
        $('.item__work.visible').css({
          display: "none",
          top: "-500px;",
        });
        $('#show__hidden__our').text("Показать все");
    }
  })

  $('#show__hidden__fb').on('click', () => {
    switch ($('.feedbacks__item.visible').css("display")) {
      case "none":
        $('.feedbacks__item.visible').css({
          display: "block",
          top: "-500px",
        });
        setTimeout(() => {
          $('.feedbacks__item.visible').css("top", "0");
        }, 10);
        $('#show__hidden__fb').text("Cкрыть");
        break;
      default:
        $('.feedbacks__item.visible').css({
          display: "none",
          top: "-500px;",
        });
        $('#show__hidden__fb').text("Показать все");
    }
  })

  $("#show__span").on('click', () => {
    switch ($('.pers.visible').css("display")) {
      case "none":
        $('.pers.visible').css({
          display: "inline",
        });
        $('#show__span').text("Cкрыть ^");
        break;
      default:
        $('.pers.visible').css({
          display: "none",
          top: "-500px;",
        });
        $('#show__span').text("Подробнее ˅");
    }
  })

  $("#attention__span").on('click', () => {
    switch ($('.att.visible').css("display")) {
      case "none":
        $('.att.visible').css({
          display: "inline",
        });
        $('#attention__span').text("Cкрыть ^");
        break;
      default:
        $('.att.visible').css({
          display: "none",
          top: "-500px;",
        });
        $('#attention__span').text("Подробнее ˅");
    }
  })
})






