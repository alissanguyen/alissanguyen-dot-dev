import * as React from "react";
import styles from "./CodeBlock.css";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import { LinksFunction } from "remix";
import editorLightTheme from "prism-react-renderer/themes/github";
import editorDarkTheme from "prism-react-renderer/themes/vsDark";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";
import { ContentfulCodeBlock } from "~/contentful/types";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

interface Props {
  data: ContentfulCodeBlock;
}

const CodeBlock: React.FC<Props> = (props) => {
  const codeText = props.data.codeText;
  const { theme } = useTheme();

  const language: Language = props.data.language as Language;
  return (
    <div className="CodeBlock__Wrapper rounded-lg mt-3 mb-6">
      <Highlight
        {...defaultProps}
        theme={
          theme === SupportedTheme.LIGHT ? editorLightTheme : editorDarkTheme
        }
        code={codeText}
        language={language}
      >
        {({ className, tokens, getLineProps, getTokenProps }) => {
          return (
            <div className="CodeBlock">
              {props.data.fileName !== undefined ? (
                <div className="CodeBlock__FileName__Container w-full rounded-t-lg">
                  <p className="CodeBlock__FileName text-center">
                    {props.data.fileName}
                  </p>
                </div>
              ) : null}

              <pre
                className={`${className} CodeBlock__InnerContainer overflow-x-auto roundedLg p-4 ${
                  props.data.fileName ? "pt-2" : ""
                }
                `}
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
                      } grid CodeBlock__LineWrapper relative ${
                        props.data.shouldDisplayLineNumber ? "gap-10" : ""
                      } breakWord whitespace-preWrap`}
                    >
                      <div>
                        {/* TODO: Write a custom parser for highlighting line(s) of code */}
                        <span
                          className={`CodeBlock__LineNo pl-1 ${
                            props.data.shouldDisplayLineNumber
                              ? "visible"
                              : "invisible"
                          }`}
                          style={{ position: "sticky" }}
                        >
                          {i + 1}
                        </span>
                      </div>

                      <div className="">
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
