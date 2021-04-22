import multi from '@rollup/plugin-multi-entry';
import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';

export default [{
    input: '*.ts',
    output: {
        file: './dist/bundle.mjs'
    },
    plugins: [
        multi(),
        resolve(),
        alias({ /* [ADD_HERE] path aliases */})
    ]
}]