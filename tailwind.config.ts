import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'

const config: Config = {
  darkMode: ["class"],
  content: ['index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [tailwindAnimate],
}

export default config
