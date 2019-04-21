"use strict";

/* Functions */
function leadZero(n) {
  return (n < 10 ? '0' : '') + n;
}

function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

function equalHeight(group) {
  if (jQuery(window).width() > '768') {
    var tallest = 0;
    jQuery(group).each(function () {
      var thisHeight = jQuery(this).css('height', '').outerHeight();
      if (thisHeight > tallest) {
        tallest = thisHeight;
      }
    });
    jQuery(group).css('height', tallest);
  } else {
    jQuery(group).css('height', '');
  }
}

jQuery(window).on('load', function () {
  jQuery('body').addClass('loaded');

  jQuery(window).trigger('resize').trigger('scroll');

  setTimeout(function () {
    jQuery(window).trigger('resize').trigger('scroll');
  }, 700)
});


jQuery(document).ready(function () {

  /* Navigation Events */

  jQuery(document).on('click', '.nav-butter.hidden_menu', function () {
    if (jQuery(this).hasClass('active')) {
      jQuery(this).removeClass('active').parent().find('.navigation').removeClass('active');
    } else {
      jQuery(this).addClass('active').parent().find('.navigation').addClass('active');
    }
  }).on('click', '.side-navigation a', function(e) {
    var $el = jQuery(this),
        $parent = $el.parent();

    if($parent.hasClass('menu-item-has-children') && !$parent.hasClass('active')) {
      e.preventDefault();

      $parent.addClass('hide active').siblings().addClass('hide');
      $el.parents('.sub-menu').addClass('opened');
    }
  }).on('click', '.side-navigation .sub-menu > .back', function() {
    var $el = jQuery(this);

    $el.parent().parent().removeClass('hide active').siblings().removeClass('hide');
    $el.parent().parent().removeClass('opened').parent().removeClass('opened');
  }).find('.side-navigation .sub-menu').prepend('<li class="back free-basic-ui-elements-left-arrow"></li>');

  jQuery(window).on('load resize', function () {
    var window_height = jQuery(window).height();

    jQuery('.full-height').css('height', window_height);
  });

  /* Mobile Menu */
  
  jQuery('.navigation .menu-item-has-children > a').on("click", function(){
    if(jQuery(window).width() < 992) {
      if(!jQuery(this).hasClass('current')) {
        jQuery(this).addClass('current').parent().children('.sub-menu').slideDown().siblings().children('.sub-menu').slideUp();
        return false;
      }
    }
  });

  /* Focus on Input */

  jQuery('.input-row input.style1, .input-row textarea.style1').on('focusin', function () {
    jQuery(this).parents('.input-row').addClass('focus');
  }).on('focusout', function () {
    if (!jQuery(this).val()) {
      jQuery(this).parents('.input-row').removeClass('focus').addClass('focusout').delay(450).queue(function (next) {
        jQuery(this).removeClass('focusout');
        next();
      });
    }
  }).each(function () {
    if (jQuery(this).val()) {
      jQuery(this).parents('.input-row').addClass('focus');
    }
  });
  
});