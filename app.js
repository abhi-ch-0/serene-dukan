class TopBar extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
        <style>
          * {
            box-sizing: border-box;
          }
  
          .top-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 20px;
            background-color: #333;
            color: white;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            gap: 16px;
          }
  
          .brand-name {
            font-size: 1em;
            font-weight: bold;
          }
  
          .search-bar {
            flex-grow: 1;
            max-width: 500px;
          }
  
          .search-bar input {
            width: 100%;
            padding: 8px;
            border-radius: 4px;
            border: 1px solid #ccc;
            outline: none;
          }
  
          .action-buttons {
            display: flex;
            gap: 10px;
          }
  
          .action-buttons .btn {
            background-color: #555;
            color: white;
            border: none;
            padding: 8px 12px;
            border-radius: 4px;
            cursor: pointer;
          }
  
          .action-buttons .btn:hover {
            background-color: #777;
          }
  
          /* Responsive adjustments */
          @media (max-width: 768px) {
            .brand-name {
              display: none;
            }
          }
        </style>
        <header class="top-bar">
          <div class="brand-name">serene dukan</div>
          <div class="search-bar">
            <input type="text" placeholder="search your needs and wants..." />
          </div>
          <div class="action-buttons">
            <button class="btn">cart</button>
            <button class="btn">favs</button>
            <button class="btn">profile</button>
          </div>
        </header>
      `;
    }
}

customElements.define('top-bar', TopBar);