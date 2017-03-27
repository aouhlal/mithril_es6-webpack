/*eslint func-names: ["error", "as-needed"]*/

const m = require('mithril');

var AvatarThumb = (function () {

    function ctrl(param) {
        return param;
    }

    function view(ctrl) {
        return m('.avatar-thumb', { onclick: ctrl.click }, [
            m('img', { src: ctrl.person.thumb, alt: 'Portrait of ' + ctrl.person.name }),
            m('br'),
            m('strong', ctrl.person.name),
        ]);
    }

    // public interface
    return {
        view: view,
        controller: ctrl,
    };
}());

export default AvatarThumb;