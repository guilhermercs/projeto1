import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class CadastroScreen extends LitElement {
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
    }
    
    .header {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      padding: 2rem;
      margin-bottom: 2rem;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      text-align: center;
    }
    
    h1 {
      color: white;
      font-size: 2.5rem;
      margin: 0 0 1rem 0;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }
    
    .subtitle {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }
    
    .card {
      background: rgba(255, 255, 255, 0.95);
      border-radius: 15px;
      padding: 2rem;
      margin: 1rem 0;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
    
    .form-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }
    
    .form-group {
      display: flex;
      flex-direction: column;
    }
    
    label {
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: #333;
    }
    
    input, textarea {
      padding: 12px;
      border: 2px solid #e1e5e9;
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.3s ease;
    }
    
    input:focus, textarea:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
    
    textarea {
      resize: vertical;
      min-height: 80px;
    }
    
    .button-group {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 2rem;
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
    
    .btn-warning {
      background: linear-gradient(45deg, #ffa726, #ff7043);
      color: white;
    }
    
    .btn-warning:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(255, 167, 38, 0.4);
    }
    
    .table-container {
      overflow-x: auto;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
      background: white;
    }
    
    th, td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #e1e5e9;
    }
    
    th {
      background: linear-gradient(45deg, #667eea, #764ba2);
      color: white;
      font-weight: 600;
    }
    
    tr:hover {
      background-color: #f8f9fa;
    }
    
    .action-buttons {
      display: flex;
      gap: 0.5rem;
    }
    
    .btn-small {
      padding: 6px 12px;
      font-size: 0.8rem;
    }
    
    .empty-state {
      text-align: center;
      padding: 3rem;
      color: #666;
    }
    
    .empty-state h3 {
      margin-bottom: 1rem;
      color: #333;
    }
    
    @media (max-width: 768px) {
      .container {
        padding: 1rem;
      }
      
      h1 {
        font-size: 2rem;
      }
      
      .form-grid {
        grid-template-columns: 1fr;
      }
      
      .button-group {
        flex-direction: column;
        align-items: center;
      }
      
      .action-buttons {
        flex-direction: column;
      }
    }
  `;

  static properties = {
    pessoas: { type: Array },
    editingId: { type: Number },
    formData: { type: Object },
  };

  constructor() {
    super();
    this.pessoas = [];
    this.editingId = null;
    this.formData = {
      nome: '',
      telefone: '',
      endereco: ''
    };
  }

  render() {
    return html`
      <div class="container">
        <div class="header">
          <h1>👥 Cadastro de Pessoas</h1>
          <p class="subtitle">Gerencie seus contatos de forma simples e eficiente</p>
          <button class="btn btn-secondary" @click=${this._goBack}>
            ← Voltar ao Início
          </button>
        </div>
        
        <div class="card">
          <h2>${this.editingId !== null ? 'Editar Pessoa' : 'Nova Pessoa'}</h2>
          
          <form @submit=${this._handleSubmit}>
            <div class="form-grid">
              <div class="form-group">
                <label for="nome">Nome *</label>
                <input 
                  type="text" 
                  id="nome" 
                  .value=${this.formData.nome}
                  @input=${this._updateFormData}
                  data-field="nome"
                  required
                  placeholder="Digite o nome completo"
                >
              </div>
              
              <div class="form-group">
                <label for="telefone">Telefone *</label>
                <input 
                  type="tel" 
                  id="telefone" 
                  .value=${this.formData.telefone}
                  @input=${this._applyPhoneMask}
                  data-field="telefone"
                  required
                  placeholder="(11) 99999-9999"
                  maxlength="15"
                >
              </div>
              
              <div class="form-group">
                <label for="endereco">Endereço</label>
                <textarea 
                  id="endereco" 
                  .value=${this.formData.endereco}
                  @input=${this._updateFormData}
                  data-field="endereco"
                  placeholder="Digite o endereço completo"
                ></textarea>
              </div>
            </div>
            
            <div class="button-group">
              <button type="submit" class="btn btn-primary">
                ${this.editingId !== null ? '💾 Atualizar' : '➕ Cadastrar'}
              </button>
              ${this.editingId !== null ? html`
                <button type="button" class="btn btn-warning" @click=${this._cancelEdit}>
                  ❌ Cancelar
                </button>
              ` : ''}
            </div>
          </form>
        </div>
        
        <div class="card">
          <h2>Lista de Pessoas (${this.pessoas.length})</h2>
          
          ${this.pessoas.length === 0 ? html`
            <div class="empty-state">
              <h3>📝 Nenhuma pessoa cadastrada</h3>
              <p>Adicione sua primeira pessoa usando o formulário acima!</p>
            </div>
          ` : html`
            <div class="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Endereço</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  ${this.pessoas.map((pessoa, index) => html`
                    <tr>
                      <td>${pessoa.nome}</td>
                      <td>${pessoa.telefone}</td>
                      <td>${pessoa.endereco || '-'}</td>
                      <td>
                        <div class="action-buttons">
                          <button class="btn btn-warning btn-small" @click=${() => this._editPessoa(index)}>
                            ✏️ Editar
                          </button>
                          <button class="btn btn-danger btn-small" @click=${() => this._deletePessoa(index)}>
                            🗑️ Excluir
                          </button>
                        </div>
                      </td>
                    </tr>
                  `)}
                </tbody>
              </table>
            </div>
          `}
        </div>
      </div>
    `;
  }

  _applyPhoneMask(e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
    
    // Aplica a máscara (11) 99999-9999
    if (value.length <= 11) {
      value = value.replace(/^(\d{2})(\d)/g, '($1) $2'); // Coloca parênteses em volta dos dois primeiros dígitos
      value = value.replace(/(\d)(\d{4})$/, '$1-$2'); // Coloca hífen antes dos últimos 4 dígitos
    }
    
    // Atualiza o valor do campo
    e.target.value = value;
    
    // Atualiza o formData
    this.formData = {
      ...this.formData,
      telefone: value
    };
  }

  _updateFormData(e) {
    const field = e.target.dataset.field;
    this.formData = {
      ...this.formData,
      [field]: e.target.value
    };
  }

  _handleSubmit(e) {
    e.preventDefault();
    
    if (this.editingId !== null) {
      // Atualizar pessoa existente
      this.pessoas[this.editingId] = { ...this.formData };
      this.editingId = null;
    } else {
      // Adicionar nova pessoa
      this.pessoas = [...this.pessoas, { ...this.formData }];
    }
    
    // Limpar formulário
    this.formData = {
      nome: '',
      telefone: '',
      endereco: ''
    };
  }

  _editPessoa(index) {
    this.editingId = index;
    this.formData = { ...this.pessoas[index] };
  }

  _deletePessoa(index) {
    if (confirm('Tem certeza que deseja excluir esta pessoa?')) {
      this.pessoas = this.pessoas.filter((_, i) => i !== index);
    }
  }

  _cancelEdit() {
    this.editingId = null;
    this.formData = {
      nome: '',
      telefone: '',
      endereco: ''
    };
  }

  _goBack() {
    this.dispatchEvent(new CustomEvent('back'));
  }
}

customElements.define('cadastro-screen', CadastroScreen); 