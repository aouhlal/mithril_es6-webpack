/*eslint func-names: ["error", "as-needed"]*/

import m from 'mithril';

var Gollum = {
    model: {
        riddle: 'Alive without breath,\nAs cold as death,\nNever thirsty, ever drinking,\nAll in mail never clinking.',
        answer: 'fish',
        revealed: false,
        reveal: function () { this.revealed = true; }
    },

    controller: function () {
        this.m = Gollum.model;
    },

    view: function (ctrl) {
        return m('div', [
            m('pre', ctrl.m.riddle),
            ctrl.m.revealed ? 
                m('strong', ctrl.m.answer)
                :
                m('button', { onclick: ctrl.m.reveal.bind(ctrl.m)}, 'Reveal answer'),
        ]);
    }
}

export default Gollum;