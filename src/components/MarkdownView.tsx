/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface MarkdownViewProps {
  content: string;
}

export default function MarkdownView({ content }: MarkdownViewProps) {
  // A robust custom markdown parser that converts standard markdown to JSX safely
  const parseMarkdown = (text: string) => {
    const lines = text.split("\n");
    let inCodeBlock = false;
    let codeBlockLines: string[] = [];
    let codeLanguage = "";
    
    const elements: React.ReactNode[] = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Handle Code Block
      if (line.trim().startsWith("```")) {
        if (inCodeBlock) {
          // Close Code Block
          inCodeBlock = false;
          elements.push(
            <pre 
              key={`code-${i}`} 
              className="bg-slate-900 border border-slate-800 text-slate-100 font-mono text-sm p-4 rounded-lg my-3 overflow-x-auto"
            >
              <code className="block whitespace-pre">{codeBlockLines.join("\n")}</code>
            </pre>
          );
          codeBlockLines = [];
        } else {
          // Open Code Block
          inCodeBlock = true;
          codeLanguage = line.trim().slice(3) || "text";
        }
        continue;
      }
      
      if (inCodeBlock) {
        codeBlockLines.push(line);
        continue;
      }
      
      const trimmedLine = line.trim();
      
      // Skip empty lines
      if (trimmedLine === "") {
        elements.push(<div key={`space-${i}`} className="h-2" />);
        continue;
      }
      
      // Handle Titles
      if (trimmedLine.startsWith("###")) {
        elements.push(
          <h4 key={`h4-${i}`} className="text-base font-semibold text-slate-800 mt-4 mb-2 flex items-center gap-2">
            {renderInlineMarkdown(trimmedLine.slice(3).trim())}
          </h4>
        );
        continue;
      } else if (trimmedLine.startsWith("##")) {
        elements.push(
          <h3 key={`h3-${i}`} className="text-lg font-bold text-slate-900 mt-5 mb-2.5">
            {renderInlineMarkdown(trimmedLine.slice(2).trim())}
          </h3>
        );
        continue;
      } else if (trimmedLine.startsWith("#")) {
        elements.push(
          <h2 key={`h2-${i}`} className="text-xl font-extrabold text-slate-900 mt-6 mb-3">
            {renderInlineMarkdown(trimmedLine.slice(1).trim())}
          </h2>
        );
        continue;
      }
      
      // Handle Bullet Lists
      if (trimmedLine.startsWith("* ") || trimmedLine.startsWith("- ")) {
        elements.push(
          <ul key={`ul-${i}`} className="list-disc list-inside ml-4 text-slate-700 space-y-1.5 my-1">
            <li>{renderInlineMarkdown(trimmedLine.slice(2).trim())}</li>
          </ul>
        );
        continue;
      }
      
      // Handle Numbered Lists
      const numMatch = trimmedLine.match(/^(\d+)\.\s(.*)/);
      if (numMatch) {
        elements.push(
          <ol key={`ol-${i}`} className="list-decimal list-inside ml-4 text-slate-700 space-y-1.5 my-1">
            <li value={parseInt(numMatch[1])}>
              {renderInlineMarkdown(numMatch[2].trim())}
            </li>
          </ol>
        );
        continue;
      }
      
      // Normal Paragraph
      elements.push(
        <p key={`p-${i}`} className="text-slate-700 leading-relaxed text-sm my-2">
          {renderInlineMarkdown(line)}
        </p>
      );
    }
    
    return elements;
  };

  // Parses inline code `text`, bold **text**, and normal text
  const renderInlineMarkdown = (text: string): React.ReactNode[] => {
    // Regular expression to match bold (**text**) and inline code (`text`)
    const regex = /(\*\*.*?\*\*|`.*?`)/g;
    const parts = text.split(regex);
    
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index} className="font-semibold text-slate-900">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code key={index} className="bg-sky-50 border border-sky-100/50 text-indigo-700 font-mono text-xs px-1.5 py-0.5 rounded text-wrap break-all inline-block">
            {part.slice(1, -1)}
          </code>
        );
      }
      return part;
    });
  };

  return <div className="markdown-body text-slate-800">{parseMarkdown(content)}</div>;
}
