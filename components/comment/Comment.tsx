import React from 'react';

// Figma source: Components › Popups
//   Comment/360 (id: 3032:10665) — Logged in: Yes | No
//   Comment/375 (id: 3032:10638) — Logged in: Yes | No
//   Comment/768+(id: 3032:10654) — Logged in: YES | No

export type CommentBreakpoint = '360' | '375' | '768+';

export interface CommentProps {
  loggedIn?:    boolean;
  breakpoint?:  CommentBreakpoint;
  author?:      string;
  avatar?:      React.ReactNode;
  timestamp?:   string;
  children?:    React.ReactNode;
  onSubmit?:    (text: string) => void;
  className?:   string;
}

export function Comment({
  loggedIn   = false,
  breakpoint = '360',
  author,
  avatar,
  timestamp,
  children,
  onSubmit,
  className,
}: CommentProps) {
  const [text, setText] = React.useState('');

  return (
    <div
      data-breakpoint={breakpoint}
      data-logged-in={loggedIn}
      className={['isc-comment', className].filter(Boolean).join(' ')}
    >
      {(avatar || author) && (
        <div className="isc-comment__meta">
          {avatar    && <div className="isc-comment__avatar">{avatar}</div>}
          {author    && <span className="isc-comment__author">{author}</span>}
          {timestamp && <time className="isc-comment__time">{timestamp}</time>}
        </div>
      )}
      <div className="isc-comment__body">{children}</div>
      {loggedIn && onSubmit && (
        <form
          className="isc-comment__form"
          onSubmit={e => { e.preventDefault(); onSubmit(text); setText(''); }}
        >
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Add a comment…"
          />
          <button type="submit" disabled={!text.trim()}>Post</button>
        </form>
      )}
    </div>
  );
}
