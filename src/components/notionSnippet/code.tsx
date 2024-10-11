"use client"

import { SnipetProps } from "./type";
import hljs from "highlight.js";
import 'highlight.js/styles/github-dark.css';
import { useEffect } from "react";

const Code = ({ block }: SnipetProps) => {

  useEffect(() => {
    const codeElements = document.querySelectorAll('pre code');
    if (codeElements) {
      codeElements.forEach((block) => {
        if (block instanceof HTMLElement && block.dataset.highlighted !== 'yes') {
          hljs.highlightElement(block);
          block.dataset.highlighted = 'yes';
        }
      });
    }
  }, []);

  if (block.type === 'code') {
    return (
      <div>
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
