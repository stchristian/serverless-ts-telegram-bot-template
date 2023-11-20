/**
 * Splits a string representing a parameter list into an array of individual parameters.
 *
 * This function uses a regular expression to match non-space characters or anything within double quotes.
 * It extracts each parameter and adds it to the result array, considering both quoted and unquoted parameters.
 *
 * @param input - The string representing the parameter list to be split.
 * @returns An array of individual parameters extracted from the input string.
 */
export function splitParamList(input: string) {
  // Match non-space characters or anything within double quotes
  const regex = /[^\s"]+|"([^"]*)"/g;
  const result: string[] = [];
  let match: RegExpExecArray | null = null;

  do {
    // Each call to exec returns the next match or null if there are no more matches
    match = regex.exec(input);
    if (match != null) {
      // Use the captured group if it exists, otherwise use the whole match
      result.push(match[1] ? match[1] : match[0]);
    }
  } while (match !== null);

  return result;
}
