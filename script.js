$(document).ready(() => {
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

})






