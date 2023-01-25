const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "comments" });
  }

  getCommentsWithAuthor() {
    return this.connection.query(
      `select a.*, u.contentcomment from ${this.table} a join users u on a.fk_author_id = u.id`
    );
  }

  insert(comment) {
    return this.connection.query(
      `insert into ${this.table} ( contentcomment, fk_author_id ) values (? , ?)`,
      [comment.contentcomment, comment.fk_author_id]
    );
  }
}

module.exports = UsersManager;
