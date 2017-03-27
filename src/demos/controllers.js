/*eslint func-names: ["error", "as-needed"]*/

import m from 'mithril';

/*
    When you call m.mount() (or m.route() or m.component(), Mithril creates an
    instance of your controller using the JavaScript new operator. Then, every
    time view() is called, Mithril passes the controller object to it.
*/
var TomBombadil = {
    controller: function () {
        this.name = 'Tom TomBombadil';
        this.description = 'Master of wood, water and hill';
    },

    view: function (my_controller) {
        return m('div', [
            m('h3', my_controller.name),
            m('p', my_controller.description),
        ]);
    }
}

export default TomBombadil;