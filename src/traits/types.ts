type Translation = {
  title: string,
  description: string,
};

export type Trait<T extends ('weighted' | 'deprecated')> = {
  id: string
  translations: {
    en: Translation,
    [key: string]: Translation,
  };
} & (T extends 'weighted' ? { weight: number; } : { deprecated: true; });
