/*eslint func-names: ["error", "as-needed"]*/

const m = require('mithril');
let AvatarThumb = require('./avatar_thumb');

var Frodo = (function () {
    var me = {
        name: 'Frodo',
        race: 'Hobbit',
        thumb: 'images/mithril/frodo.jpg',
    };
    var clicked = false;

    function click_me() {
        clicked = !clicked;//true;
    }

    function view() {
        return m('.frodo', [
            m.component(AvatarThumb, { person: me, click: click_me }),
            m('p', 'Click on my face to see a quote.'),
            clicked ?
                m('blockquote', 'I wish the ring had never come to me. I wish none of this had happened.')
                : null,
        ]);
    }

    return { view: view };
}());

export default Frodo;