/*eslint func-names: ["error", "as-needed"]*/

import m from 'mithril';

let url = 'http://ratfactor.com/misc/lotr-fellowship.json.php';
let Fellowship2 = {};
let loading = '';
let fellowship2_data = m.prop(null);

// Mithril also redraws after a call to m.request() is complete.
// The display updates because a value changed and we displayed it 
// differently from our view.
function get_fellowship2() {
    loading = 'Loading...';
    m.redraw();
	m.request({ 
		method: "GET", 
		url: url 
	})
	.then(loaded);
}

function loaded(result) {
    loading = '';
    fellowship2_data(result);
}

function view_table() {
    if (!fellowship2_data()) return null;
    return m('table', fellowship2_data().members.map(
        function (member) {
            return m('tr', [m('td', member.name), m('td', member.race)]);
        }
    ));
}

Fellowship2.view = function () {
	return m("div", [
		m("h3", "Members of the fellowship"),
		m("button", { onclick: get_fellowship2 }, "Load Fellowship"),
        loading,
		view_table(),
	]);
};

export default Fellowship2;