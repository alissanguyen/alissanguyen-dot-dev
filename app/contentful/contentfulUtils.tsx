import { TEXT_HIGHLIGHT } from "~/constants";

/**
 * Looks for a substring where there is a string surrounded by parens, immediately
 * followed by a word in brackets.
 */
const highlightedTextMatcher = /\((.+)\)(?=\[(\w+)\])/;

/**
 * The purpose of this function is to check if any of the passed in children
 * or any of the passed in children's children meet the regex pattern of text
 * inside parens followed by text inside brackets. If so, it returns a span
 * wrapper around the string that meets the pattern. The span has a classname
 * to apply some colored text and appropriate background color, aka a highlight.
 * If it does not, just return the children as is.
 */

export const addColour = (children: null | React.ReactNode[] = []) => {
  if (children === null) {
    /**
     * Perhaps an overly defensive check, but we can't trust everything
     * contentful gives us ;)
     */
    return children;
  }

  // flatMap returns a flattened array - very useful
  const mappedChildren = children.flatMap((child) => {
    /**
     * child is a string when the node is normal text without any italicization,
     * bolding, underlining, strikethrough, etc.
     */
    if (typeof child === "string") {
      // the regex that handles parsing the actual string and extracting the text
      const matches = child.match(highlightedTextMatcher);
      if (matches) {
        const result = createSpanFromMatches(matches, child);
        return result;
      }
    }

    /**
     *
     */
    if (typeof child === "object") {
      const element = child as JSX.Element;

      const content = element.props.children;

      const className = element.props.className;
      const stringMatches =
        typeof content === "string" && content.match(highlightedTextMatcher);

      /**
       * Handle the case where content is an object. This is when the highlighted text is also bolded or italicized, or both
       */
      if (
        content &&
        content.props &&
        typeof content.props.children === "string"
      ) {
        const textContent = content.props.children;

        const objectChildMatches = textContent.match(highlightedTextMatcher);

        /**
         * objectChildMatches will only be true when the child we're looking at
         * meets the regex pattern of text inside parens followed by text inside
         * brackets
         */
        if (objectChildMatches) {
          return createSpanFromMatches(objectChildMatches, textContent, {
            className
          });
        }
      }

      /**
       * stringMatches will only be truthy when it meets the regex pattern of
       * text inside parens followed by text inside brackets
       */
      if (stringMatches) {
        return createSpanFromMatches(stringMatches, content, { className });
      }
    }
    // make sure to always return the content if there is no match to the regex
    return child;
  });

  return mappedChildren;
};

const createSpanFromMatches = (
  matches: RegExpMatchArray,
  text: string,
  restProps = {}
) => {
  const content = text.split(`${matches[0]}[${matches[2]}]`);
  // $TODO: this will cause more text than expected to be highlighted if there are multiple highlights within one html element
  return [
    content[0],
    <span
      key={matches[1]}
      {...restProps}
      style={{
        color: "#000000",
        backgroundColor: `${
          matches[2] !== undefined && contentfulHighlights[matches[2]]
        }`
      }}
    >
      {matches[1]}
    </span>,
    content[1]
  ];
};

const contentfulHighlights: Record<string, string> = {
  blue: TEXT_HIGHLIGHT.BLUE,
  yellow: TEXT_HIGHLIGHT.YELLOW,
  green: TEXT_HIGHLIGHT.GREEN,
  red: TEXT_HIGHLIGHT.RED,
  orange: TEXT_HIGHLIGHT.ORANGE,
  pink: TEXT_HIGHLIGHT.PINK,
  purple: TEXT_HIGHLIGHT.PURPLE
};
