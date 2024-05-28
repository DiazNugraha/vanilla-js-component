class InformationComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["title", "subtitle"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <style>
          .info {
            color: inherit;
          }
        </style>
        <div class="info">
          <h1>${this.title}</h1>
          <p>${this.subtitle}</p>
        </div>
      `;
  }
}

customElements.define("v-information", InformationComponent);
