import $ from 'jquery';

function checkUserEmail(data, success, fail) {
  $.post('http://localhost/adminsv/users/email/valid',
       data).then(success, fail);
}
function promoteUserToPiar(data, success, fail) {
  $.post('http://localhost/adminsv/organizators/promote/piar',
       data).then(success, fail);
}

module.exports = {
  checkUserEmail, promoteUserToPiar,
};
