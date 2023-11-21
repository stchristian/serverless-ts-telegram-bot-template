import { array, string } from "yup";
import { CommandRegistry } from "./command-registry";

const commandRegistry = new CommandRegistry();

/**
 * Add your commands here
 */
commandRegistry.addCommand(
  "/ping",
  (message, cmd, params) => {
    return `pong ${params}`;
  },
  array().of(string())
  // Use tuple() for better validation
);

export { commandRegistry };
