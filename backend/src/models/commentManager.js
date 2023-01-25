const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "comments" });
  }

  insert(comment) {
    return this.connection.query(
      `insert into ${this.table} ( contentcomment ) values (?)`,
      [comment.contentcomment]
    );
  }
}

module.exports = UsersManager;
