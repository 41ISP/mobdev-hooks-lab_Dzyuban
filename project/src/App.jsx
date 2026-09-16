<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Shelf — личный трекер чтения</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
    rel="stylesheet"
  />
  
  <div className="app">
    <div className="app-header">
      <div className="brand">
        <div className="brand-mark">S</div>
        <div className="brand-name">Shelf</div>
      </div>
    </div>
    <section className="screen active" id="screen-shelf">
      <p className="greeting">Добрый вечер</p>
      <div className="add-book-row">
        <input
          className="input"
          id="bookInput"
          placeholder="Название книги..."
        />
        <button className="btn" id="addBtn">
          Добавить на полку
        </button>
      </div>
      <div className="list-toolbar">
        <span className="toolbar-title">Книги</span>
        <div className="filter-chip">
          <input type="checkbox" id="filterCheckbox" />
          <label htmlFor="filterCheckbox">
            <span className="dot" />
            Только непрочитанные
          </label>
        </div>
      </div>
      <div className="book-list" id="bookList">
        <div className="book-row" data-id={1}>
          <div className="book-cover" style={{ background: "#4f6b52" }}>
            К
          </div>
          <div className="book-info">
            <p className="book-title done">Клара и Солнце</p>
            <div className="book-author">Кадзуо Исигуро</div>
          </div>
          <div className="read-check checked" data-role="toggle">
            <span className="check-circle">✓</span>
            <span className="read-label">Прочитано</span>
          </div>
          <button
            className="delete-btn"
            data-role="delete"
            title="Убрать с полки"
          >
            ✕
          </button>
        </div>
      </div>
    </section>
  </div>
</>
