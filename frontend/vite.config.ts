import react from '@vitejs/plugin-react'
import { join } from 'path'
import { ConfigEnv, UserConfig } from 'vite'

const srcRoot = join(__dirname, 'src')
const distDir = join(__dirname, 'dist')

export default (_configEnv: ConfigEnv): UserConfig => {
    return {
        root: srcRoot,
        base: '/',
        plugins: [react()],
        resolve: {
            alias: {
                '/@': srcRoot,
            },
        },
        build: {
            outDir: distDir,
            emptyOutDir: true,
            rollupOptions: {
                // disable hash suffix for output files
                output: {
                    entryFileNames: `assets/[name].js`,
                    chunkFileNames: `assets/[name].js`,
                    assetFileNames: `assets/[name].[ext]`,
                },
            },
        },
        optimizeDeps: {
            exclude: ['path'],
        },
    } as UserConfig
}
