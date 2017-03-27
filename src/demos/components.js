/*eslint func-names: ["error", "as-needed"]*/

let m = require('mithril');
let Friend = require('./friend');

// components:
/*
    But what if we want to nest components within each other? 
    And can we re-use components?

    m.component() allows us to instantiate Friend components and pass data 
    to them (typically in the form of a JavaScript object, but the data could 
    be any value). The controller is responsible for maintaining the 
    functionality unique to the instance.
*/

var Plot = {
    view: function () {
        return m('p', [
            'Together, ',
            m.component( Friend, { name: 'Frodo'}),
            ' and ',
            m.component( Friend, { name: 'Sawise'}),
            ' must journey to Mount Doom to destroy the one Ring.',
        ]);
    }
}

export default Plot;