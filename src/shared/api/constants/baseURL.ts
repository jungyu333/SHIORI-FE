const MODE = process.env.NODE_ENV;

const BASE_URL_CONFIG = {
  shioriBE: {
    development: process.env.NEXT_PUBLIC_SHIORI_BE_URL,

    /* TO DO FIX */
    production: process.env.NEXT_PUBLIC_SHIORI_BE_URL,
  },
};

export const BASE_URL = {
  shioriBE: BASE_URL_CONFIG.shioriBE[MODE as 'development' | 'production'],
};
