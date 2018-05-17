class KateMenuSidebar extends Polymer.Element {
  static get is() { return 'kate-menu-sidebar'; }
  static get properties() {
    return {
      widthSpace: {
        type: String,
        value: 'normal'
      },
      items: {
        type: Array,
        value: []
      }
    };
  }
}

window.customElements.define(KateMenuSidebar.is, KateMenuSidebar);