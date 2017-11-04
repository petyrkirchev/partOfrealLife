class AppRoute {
  constructor() {
    this.routes = {};
  }

  setRoute(key, value) {
    this.routes[key] = value;
  }

  getRoute(key) {
    return this.routes[key];
  }
}

const appRoute = new AppRoute();

export default appRoute;
