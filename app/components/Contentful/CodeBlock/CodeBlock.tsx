import * as React from "react";
import styles from "./CodeBlock.css";
import Highlight, { defaultProps } from "prism-react-renderer";
import { LinksFunction } from "remix";
// dracula, github, nightowllight, palenight, ultramin, vsDark
import Prism from "prismjs";
import theme from "prism-react-renderer/themes/nightOwl";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

interface Props {
  data: any;
}

const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`;
const customStyles = {
  root: {
    boxSizing: "border-box",
    fontFamily: '"Dank Mono", "Fira Code", monospace',
    ...theme.plain
  }
};
const CodeBlock: React.FC<Props> = (props) => {
  const codeData = props.data;
  console.log(props.data, "DATA IN CODEBLOCK");
  const html = Prism.highlight(
    exampleCode,
    Prism.languages.javascript,
    "javascript"
  );
  return (
    <div className="text-base">
      {/* <pre className="languague-javascript">
        <code>{html}</code>
      </pre> */}
      <Highlight {...defaultProps} theme={theme} code={codeData} language="jsx">
        {({ className, tokens, getLineProps, getTokenProps }) => {
          console.log("AYOOOOOO");

          return (
            <pre className={className}>
              {tokens.map((line, i) => {
                const { classname, ...restProps } = getLineProps({
                  line,
                  key: i
                });

                return (
                  <div
                    key={i}
                    {...restProps}
                    className={`${className} grid CodeBlock__LineWrapper gap-5 break-word whitespace-pre-wrap`}
                  >
                    <div>
                      <span style={{ position: "sticky" }}>{i + 1}</span>
                    </div>

                    <div className="overflow-x-scroll">
                      {line.map((token, key) => {
                        const { classname, ...restProps } = getTokenProps({
                          token,
                          key
                        });

                        return (
                          <span
                            key={key}
                            {...restProps}
                            className={`${className} CodeBlock__Token--smol-tab`}
                          ></span>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </pre>
          );
        }}
      </Highlight>
    </div>
  );
};

export default CodeBlock;
