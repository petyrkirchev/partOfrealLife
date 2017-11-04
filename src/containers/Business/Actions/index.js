import $ from 'jquery';

function createOrganizator(organizator, success, fail) {
  $.post('http://localhost/adminsv/organizators/create',
        { organizator }).then(success, fail);
}

module.exports = {
  createOrganizator,
};
