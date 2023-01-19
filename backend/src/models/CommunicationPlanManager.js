const AbstractManager = require("./AbstractManager");

class CommunicationPlanManager extends AbstractManager {
  constructor() {
    super({ table: "communication_plans" });
  }

  insert(article) {
    return this.connection.query(
      `insert into ${this.table} (title, content) values (?, ?)`,
      [article.title, article.content]
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
