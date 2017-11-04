import $ from 'jquery';

function getEventContactsById(id, success, fail) {
  $.post('http://localhost/adminsv/events/id/contacts', id).then(success, fail);
}

module.exports = {
  getEventContactsById,
};
