/*eslint func-names: ["error", "as-needed"]*/

import m from 'mithril';

var Durin = {};
Durin.passphrase = m.prop('enemy'); // call setter with 'enemy'
Durin.view = function () {
  return m("div", [
    m("div", "Speak, friend, and enter: ",
      m("strong", Durin.passphrase()) // call pty getter
    ),
    m("input[type=text]", {
      oninput: m.withAttr("value", Durin.passphrase),
      value: Durin.passphrase()
    }),
    Durin.passphrase() !== 'friend' ? null :
      m("button", "Enter and be welcome!"),
  ]);
};

export default Durin;
