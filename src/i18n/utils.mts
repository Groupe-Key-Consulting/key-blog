import { defaultLang, languages, showDefaultLang, ui } from './ui';

/**
 * This function is used to extract the language from a given URL.
 * If the language is not found in the URL, it returns the default language.
 * Note: This function is not used in the starter blog, but it's a good example of how
 * to use the URL to get the language.
 *
 * @param {URL} url - The URL from which to extract the language.
 * @returns {keyof typeof ui | typeof defaultLang} - The extracted language if found, otherwise the default language.
 *
 * @example
 *
 * let url = new URL("http://example.com/en/page1");
 * let lang = getLangFromUrl(url);
 * console.log(lang); // Outputs: "en"
 */
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

/**
 * This function is used to get the translations based on the provided language and key.
 * If the translation for the provided language and key is not found, it falls back to the default language.
 * If the translation is still not found, it returns the key.
 * It also replaces any tags in the translation with the corresponding values from the `tags` parameter.
 *
 * @param {keyof typeof ui} lang - The language to get the translation for. Defaults to the default language.
 * @returns {function} - A function that takes a key and an optional tags object and returns the translation.
 *
 * @example
 *
 * const t = useTranslations('en');
 * console.log(t('components.themeSwitcher.toggleDarkMode', { darkMode: 'dark mode' }));
 * // Outputs: "Toggle dark mode" if the translation file has: 'Toggle {darkMode}'
 */
export function useTranslations(lang: keyof typeof ui = defaultLang) {
  return function t(
    key: keyof (typeof ui)[typeof defaultLang],
    tags?: Record<string, string>,
  ) {
    const translation = ui[lang][key] || ui[defaultLang][key];

    // If the translation is not found, return the key
    if (!translation) return key;

    // Replace the tags in the translation with the values passed, if any
    return (ui[lang][key] || ui[defaultLang][key]).replace(
      /\{(\w+)\}/g,
      (_, match) => tags?.[match] || '',
    );
  };
}

/**
 * This function is used to get the translated path based on the provided language.
 * If the language is the default language and `showDefaultLang` is false, it returns the original path.
 * Otherwise, it returns the path prefixed with the language.
 *
 * @param {keyof typeof ui} lang - The language to get the translated path for. Defaults to the default language.
 * @returns {function} - A function that takes a path and an optional language and returns the translated path.
 *
 * @example
 *
 * const translate = useTranslatedPath('en');
 * console.log(translate('/page1', 'fr')); // Outputs: "/fr/page1"
 */
export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}

/**
 * This function is used to switch the language in the URL path.
 *
 * @param {URL} url - The original URL.
 * @param {keyof typeof ui} lang - The language to switch to.
 * @returns {string} - The updated URL path with the new language.
 *
 * @example
 *
 * let url = new URL("http://example.com/en/page1");
 * let newUrl = switchLang(url, "fr");
 * console.log(newUrl); // Outputs: "/fr/page1"
 */
export function switchLang(url: URL, lang: keyof typeof ui) {
  const pathname = url.pathname;
  // Extract the first segment of the path to check if it's a language code
  const segments = pathname.split('/').filter(segment => segment.length > 0);
  const firstSegmentIsLang = Object.keys(languages).includes(segments[0]);
  let newPathname = '';
  if (firstSegmentIsLang) {
    // Remove the language code from the path
    segments.shift();
  }
  if (lang !== defaultLang) {
    // Prepend the new language code if it's not the default language
    newPathname = `/${lang}`;
  }
  // Append the rest of the path
  newPathname += '/' + segments.join('/');
  return newPathname || '/';
}
