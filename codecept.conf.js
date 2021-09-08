exports.config = {
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: '/Users/rodolfolacerda/ProjetoGIT/ChallengeMobile/APK/product_registration.apk',
      desiredCapabilities: {
        udid: 'emulator-5554',
        autoGrantPermissions: true,
      }
    }
  },
  include: {
    I: './steps_file.js',
    cadastro_produto_page: "./pages/cadastro_produto_page.js",

  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/cadastro_produto_steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'ChallengeMOBILE-Ame'
}