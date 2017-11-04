import $ from 'jquery';

function getEventByTitle(data, success, fail) {
  $.post('http://localhost/db/events/search/any', data).then(success, fail);
}

module.exports = {
  getEventByTitle,
};
