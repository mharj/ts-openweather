import {z} from 'zod';
export const langCodes = [
	'af',
	'al',
	'ar',
	'az',
	'bg',
	'ca',
	'cz',
	'da',
	'de',
	'el',
	'en',
	'eu',
	'fa',
	'fi',
	'fr',
	'gl',
	'he',
	'hi',
	'hr',
	'hu',
	'id',
	'it',
	'ja',
	'kr',
	'la',
	'lt',
	'mk',
	'no',
	'nl',
	'pl',
	'pt',
	'pt',
	'ro',
	'ru',
	'sv',
	'sk',
	'sl',
	'sp',
	'sr',
	'th',
	'tr',
	'ua',
	'vi',
	'zh_cn',
	'zh_tw',
	'zu',
] as const;
export const langCodeSchema = z.enum(langCodes);
export type LangCode = z.infer<typeof langCodeSchema>;
