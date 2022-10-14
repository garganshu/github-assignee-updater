const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const owner = core.getInput('owner', {required: true});
    const repo = core.getInput('repo', {required: true});
    const token = core.getInput('token', {required: true});
    const filterLabels = core.getInput('filter-labels');
    const clearAssignees = core.getInput('clear-assignees') ;
    const updateAssignees = core.getInput('update-assignees');

    const octokit = new github.getOctokit(token)

    const { data: issues} = await octokit.rest.issues.listForRepo({
      owner: owner,
      repo: repo,
      labels: filterLabels
    });

    const updateAssigneesArray = updateAssignees.split(',').filter(Boolean)
    
    for(const issue of issues) {
      console.log("Issue number: #"+issue.number)
      const isClearAssignees = clearAssignees.toLowerCase().trim().localeCompare('true') == 0
      if(updateAssigneesArray.length > 0 || isClearAssignees) {
        let assignees = updateAssigneesArray
        if(isClearAssignees) {
          assignees = []
        }
        await octokit.rest.issues.update({
          owner: owner,
          repo: repo,
          issue_number: issue.number,
          assignees: assignees
        });
      }

      console.log(issue.number)
  
    }

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();