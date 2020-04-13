module.exports = {
  theme: {
    extend: {
      fontFamily: {
        mono: ['Source Code Pro', 'monospace'],
      },
      colors: {
        't-bg': "#011627",
        't-primary': "#c792ea", 
        't-secondary': "#f78c6c",
        't-text': "#abb2bf",
        't-dim': "#5c6370",
      }
    }
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'group-hover'],
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    text: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: []
}