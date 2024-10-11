"use client"

import { SnipetProps } from "./type";
import hljs from "highlight.js";
import 'highlight.js/styles/github-dark.css';
import { useEffect } from "react";

const Code = ({ block }: SnipetProps) => {

  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block as HTMLElement);
    });
  }, []);

  if (block.type === 'code') {
    return (
      <div className="">
        <pre >
          <code>
            {block.code.rich_text[0].plain_text}
          </code>
        </pre>
      </div>
    )
  }
}

export default Code
