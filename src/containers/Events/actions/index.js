import $ from 'jquery';

function getMyEvents(data, success, fail) {
  $.post('http://localhost/adminsv/organizators/id/events',
       data).then(success, fail);
}

module.exports = {
  getMyEvents,
};
