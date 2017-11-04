import $ from 'jquery';

function saveEventPart(data, success, fail) {
  $.post('http://localhost/adminsv/events/part',
       data).then(success, fail);
}

module.exports = {
  saveEventPart,
};
