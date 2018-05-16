class KateMenuSidebar extends Polymer.Element {
  static get is() { return 'kate-menu-sidebar'; }
  static get properties() {
    return {
      widthSpace: {
        type: String,
        value: 'normal'
      }
    };
  }
}

window.customElements.define(KateMenuSidebar.is, KateMenuSidebar);