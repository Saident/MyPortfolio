import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    {
      name: 'startup-resume-link',
      transformIndexHtml: {
        order: 'post',
        handler(html, { bundle }) {
          if (!bundle) return html
          // Vite rewrites image/font URLs in HTML, but not download anchors.
          const resume = Object.values(bundle).find(asset => asset.type === 'asset' && asset.names?.includes('resume 2.pdf'))
          if (!resume) throw new Error('The startup résumé link must resolve to the existing bundled PDF.')
          return html.replaceAll('/src/assets/resume%202.pdf', `/${encodeURI(resume.fileName)}`)
        },
      },
    },
  ],
})
