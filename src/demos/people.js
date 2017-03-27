/*eslint func-names: ["error", "as-needed"]*/

const m = require('mithril');
let AvatarThumb = require('./avatar_thumb');

// The main points in this example:
/*
Now have we demonstrated using multiple instances of AvatarThumb, we also see:
    * Getting data from a (fake) external resource in ctrl()
    * Breaking up view() into two helper functions, view_thumb() and view_form()
    * Communication between parent and child components using a callback (select_person())
    * Creating a callback function that uses JavaScript closures to "contain" a specific 
      value when the function is called (see select_person())
*/

let PeopleDb = [
    { name: 'Frodo', race: 'Hobbit', thumb: 'images/mithril/frodo.jpg', },
    { name: 'Boromir', race: 'Human', thumb: 'images/mithril/boromir.jpg', },
    { name: 'Gimli', race: 'Dwarf', thumb: 'images/mithril/gimli.jpg'}
]
var People = (function () {

    var people;
    var selected_person = null;

    function ctrl () {
        people = PeopleDb;
    }

    function select_person(p) {
        return function () {
            selected_person = p;
        };
    }

    function view_thumb(p) {
        return m.component(AvatarThumb, { person: p, click: select_person(p) });
    }

    function view_form () {
        if (!selected_person) return null;

        return m('.form', [
            m('input', { value: selected_person.name }),
            m('input', { value: selected_person.race }),
            m('input', { value: selected_person.thumb }),
            m('button', 'Do nothing'),
        ]);
    }

    function view () {
        return m('.people', [
            m('h2', 'People'),
            m('p', 'Click on a person below to edit them.'),
            people.map(view_thumb), // using multiple instances of AvatarThumb
            view_form(),
        ]);
    }

    return { 
        view: view,
        controller: ctrl
    };
}());

export default People;