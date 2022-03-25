import * as React from "react";
import styles from "./CodeBlock.css";
import Highlight, { defaultProps } from "prism-react-renderer";
import { LinksFunction } from "remix";
import editorLightTheme from "prism-react-renderer/themes/github";
import editorDarkTheme from "prism-react-renderer/themes/vsDark";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

interface Props {
  data: any;
}

const CodeBlock: React.FC<Props> = (props) => {
  const codeData = props.data;
  const { theme } = useTheme();
  return (
    <div className="CodeBlock__Wrapper">
      <Highlight
        {...defaultProps}
        theme={
          theme === SupportedTheme.LIGHT ? editorLightTheme : editorDarkTheme
        }
        code={codeData}
        language="jsx"
      >
        {({ className, tokens, getLineProps, getTokenProps }) => {
          return (
            <div className="relative">
              <div className="CodeBlock__FileName__Container absolute rounded-t-lg top-0 w-full">
                <p className="CodeBlock__FileName text-center">test.css</p>
              </div>
              <pre
                className={className + " CodeBlock__InnerContainer rounded-lg"}
              >
                {tokens.map((line, i) => {
                  const { classname, ...restProps } = getLineProps({
                    line,
                    key: i
                  });
                  return (
                    <div
                      key={i}
                      {...restProps}
                      className={`${className} LineNo__${
                        i + 1
                      } grid CodeBlock__LineWrapper gap-10 break-word whitespace-pre-wrap`}
                    >
                      <div>
                        {/* TODO: Write a custom parser for highlighting line(s) of code */}
                        <span
                          className="CodeBlock__LineNo pl-1"
                          style={{ position: "sticky" }}
                        >
                          {i + 1}
                        </span>
                      </div>

                      <div className="overflow-x-scroll">
                        {line.map((token, key) => {
                          const { className, ...restProps } = getTokenProps({
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
            </div>
          );
        }}
      </Highlight>
    </div>
  );
};

export default CodeBlock;
