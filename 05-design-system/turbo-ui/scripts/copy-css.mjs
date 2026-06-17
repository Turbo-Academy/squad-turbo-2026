// Copia os CSS de tokens/tema/estilos do src pro dist preservando a estrutura
// de @import. styles.css é o entry: importa tokens.css + turbo-theme.css.
import { mkdirSync, copyFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const files = ['styles.css', 'tokens.css', 'turbo-theme.css']

mkdirSync(join(root, 'dist'), { recursive: true })
for (const f of files) {
  copyFileSync(join(root, 'src', f), join(root, 'dist', f))
  console.log(`  ✓ dist/${f}`)
}
