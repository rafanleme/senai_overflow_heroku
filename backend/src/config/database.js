// timestamp coloca created_at e updated_at nas tabelas
// underscored coloca os nomes de tabelas e atributos como snake_case

module.exports =  {
  url: process.env.DATABASE_URL || "postgres://postgres:bcd127@localhost:5432/senai_overflow",
  config: {
    dialect: "postgres",
    logging: console.log,
    define: {
      timestamp: true,
      underscored: true,
    },
  },
};
