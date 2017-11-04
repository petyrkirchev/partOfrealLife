import $ from 'jquery';

function createEOrganizator(data, success, fail) {
  $
        .post('http://localhost/adminsv/event/step1', data)
        .then(success, fail);
}

module.exports = {
  createEOrganizator,
};
