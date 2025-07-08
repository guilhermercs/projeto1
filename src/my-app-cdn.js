import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class MyApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
    
    .header {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      padding: 2rem;
      margin-bottom: 2rem;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    }
    
    h1 {
      color: white;
      font-size: 3rem;
      margin: 0 0 1rem 0;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }
    
    .subtitle {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1.3rem;
      margin-bottom: 2rem;
    }
    
    .card {
      background: rgba(255, 255, 255, 0.95);
      border-radius: 15px;
      padding: 2rem;
      margin: 1rem 0;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    }
    
    .counter-section {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      margin: 2rem 0;
    }
    
    .counter-display {
      font-size: 3rem;
      font-weight: bold;
      color: #667eea;
      min-width: 100px;
    }
    
    .button-group {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }
    
    .btn {
      padding: 12px 24px;
      border: none;
      border-radius: 25px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    .btn-primary {
      background: linear-gradient(45deg, #667eea, #764ba2);
      color: white;
    }
    
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
    }
    
    .btn-secondary {
      background: linear-gradient(45deg, #f093fb, #f5576c);
      color: white;
    }
    
    .btn-secondary:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(240, 147, 251, 0.4);
    }
    
    .btn-danger {
      background: linear-gradient(45deg, #ff6b6b, #ee5a24);
      color: white;
    }
    
    .btn-danger:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
    }
    
    .btn-success {
      background: linear-gradient(45deg, #4facfe, #00f2fe);
      color: white;
    }
    
    .btn-success:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(79, 172, 254, 0.4);
    }
    
    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin: 2rem 0;
    }
    
    .stat-item {
      background: rgba(255, 255, 255, 0.1);
      padding: 1rem;
      border-radius: 10px;
      color: white;
    }
    
    .stat-value {
      font-size: 2rem;
      font-weight: bold;
      display: block;
    }
    
    .stat-label {
      font-size: 0.9rem;
      opacity: 0.8;
    }
    
    .footer {
      margin-top: 3rem;
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.9rem;
    }
    
    @media (max-width: 768px) {
      .container {
        padding: 1rem;
      }
      
      h1 {
        font-size: 2rem;
      }
      
      .counter-section {
        flex-direction: column;
        gap: 1rem;
      }
      
      .button-group {
        flex-direction: column;
        align-items: center;
      }
    }
  `;

  static properties = {
    count: { type: Number },
    clicks: { type: Number },
    lastClickTime: { type: Number },
    currentScreen: { type: String },
  };

  constructor() {
    super();
    this.count = 0;
    this.clicks = 0;
    this.lastClickTime = Date.now();
    this.currentScreen = 'home';
  }

  render() {
    if (this.currentScreen === 'cadastro') {
      return html`<cadastro-screen @back=${this._goHome}></cadastro-screen>`;
    }

    const timeSinceLastClick = Date.now() - this.lastClickTime;
    const clicksPerMinute = this.clicks > 0 ? Math.round((this.clicks / (timeSinceLastClick / 60000)) * 10) / 10 : 0;
    
    return html`
      <div class="container">
        <div class="header">
          <h1>🚀 Projeto Lit</h1>
          <p class="subtitle">Uma experiência moderna com Web Components</p>
        </div>
        
        <div class="card">
          <h2>Contador Interativo</h2>
          <div class="counter-section">
            <div class="counter-display">${this.count}</div>
          </div>
          
          <div class="button-group">
            <button class="btn btn-primary" @click=${this._increment}>
              ➕ Incrementar
            </button>
            <button class="btn btn-secondary" @click=${this._decrement}>
              ➖ Decrementar
            </button>
            <button class="btn btn-danger" @click=${this._reset}>
              🔄 Resetar
            </button>
            <button class="btn btn-success" @click=${this._goToCadastro}>
              👥 Cadastro
            </button>
          </div>
        </div>
        
        <div class="stats">
          <div class="stat-item">
            <span class="stat-value">${this.clicks}</span>
            <span class="stat-label">Total de Cliques</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">${clicksPerMinute}</span>
            <span class="stat-label">Cliques/min</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">${this.count > 0 ? '📈' : '📊'}</span>
            <span class="stat-label">Status</span>
          </div>
        </div>
        
        <div class="footer">
          <p>✨ Criado com Lit - Web Components do futuro</p>
          <p>🕐 Última atualização: ${new Date().toLocaleTimeString('pt-BR')}</p>
        </div>
      </div>
    `;
  }

  _increment() {
    this.count++;
    this.clicks++;
    this.lastClickTime = Date.now();
  }

  _decrement() {
    this.count--;
    this.clicks++;
    this.lastClickTime = Date.now();
  }

  _reset() {
    this.count = 0;
    this.clicks++;
    this.lastClickTime = Date.now();
  }

  _goToCadastro() {
    this.currentScreen = 'cadastro';
  }

  _goHome() {
    this.currentScreen = 'home';
  }
}

customElements.define('my-app', MyApp); 