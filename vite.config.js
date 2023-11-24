import {defineConfig} from 'vite'
import {Plugin as CDNImport} from "vite-plugin-cdn-import"
import react from '@vitejs/plugin-react-swc'


const cdnModules=[
    {
        name:'react',
        var:"React",
        path:"https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"
    }
]
export default defineConfig({
    plugins: [
        react(),
        CDNImport({
            modules:cdnModules
        })
    ],
})
