import AppRoutes from './index';

export default {
  loadRoutes: () => {
    AppRoutes.setRoute('home', '/');
    AppRoutes.setRoute('event', '/event/:id/:topic');
    AppRoutes.setRoute('search', '/event/search/title/:id');
    AppRoutes.setRoute('stepOne', '/create-event/step-one');
    AppRoutes.setRoute('stepTwo', '/create-event/step-two/:id');
    AppRoutes.setRoute('organizatorEvent', '/organizators/events/:id');
    AppRoutes.setRoute('blog', '/blog');
    AppRoutes.setRoute('blogPost', '/blog/post/:id');
    AppRoutes.setRoute('statistics', '/statistics');
    AppRoutes.setRoute('termsAndConditions', '/terms-and-conditions');
    AppRoutes.setRoute('registration', '/account-register');
    AppRoutes.setRoute('step3', '/create-event/step-three/:id');
    AppRoutes.setRoute('step4', '/create-event/step-four/:id');
    AppRoutes.setRoute('buyTickets', '/event/tickets/buy');
    AppRoutes.setRoute('dataForBuy', '/event/invoice/data');
    AppRoutes.setRoute('placeSelector', '/event/place/selector');
    AppRoutes.setRoute('poll', '/event/poll/methods');
    AppRoutes.setRoute('successfulPurchase', '/event/purchase/done');
    AppRoutes.setRoute('statistics', '/statistics');
    AppRoutes.setRoute('contactUs', '/contact-us');
  },
};
