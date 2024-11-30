import type { PluginCreator } from 'tailwindcss/types/config'

const typographyPlugin: PluginCreator = ({ addUtilities }) =>
  addUtilities([
    {
      '.typo-desk-h1': { fontSize: '40px', fontWeight: '700', lineHeight: '1.5' },
      '.typo-mob-h1': { fontSize: '28px', fontWeight: '700', lineHeight: '1.5' },
      '.typo-desk-h2': { fontSize: '28px', fontWeight: '600', lineHeight: '1.5' },
      '.typo-mob-h2': { fontSize: '24px', fontWeight: '600', lineHeight: '1.5' },
      '.typo-desk-h3': { fontSize: '24px', fontWeight: '600', lineHeight: '1.5' },
      '.typo-mob-h3': { fontSize: '20px', fontWeight: '600', lineHeight: '1.5' },
      '.typo-desk-h4': { fontSize: '20px', fontWeight: '600', lineHeight: '1.5' },
      '.typo-mob-h4': { fontSize: '18px', fontWeight: '600', lineHeight: '1.5' },
      '.typo-desk-h5': { fontSize: '18px', fontWeight: '600', lineHeight: '1.5' },
      '.typo-mob-h5': { fontSize: '16px', fontWeight: '600', lineHeight: '1.5' },
      '.typo-desk-h6': { fontSize: '16px', fontWeight: '600', lineHeight: '1.5' },
      '.typo-mob-h6': { fontSize: '14px', fontWeight: '600', lineHeight: '1.5' },
      '.typo-desk-title-lg': { fontSize: '20px', fontWeight: '600', lineHeight: '1.5' },
      '.typo-mob-title-lg': { fontSize: '16px', fontWeight: '600', lineHeight: '1.5' },
      '.typo-desk-title-md': { fontSize: '16px', fontWeight: '600', lineHeight: '1.5' },
      '.typo-mob-title-md': { fontSize: '14px', fontWeight: '600', lineHeight: '1.5' },
      '.typo-desk-title-sm': { fontSize: '14px', fontWeight: '600', lineHeight: '1.5' },
      '.typo-mob-title-sm': { fontSize: '12px', fontWeight: '600', lineHeight: '1.5' },
      '.typo-desk-body-lg': { fontSize: '16px', fontWeight: '400', lineHeight: '1.5' },
      '.typo-mob-body-lg': { fontSize: '14px', fontWeight: '400', lineHeight: '1.5' },
      '.typo-desk-body-sm': { fontSize: '14px', fontWeight: '400', lineHeight: '1.5' },
      '.typo-mob-body-sm': { fontSize: '12px', fontWeight: '400', lineHeight: '1.5' },
      '.typo-desk-button-lg': { fontSize: '16px', fontWeight: '600', lineHeight: '1.5' },
      '.typo-desk-button-sm': { fontSize: '14px', fontWeight: '600', lineHeight: '1.5' },
      '.typo-mob-button-sm': { fontSize: '14px', fontWeight: '600', lineHeight: '1.5' },
      '.typo-desk-label': { fontSize: '14px', fontWeight: '600', lineHeight: '1.5' },
      '.typo-mob-label': { fontSize: '12px', fontWeight: '600', lineHeight: '1.5' },
      '.typo-desk-input': { fontSize: '14px', fontWeight: '400', lineHeight: '1.5' },
      '.typo-desk-caption': { fontSize: '12px', fontWeight: '400', lineHeight: '1.5' },
    },
  ])
export default typographyPlugin
