const AbstractManager = require("./AbstractManager");

class CommunicationPlanManager extends AbstractManager {
  constructor() {
    super({ table: "communication_plans" });
  }

  getArticlesWithAuthor() {
    return this.connection.query(
      `SELECT 
      communication_plans.*, 
      users.firstname AS firstname, 
      users.lastname AS lastname,
      users.city AS city,
      JSON_ARRAYAGG(
          JSON_OBJECT(
              'id', comments.id,
              'comment', comments.comment,
              'communication_plan_id', comments.communication_plan_id,
              'author', JSON_OBJECT(
                  'firstname', comment_authors.firstname,
                  'lastname', comment_authors.lastname,
                  'city', comment_authors.city
              )
          )
      ) AS comments
  FROM communication_plans
  LEFT JOIN users ON communication_plans.fk_author_id = users.id
  LEFT JOIN comments ON comments.communication_plan_id = communication_plans.id
  LEFT JOIN users comment_authors ON comments.author_id = comment_authors.id
  GROUP BY communication_plans.id;`
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
