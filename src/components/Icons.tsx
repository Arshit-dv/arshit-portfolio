import React from 'react';

export function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function LeetCodeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226a1.374 1.374 0 0 0-.416.946c0 .363.141.716.416.974l4.981 4.708a1.374 1.374 0 0 0 1.942 0 1.374 1.374 0 0 0 0-1.942l-4.007-3.74 4.007-3.74a1.374 1.374 0 0 0-.556-2.432zM16.143 5.486a1.374 1.374 0 0 0-1.942 0l-7.79 7.371a1.374 1.374 0 0 0 0 1.942l7.79 7.371a1.374 1.374 0 0 0 1.942-1.942l-6.819-6.45 6.819-6.45a1.374 1.374 0 0 0 0-1.842zM21.2 12.8h-7.6a1.374 1.374 0 0 0 0 2.748h7.6a1.374 1.374 0 1 0 0-2.748z" />
    </svg>
  );
}

export function CodeChefIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.968 1.996c-2.3 0-4.4.88-5.96 2.33C4.45 5.88 3.5 7.9 3.5 10.15c0 1.63.49 3.16 1.36 4.43.08.12.16.23.25.35l-1.9 4.38c-.14.32.08.69.43.69h16.72c.35 0 .57-.37.43-.69l-1.9-4.38c.09-.12.17-.23.25-.35.87-1.27 1.36-2.8 1.36-4.43 0-2.25-.95-4.27-2.508-5.824-1.56-1.45-3.66-2.33-5.96-2.33zm0 2.05c1.73 0 3.31.66 4.49 1.74 1.16 1.16 1.88 2.68 1.88 4.36 0 1.25-.38 2.4-1.03 3.37L16.2 11.5c-.24.12-.34.4-.23.64l1.45 3.34h-10.9l1.45-3.34c.11-.24.01-.52-.23-.64L6.64 13.52c-.65-.97-1.03-2.12-1.03-3.37 0-1.68.72-3.2 1.88-4.36 1.18-1.08 2.76-1.74 4.478-1.74z" />
    </svg>
  );
}

export function CodeforcesIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path fill="#F5B041" d="M4.5 7.5a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 3 0V9a1.5 1.5 0 0 0-1.5-1.5z" />
      <path fill="#3498DB" d="M12 3a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 3 0v-12A1.5 1.5 0 0 0 12 3z" />
      <path fill="#E74C3C" d="M19.5 12a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-1.5-1.5z" />
    </svg>
  );
}

export function KaggleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.182-6.582-1.805 1.734v4.828c0 .188-.094.269-.281.269H5.081c-.187 0-.281-.081-.281-.269V.27c0-.188.094-.27.281-.27h2.565c.188 0 .281.082.281.27v14.475l6.732-6.883c.141-.164.293-.246.457-.246h3.292c.164 0 .258.07.281.211.023.164-.035.293-.176.387l-6.848 6.744 7.246 8.52c.117.141.152.269.105.387z" />
    </svg>
  );
}

export function EmailIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
