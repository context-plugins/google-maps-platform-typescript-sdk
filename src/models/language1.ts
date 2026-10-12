import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The language in which to return results.
 *
 * * See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport).
 *   Google often updates the supported languages, so this list may not be exhaustive.
 * * If `language` is not supplied, the API attempts to use the preferred language as specified in
 *   the `Accept-Language` header.
 * * The API does its best to provide a street address that is readable for both the user and
 *   locals. To achieve that goal, it returns street addresses in the local language, transliterated
 *   to a script readable by the user if necessary, observing the preferred language. All other
 *   addresses are returned in the preferred language. Address components are all returned in the
 *   same language, which is chosen from the first component.
 * * If a name is not available in the preferred language, the API uses the closest match.
 * * The preferred language has a small influence on the set of results that the API chooses to
 *   return, and the order in which they are returned. The geocoder interprets abbreviations
 *   differently depending on language, such as the abbreviations for street types, or synonyms that
 *   may be valid in one language but not in another. For example, _utca_ and _tér_ are synonyms for
 *   street in Hungarian.
 */
export const Language1 = {
  Ar: "ar",
  Bg: "bg",
  Bn: "bn",
  Ca: "ca",
  Cs: "cs",
  Da: "da",
  De: "de",
  El: "el",
  En: "en",
  EnAu: "en-AU",
  EnGb: "en-GB",
  Es: "es",
  Eu: "eu",
  Fa: "fa",
  Fi: "fi",
  Fil: "fil",
  Fr: "fr",
  Gl: "gl",
  Gu: "gu",
  Hi: "hi",
  Hr: "hr",
  Hu: "hu",
  Id: "id",
  It: "it",
  Iw: "iw",
  Ja: "ja",
  Kn: "kn",
  Ko: "ko",
  Lt: "lt",
  Lv: "lv",
  Ml: "ml",
  Mr: "mr",
  Nl: "nl",
  No: "no",
  Pl: "pl",
  Pt: "pt",
  PtBr: "pt-BR",
  PtPt: "pt-PT",
  Ro: "ro",
  Ru: "ru",
  Sk: "sk",
  Sl: "sl",
  Sr: "sr",
  Sv: "sv",
  Ta: "ta",
  Te: "te",
  Th: "th",
  Tl: "tl",
  Tr: "tr",
  Uk: "uk",
  Vi: "vi",
  ZhCn: "zh-CN",
  ZhTw: "zh-TW",
} as const;
export type Language1 = (typeof Language1)[keyof typeof Language1] | (string & {});

export const language1Schema: EnumSchema<Language1> = s.enumOf<Language1>(Language1);
