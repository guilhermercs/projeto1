import { LitElement, html, css } from 'lit';

export class MyApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 1rem;
      color: var(--my-app-text-color, #000);
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }
    h1 {
      color: #333;
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    .welcome {
      font-size: 1.2rem;
      color: #666;
      margin-bottom: 2rem;
    }
    .button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
    }
    .button:hover {
      background-color: #0056b3;
    }
  `;

  static properties = {
    count: { type: Number },
  };

  constructor() {
    super();
    this.count = 0;
  }

  render() {
    return html`
      <div class="container">
        <h1>🚀 Projeto Lit</h1>
        <p class="welcome">Bem-vindo ao seu primeiro projeto com Lit!</p>
        
        <div>
          <p>Contador: ${this.count}</p>
          <button class="button" @click=${this._increment}>
            Incrementar
          </button>
        </div>
        
        <p style="margin-top: 2rem; font-size: 0.9rem; color: #888;">
          Este é um componente web criado com Lit
        </p>
      </div>
    `;
  }

  _increment() {
    this.count++;
  }
}

customElements.define('my-app', MyApp); 