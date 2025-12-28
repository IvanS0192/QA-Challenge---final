import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 60 * 1000,
  expect: { timeout: 5000 },

  fullyParallel: false,
  retries: 0,
  workers: 1,

  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],

  use: {
    baseURL: 'http://www.automationpractice.pl',

    headless: false,
    viewport: null,
    launchOptions: { args: ['--start-maximized'] },

    actionTimeout: 10 * 1000,
    navigationTimeout: 15 * 1000,

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      metadata: { author: 'Ivan Stojanovska' }
    }
  ]
});


//“Playwright configuration is defined in playwright.config.ts where I control browser behavior, timeouts, reporters, and environment settings. I keep it minimal and readable.//

//| Setting              | Why                     |
//| -------------------- | ----------------------- |
//|`headless: false`    | Browser visible         |
//| `viewport: null`     | Maximized window        |
//| `--start-maximized`  | Real full screen        |
//| `testDir: './tests'` | Finds your tests        |
//| `timeout: 30s`       | Prevents early failures |
//| `html` reporter      | Professional report     |
//| `chromium` only      | Fast + stable           |