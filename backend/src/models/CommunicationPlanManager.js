const AbstractManager = require("./AbstractManager");

class CommunicationPlanManager extends AbstractManager {
  constructor() {
    super({ table: "communication_plans" });
  }

  getArticlesWithAuthor() {
    return this.connection.query(
      `select a.*, u.firstname, u.lastname, u.city from ${this.table} a join users u on a.fk_author_id = u.id`
    );
  }

  insert(article) {
    return this.connection.query(
      `insert into ${this.table} (title, content, fk_author_id) values (?, ?, ?)`,
      [article.title, article.content, article.fk_author_id]
    );
  }

  update(article) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [article.title, article.id]
    );
  }
}

module.exports = CommunicationPlanManager;
