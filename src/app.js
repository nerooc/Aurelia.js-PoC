import {
  PLATFORM
} from "aurelia-framework";


export class App {
  constructor() {
    this.message = 'Hello World!';
  }

  //ROUTER OF THE PAGE
  configureRouter(config, router) {
    config.title = 'Testing Router';
    config.map([{
        route: '',
        name: 'home',
        moduleId: PLATFORM.moduleName('./index'),
        title: 'Home'
      },
      {
        route: 'about',
        name: 'about',
        moduleId: PLATFORM.moduleName('./about'),
        title: 'About Us'
      }
    ]);

    this.router = router;
  }

}
