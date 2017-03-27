/*eslint func-names: ["error", "as-needed"]*/

import m from 'mithril';

let url = 'http://ratfactor.com/misc/lotr-fellowship.json.php';
let Fellowship = {};

Fellowship.data = m.prop(null);

// Mithril also redraws after a call to m.request() is complete.
// The display updates because a value changed and we displayed it 
// differently from our view.
function get_fellowship() {
	m.request({ 
		method: "GET", 
		url: url 
	})
	.then( (data) => {
		console.log(JSON.stringify(data));
		Fellowship.data(data) 
	});
}

function view_fellowship() {
	if (!Fellowship.data()) {
		return m("p", "Click the button and wait.");
	}
	return m("p", Fellowship.data().description);
}

Fellowship.view = function () {
	return m("div", [
		m("h3", "The Fellowship of the Ring"),
		m("button", { onclick: get_fellowship }, "Load Fellowship"),
		view_fellowship(),
	]);
};

export default Fellowship;