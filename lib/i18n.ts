// Supported languages configuration
export const SUPPORTED_LANGUAGES = {
  en: {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
    countries: ['US', 'GB', 'CA', 'AU', 'NZ', 'IE'],
  },
  ar: {
    code: 'ar',
    name: 'العربية',
    flag: '🇸🇦',
    countries: ['SA', 'AE', 'KW', 'QA', 'BH', 'OM', 'EG', 'JO', 'LB', 'SY', 'IQ', 'MA', 'DZ', 'TN', 'LY', 'SD', 'YE', 'PS'],
  },
  es: {
    code: 'es',
    name: 'Español',
    flag: '🇪🇸',
    countries: ['ES', 'MX', 'AR', 'CO', 'PE', 'VE', 'CL', 'EC', 'GT', 'CU', 'BO', 'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'GQ', 'UY'],
  },
  fr: {
    code: 'fr',
    name: 'Français',
    flag: '🇫🇷',
    countries: ['FR', 'BE', 'CH', 'CA', 'MC', 'LU', 'SN', 'CI', 'ML', 'BF', 'NE', 'TD', 'CF', 'CG', 'CD', 'GA', 'CM', 'HT', 'DJ', 'MG', 'SC', 'MU', 'KM'],
  }
} as const;

export type SupportedLanguage = keyof typeof SUPPORTED_LANGUAGES;

// Default language fallback
export const DEFAULT_LANGUAGE: SupportedLanguage = 'en';

// Get language from pathname
export function getLanguageFromPath(pathname: string): SupportedLanguage {
  for (const [code] of Object.entries(SUPPORTED_LANGUAGES)) {
    if (pathname.startsWith(`/${code}/`) || pathname === `/${code}`) {
      return code as SupportedLanguage;
    }
  }
  return DEFAULT_LANGUAGE;
}

// Remove language prefix from pathname
export function removeLanguagePrefix(pathname: string): string {
  for (const [code] of Object.entries(SUPPORTED_LANGUAGES)) {
    if (pathname.startsWith(`/${code}/`)) {
      return pathname.replace(`/${code}`, '');
    }
    if (pathname === `/${code}`) {
      return '/';
    }
  }
  return pathname;
}

// Add language prefix to pathname
export function addLanguagePrefix(pathname: string, language: SupportedLanguage): string {
  const cleanPath = removeLanguagePrefix(pathname);
  return `/${language}${cleanPath}`;
}

// Detect language from country and Accept-Language header
export function detectLanguage(country: string | null, acceptLanguage: string): SupportedLanguage {
  // First, try to detect based on country
  if (country) {
    for (const [code, config] of Object.entries(SUPPORTED_LANGUAGES)) {
      if (config.countries.includes(country as never)) {
        return code as SupportedLanguage;
      }
    } 
  }

  // Fallback to Accept-Language header
  if (acceptLanguage) {
    const languages = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim().toLowerCase())
      .filter(lang => lang.length > 0);

    for (const lang of languages) {
      // Check for exact match
      if (SUPPORTED_LANGUAGES[lang as SupportedLanguage]) {
        return lang as SupportedLanguage;
      }
      
      // Check for language prefix (e.g., 'en' from 'en-US')
      const langPrefix = lang.split('-')[0];
      if (SUPPORTED_LANGUAGES[langPrefix as SupportedLanguage]) {
        return langPrefix as SupportedLanguage;
      }
    }
  }

  // Default fallback
  return DEFAULT_LANGUAGE;
}

// Get all supported languages as array
export function getSupportedLanguages() {
  return Object.values(SUPPORTED_LANGUAGES);
}

// Check if a language is supported
export function isSupportedLanguage(language: string): language is SupportedLanguage {
  return language in SUPPORTED_LANGUAGES;
} 