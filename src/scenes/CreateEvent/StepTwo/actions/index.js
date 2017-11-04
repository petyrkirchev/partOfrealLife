import $ from 'jquery';

function getEventById(id, success, fail) {
  $.post('http://localhost/adminsv/events/id', id).then(success, fail);
}

module.exports = {
  getEventById,
};
