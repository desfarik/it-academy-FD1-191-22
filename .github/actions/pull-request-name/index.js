const core = require('@actions/core')
const github = require('@actions/github')
const titleUtils = require('../title.utils')

function isValidPullRequestName(title) {
  const parts = title.split('/')
  return titleUtils.isValidUserName(parts[0]) && titleUtils.isValidPRName(parts[1])
}

function run() {
  const githubContext = github.context
  const title = githubContext.payload.pull_request && githubContext.payload.pull_request.title || ''
  if (isValidPullRequestName(title)) {
    core.info('Pull Request Name is clear');
    return;
  }
  core.setFailed("Error in Pull Request Name")
}

try {
  run()
} catch (error) {
  core.setFailed(error.message)
}
