class CardComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    // you need to make sure that the styles are inherited by the children. The issue arises because the styles defined inside the shadow DOM of <v-component> do not cascade to elements outside of it, the solution is using Shadow DOM
    this.shadowRoot.innerHTML = `
        <div class="card" style="background-color: black; color: white; text-align: center; width: 300px; height: 300px">
          <slot></slot>
        </div>
      `;
  }
  // <slot></slot> slot mechanism act as a placeholder for children elements, they will be rendered inside this component
}

customElements.define("v-component", CardComponent);
