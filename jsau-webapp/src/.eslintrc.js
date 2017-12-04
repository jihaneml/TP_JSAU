module.exports = {
    plugins: [
        'vue'
    ],
    extends: [
        'usecases/usecase/browser-es2015',
        'plugin:vue/recommended'
    ],
    rules: {
        // override/add rules' settings here
        'vue/return-in-computed-property': 'error',
        'vue/no-template-key': 'error',
        'vue/require-v-for-key': 'off',
        'vue/valid-v-for': 'off',
        'vue/no-shared-component-data': 'error',
        'vue/name-property-casing': [2, 'kebab-case']
    }
}
