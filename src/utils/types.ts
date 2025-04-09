
export interface ParsedResponse {
  intro: string;
  reframes: Array<{
    original: string;
    reframe: string;
  }>;
}
