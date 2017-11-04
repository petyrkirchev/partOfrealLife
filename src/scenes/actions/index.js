import $ from 'jquery';

function getEvents(data, success, fail) {
  $.post('http://localhost/webapp/events/home', data).then(success, fail);
}

module.exports = {
  getEvents,
};
