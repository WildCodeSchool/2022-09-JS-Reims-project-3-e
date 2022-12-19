const AbstractManager = require("./AbstractManager");

class articleManager extends AbstractManager {
  constructor() {
    super({ table: "article" });
  }

  insert(article) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [article.title]
    );
  }

  update(article) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [article.title, article.id]
    );
  }
}

module.exports = articleManager;
