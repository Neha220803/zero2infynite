import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import "./CodeBlock.css";

const CodeBlock = ({ code, language = "text" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // Simple syntax highlighting (you can enhance this or use a library)
  const highlightCode = (code, lang) => {
    // For now, return plain text
    // You can integrate Prism.js or highlight.js later for better highlighting
    return code;
  };

  return (
    <div className="code-block-wrapper">
      <div className="code-block-header">
        <span className="code-language">{language}</span>
        <button
          className="copy-button"
          onClick={handleCopy}
          title={copied ? "Copied!" : "Copy code"}
        >
          {copied ? (
            <>
              <Check size={16} />
              <span className="copy-text">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={16} />
              <span className="copy-text">Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="code-block-pre">
        <code className={`language-${language}`}>
          {highlightCode(code, language)}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
