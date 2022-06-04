const core = require('@actions/core')
const titleUtils = require('../title.utils')

function isValidBranchName(title) {
  const parts = title.split('/')
  return titleUtils.isValidUserName(parts[0]) && titleUtils.isValidBranchName(parts[1])
}

function run() {
  const branchName = core.getInput('branch-name', {required: true}) || '';
  if (isValidBranchName(branchName)) {
    core.info('Branch Name is clear');
    return;
  }
  core.setFailed("Error in Branch Name")
}

try {
  run()
} catch (error) {
  core.setFailed(error.message)
}
