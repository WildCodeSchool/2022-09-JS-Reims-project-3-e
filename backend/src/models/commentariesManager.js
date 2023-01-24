const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "commentaries" });
  }

  insert(commentary) {
    return this.connection.query(
      `insert into ${this.table} ( content ) values (?)`,
      [commentary.content]
    );
  }
}

module.exports = UsersManager;
