module.exports = {
  theme: {
    extend: {
      fontFamily: {
        mono: ['Source Code Pro', 'monospace'],
      },
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        muted: "var(--color-muted)",
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
