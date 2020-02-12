const path = require('path');
const styleguide = path.join(__dirname, 'src/styleguide');

const webpackConfig = {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                            plugins: ["@babel/plugin-proposal-class-properties"]
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                loader: 'css-loader',
                options: {
                    modules: true,
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
            },

        ],

    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
        modules: [
            path.join(__dirname, "src"),
            "node_modules"
        ]
    },
    resolveLoader: {
        modules: [path.join(__dirname, 'node_modules')],
    }
    
};

module.exports = {
    title: 'React Library and Style Guide',
    webpackConfig: require('./node_modules/react-scripts/config/webpack.config.js'),
    components: `src/components/**/*.jsx`,
    // Component to ignore
    ignore: ['**/index.{js,jsx}', '**/__tests__/**', '**/*.test.{js,jsx}'],
    skipComponentsWithoutExample: true,

    // Require other files needed to Component Mocks
    require: [
        // Load in the Global .scss file
        path.join(styleguide, 'index.scss')
    ],
    theme: {
        fontFamily: {
            base: '"Helvetica Neue", Helvetica, Arial, sans-serif'
        }
    },
    // template: {
    //     favicon: ''
    // },
    // Component usage string under component name
    getComponentPathLine(componentPath) {
        const name = path.basename(componentPath, '.jsx');
        const dir = path.dirname(componentPath);
        return `import ${name} from '${dir}';`;
    },
    getExampleFilename(componentPath) {
        return componentPath.replace(/\.jsx?$/, '.md');
    },
    sections: [
        {
            name: 'Introduction',
            description: `Essential reusable components built in react.js`,
            components: `${styleguide}/intro/**/*.jsx`,
            exampleMode: 'hide',
            usageMode: 'hide'
        },
        {
            name: 'UI Components',
            components: `src/components/**/*.jsx`
        }
    ]
    // styleguideDir: path.join(__dirname, 'styleguide')
};
