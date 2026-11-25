import { createContext, useContext, useEffect, useMemo, useState, Fragment } from 'react';
import { strings, languages } from './strings.js';

const STORAGE_KEY = 'gurukula-lang';
const LanguageContext = createContext(null);

function initialLang() {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (languages.includes(fromUrl)) return fromUrl;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (languages.includes(saved)) return saved;
  } catch {
    // storage unavailable — fall back to English
  }
  return 'en';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: strings[lang] }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>');
  return ctx;
}

/**
 * Fill {tokens} in a string. Values can be text or React elements (e.g. a phone link).
 * Returns a string when every value is text, otherwise an array of nodes.
 */
export function fill(template, values = {}) {
  const parts = template.split(/(\{\w+\})/g);
  const out = parts.map((part) => {
    const m = part.match(/^\{(\w+)\}$/);
    return m && m[1] in values ? values[m[1]] : part;
  });
  if (out.every((p) => typeof p === 'string' || typeof p === 'number')) return out.join('');
  return out.map((p, i) => <Fragment key={i}>{p}</Fragment>);
}
