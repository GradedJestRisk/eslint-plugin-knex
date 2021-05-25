const { RuleTester } = require("eslint");
const rule = require("./avoid-injections");

const tester = new RuleTester({
  parserOptions: { ecmaVersion: 2015 },
});

tester.run("avoid-injections", rule, {
  valid: [
    "knex.raw('select ? from users', ['email'])",
  ],
  invalid: [
    {
      code: "knex.raw(`select * from ${table}`);",
      errors: [
        { messageId: "avoid", data: { query: "raw" } }],
    },
  ],
});
