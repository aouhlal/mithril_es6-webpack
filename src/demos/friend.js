/*eslint func-names: ["error", "as-needed"]*/

const m = require('mithril');

var Friend = {
    controller: function (data) {
        console.log(JSON.stringify(data));
        return data;
    },
    view: function (ctrl) {
        return m('em', ctrl.name);
    }
};

export default Friend;