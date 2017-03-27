/*eslint func-names: ["error", "as-needed"]*/

import m from 'mithril';
/*
// Mithril provides a routing system.
var One = { view: function () { }};
var Two = { view: function () { }};

// the second parameter is the default route
m.route(document.body, "/one", {
    "/one": One,
    "/Two": Two,
});

m("button", { onclick: () => m.route("/two")});
*/

var TheShire = {
    view: () => {
        return m('div', [
            m('h2', 'The Shire'),
            m('a', { href: '/mirkwood', config: m.route }, 'Go to Mirkwood, ring bearer.')
        ]);
    }
}

var Mirkwood = {
    view: () => {
        return m('div', [
            m('h2', 'Mirkwood'),
            m('a', { href: '/mordor', config: m.route }, 'Go forth to Mordor, brave hobbit')
        ]);
    }
}

var Mordor = {
    view_battle: () => {
        var hits_left = 3;
        console.log('m.route()', m.route());

        function strike() {
            hits_left--;
            m.route('/mordor' + hits_left);
        }

        if (m.route() === '/mordor') {
            return m('button', { onclick: strike }, "Strike against the evil Sauron!");
        }

        hits_left = m.route.param('hits_left');
        if (m.route.param('hits_left') == 0) {
            return m('strong', 'You defeated Sauron!');
        }

        return [
            m('p', 'You strike a direct hit!'),
            m('strong', '' + hits_left + ' hit(s) left.'),
            m('button', { onclick: strike }, 'Strike again!'),
        ]
    },

    view: () => {
        return m('div', [
            m('h2', 'Mordor'),
            Mordor.view_battle(),
            m('hr'),
            m('a', { href: '/shire', config: m.route }, 'Return to the Shire'),
        ]);
    },

    render: (root) => {
        m.route(root, '/shire', {
            '/shire': TheShire,
            '/mirkwood': Mirkwood,
            '/mordor': Mordor,
            'mordor/:hits_left': Mordor
        });
    },
}


export default Mordor;