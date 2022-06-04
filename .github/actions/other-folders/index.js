const core = require('@actions/core')

function run() {
  const branchName = core.getInput('branch-name', {required: true}) || '';
  const changedFiles = core.getInput('changed-files', {required: true}) || '';

  const userName = branchName.split('/')[0];
  const otherPeopleFiles = changedFiles.split(' ').filter(file => !file.startsWith(`src/${userName}`));
  if (otherPeopleFiles.length > 0) {
    core.setFailed("You have changed files in not yours folders: \n" + otherPeopleFiles.join('\n'))
  } else {
    core.info('Changed files looks good');
  }
}

try {
  run()
} catch (error) {
  core.setFailed(error.message)
}
