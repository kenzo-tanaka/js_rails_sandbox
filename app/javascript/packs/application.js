// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require('jquery')

import 'bootstrap';
import '../stylesheets/application';
import '@fortawesome/fontawesome-free/js/all'

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

$(document).on("turbolinks:load", function() {
  $('.delete').click(function(event){
    const href = $(this).attr('href');
    const task = $(this);

    $.ajax({
      type: 'PATCH',
      url: href,
      dataType: 'json',
    }).then(function(res){
      $(task).closest('tr').hide();
    })

    event.preventDefault();
  });

  $('.done').change(function(e){
    const value = $(this).attr('value');
    const task = $(this);

    $.ajax({
      type: 'PATCH',
      url: '/tasks/' + value + '/done',
      dataType: 'json'
    }).then(function(res){
      $(task).closest('tr').fadeOut();
    })

    event.preventDefault();
  })
});
