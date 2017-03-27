/*eslint func-names: ["error", "as-needed"]*/

const m = require('mithril');

var MyComponent = (function () {
    
    // private component members
    var greeting = '';

    function ctrl () {
        greeting = 'hello!';
    }

    // ... ither component logic...

    function view () {
        // writing just the classname is Mithril shorthand for a div element.
        // 'div.my-component' === '.my-component'
        return m('.my-component', [
            m('p', 'My component says ' + greeting),
        ]);
    }

    // public interface
    return {  
        view: view,
        controller: ctrl,
    };
}());

export default MyComponent;