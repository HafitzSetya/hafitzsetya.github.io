var messageBox = document.querySelector('.js-message');

  var btn = document.querySelector('.js-message-btn');

  var card = document.querySelector('.js-profile-card');

  var closeBtn = document.querySelectorAll('.js-message-close');

  btn.addEventListener('click',function (e) {

      e.preventDefault();

      card.classList.add('active');

  });

  closeBtn.forEach(function (element, index) {

     console.log(element);

      element.addEventListener('click',function (e) {

          e.preventDefault();

          card.classList.remove('active');

      });

  });

UIkit.icon.add('tg','<svg version="1.1" id="Layer_1" width="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve"> <g id="XMLID_496_"> <path id="XMLID_497_" d="M5.299,144.645l69.126,25.8l26.756,86.047c1.712,5.511,8.451,7.548,12.924,3.891l38.532-31.412 c4.039-3.291,9.792-3.455,14.013-0.391l69.498,50.457c4.785,3.478,11.564,0.856,12.764-4.926L299.823,29.22 c1.31-6.316-4.896-11.585-10.91-9.259L5.218,129.402C-1.783,132.102-1.722,142.014,5.299,144.645z M96.869,156.711l135.098-83.207 c2.428-1.491,4.926,1.792,2.841,3.726L123.313,180.87c-3.919,3.648-6.447,8.53-7.163,13.829l-3.798,28.146 c-0.503,3.758-5.782,4.131-6.819,0.494l-14.607-51.325C89.253,166.16,91.691,159.907,96.869,156.711z"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>');

jQuery(function($) {
      $('a[href*="https://t.me/hafitzXD"].uk-icon').attr('uk-icon','tg');
  });
