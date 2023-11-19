const { Command } = require("commander");
const program = new Command();

program.name("node proj").description("this the dos books").version("1.0.0");

program
  .command("search")
  .description("search for a book")
  .argument("<title>", "search a book")
  .action((param) => {
    console.log(`searching for ${param}`);
  });
program
  .command("info")
  .description("inf for an item")
  .argument("<item num>", "info for item")
  .action((param) => {
    console.log(`searching for ${param}`);
  });
program
  .command("purchase")
  .description("purchece an item")
  .argument("<item num>", "purchece for item")
  .option("--pricea <price>", "price for the item")
  .action((param, param2) => {
    console.log(param, param2);
  });
program.parse();
