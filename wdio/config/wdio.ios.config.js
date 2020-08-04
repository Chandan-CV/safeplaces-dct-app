process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const _ = require('lodash');
const defaults = require('./wdio.base.conf').config;

// const branchName = process.env.BRANCH_NAME;
// const majorMinorString = process.env.MAJOR_VERSION_STRING;
// const patchVersion = process.env.PATCH_VERSION;
// const buildVersion = majorMinorString + '.' + patchVersion;
// let artifact = `sauce-storage:qbmobile-${branchName}-${buildVersion}.app.zip`;
// if (!process.env.LOCAL) {
//   artifact = `sauce-storage:qbmobile-${branchName}-${buildVersion}.app.zip`;
// } else {
//   artifact = 'sauce-storage:qbmobile-local.app.zip';
// }
const defaultIOSCapabilities = {
  platformName: 'iOS',
  automationName: 'XCUITest',
  app: 'sauce-storage:pathcheck-ios.app.zip',
  waitForQuiescence: false,
  useNewWDA: true,
};
const overrides = {
  capabilities: [
    {
      ...defaultIOSCapabilities,
      platformVersion: '13.2',
      deviceName: 'iPhone XR Simulator',
    },
  ],
};
// Send the merged config to wdio
exports.config = _.defaultsDeep(overrides, defaults);
