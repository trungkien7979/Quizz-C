/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CppCodeBlockProps {
  code: string;
}

export default function CppCodeBlock({ code }: CppCodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  // Basic regex tokenizer to highlight standard C++ syntaxes beautifully
  const renderHighlightedCode = (rawCode: string) => {
    const lines = rawCode.split("\n");
    
    // Keywords to highlight
    const keywords = [
      "class", "struct", "public", "private", "protected", "virtual", 
      "override", "void", "int", "double", "float", "char", "bool", 
      "friend", "template", "typename", "static", "new", "delete", 
      "return", "const", "int&", "double&", "if", "else", "for", 
      "while", "try", "catch", "throw", "override", "ostream", "istream"
    ];

    return lines.map((line, lineIdx) => {
      // Find comment section
      let codePart = line;
      let commentPart = "";
      const commentIdx = line.indexOf("//");
      if (commentIdx !== -1) {
        codePart = line.substring(0, commentIdx);
        commentPart = line.substring(commentIdx);
      }

      // Tokenize the codePart
      const words = codePart.split(/(\s+|\W+)/);
      const formattedParts = words.map((token, tokenIdx) => {
        // Space / empty tokens
        if (!token.trim()) return token;

        // Is keyword?
        if (keywords.includes(token)) {
          return (
            <span key={tokenIdx} className="text-cyan-400 font-bold">
              {token}
            </span>
          );
        }

        // Is preprocessor or standard naming?
        if (token.startsWith("#") || token === "include" || token === "using" || token === "namespace" || token === "std") {
          return (
            <span key={tokenIdx} className="text-amber-400">
              {token}
            </span>
          );
        }

        // Is number literal?
        if (/^\d+$/.test(token)) {
          return (
            <span key={tokenIdx} className="text-emerald-400">
              {token}
            </span>
          );
        }

        // Is cout / cin / endl / string literal?
        if (token === "cout" || token === "cin" || token === "endl" || token === "string") {
          return (
            <span key={tokenIdx} className="text-indigo-300">
              {token}
            </span>
          );
        }

        // Is string literal? (Starts and ends with " )
        if (token.startsWith('"') || token.endsWith('"') || token.startsWith("'") || token.endsWith("'")) {
          return (
            <span key={tokenIdx} className="text-orange-300">
              {token}
            </span>
          );
        }

        // Normal word
        return token;
      });

      return (
        <div key={lineIdx} className="flex hover:bg-slate-800/50 px-4 py-0.5 leading-5 items-start">
          <span className="w-8 select-none font-mono text-xs text-slate-500 text-right pr-3 pt-0.5">
            {lineIdx + 1}
          </span>
          <span className="font-mono text-xs text-slate-200 whitespace-pre">
            {formattedParts}
            {commentPart && <span className="text-slate-400 italic">{commentPart}</span>}
          </span>
        </div>
      );
    });
  };

  return (
    <div id="cpp-code-block-container" className="relative bg-slate-900 border border-slate-700/60 rounded-xl overflow-hidden shadow-md my-4">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-950 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500" />
          <span className="w-3 h-3 rounded-full bg-amber-500" />
          <span className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="text-[10px] text-slate-400 font-mono font-medium tracking-wide ml-2">C++ SOURCE CODE</span>
        </div>
        <button
          onClick={handleCopy}
          id="copy-code-btn"
          className="p-1 px-2 text-xs rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition duration-150 flex items-center gap-1.5 cursor-pointer"
          title="Sao chép đoạn mã C++"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-[11px] text-emerald-400">Đã sao chép</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="text-[11px]">Sao chép</span>
            </>
          )}
        </button>
      </div>

      {/* Code Display area */}
      <div className="py-3 bg-slate-900 overflow-x-auto max-h-[360px]">
        {renderHighlightedCode(code)}
      </div>
    </div>
  );
}
