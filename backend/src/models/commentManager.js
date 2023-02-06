const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "comments" });
  }

  getCommentsWithAuthor() {
    return this.connection.query(
      `select a.*, u.firstname, u.lastname, u.city from ${this.table} a join users u on a.author_id = u.id`
    );
  }

  insert(comment) {
    return this.connection.query(
      `insert into ${this.table} ( comment, author_id, communication_plan_id) values (? , ?, ?)`,
      [comment.comment, comment.author_id, comment.communication_plan_id]
    );
  }
}

module.exports = UsersManager;
