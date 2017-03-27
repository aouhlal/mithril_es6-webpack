import './globals.css';

/* eslint-disable no-unused-vars*/
import m, { mount } from 'mithril';
/* eslint-enable no-unused-vars*/
/*
import AppLayout from './components/appLayout';
import appState from './models/appState';

mount(
  document.getElementById('root'),
  <AppLayout
    messages={appState.messages}
  />
);

if (module.hot) {
  module.hot.accept();
}
*/

//
/*
import Durin from './demos/Durin';

mount(
  document.getElementById('root'),
  Durin
);
*/

// interact with a server: m.request()
/*
import Fellowship from './demos/server_interact';

mount(
  document.getElementById('root'),
  Fellowship
);
*/

// m.request()
/*
  Being able to think of your view in terms of little discrete bits of state 
  rather than a series of actions is one of the ways Mithril helps make 
  applications easier to contain in your mind.

  the basic principle applies: event -> state change -> render. 
  Your application always flows in this cycle no matter how complex it gets.
*/
/*
import Fellowship2 from './demos/server_interact2';

mount(
  document.getElementById('root'),
  Fellowship2
);
*/

// m.route()
/*
import Mordor from './demos/routing';

Mordor.render(document.getElementById('root'));
*/

/*
import TomBombadil from './demos/controllers';
m.mount(document.getElementById('root'), TomBombadil);
*/

/*
import Gollum from './demos/gollum';
m.mount(document.getElementById('root'), Gollum);
*/

// components
/*
import Plot from './demos/components';
m.mount(document.getElementById('root'), Plot);
*/

// part 2
// components
/*
import MyComponent from './demos/mycomponent';
m.mount(document.getElementById('root'), MyComponent);
*/
/*
import Frodo from './demos/reusable_component';
m.mount(document.getElementById('root'), Frodo);
*/
import People from './demos/people';
m.mount(document.getElementById('root'), People);

// NOTE:
// Mithril redraws every mounted component on the page when a redraw is needed.
// Don't put state in the view function!

if (module.hot) {
  module.hot.accept();
}
