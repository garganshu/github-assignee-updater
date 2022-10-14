
<a href="https://www.buymeacoffee.com/garganshu" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Shell Script](https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white)

<a href="https://github.com/garganshu/github-assignee-updater/releases">![](https://img.shields.io/github/v/release/garganshu/github-assignee-updater)</a>
[![](https://img.shields.io/badge/marketplace-github--assignee--updater-green?style=flat-square)](https://github.com/marketplace/actions/github-assignee-updater)

# Github Assignee Updater

Updating assignees made easy in your workflow using Github Assignee Updater :white_check_mark:


Why is this plugin in action? :gem:
----

* Improves the developer productivity to auto update assignees :child:

* Configurable action and helps to automate the workflow :hammer:

* Effective CI/CD pipelines :white_check_mark:

How to use
----

1. Re-assign Issues to User(s)

```
filter-labels: ready-for-review
update-assignees: username
```
        
 Before |  After
-------- | ---
![caseBefore1](art/ready_for_review_no_assignee.png) | ![caseAfter1](art/ready_for_review_assignee.png)

2. Clear Assignees from Issues

```
filter-labels: ready-for-review
clear-assignees: true
```
        
 Before |  After
-------- | ---
![caseBefore2](art/fixed_label_assignee.png) | ![caseAfter2](art/fixed_label_no_assignee.png)


Inputs
------

### `owner`

**Required** <br />
Owner of Organization or Repository

### `repo`

**Required** <br />
Repository name

### `token`

**Required** <br />
Github access token

### `filter-labels`

Filter issues which contains all labels eg. label1,label2 <br />
Default - fetches all issues

### `clear-assignees`

Remove all assignees from issues eg. true/false <br />
Default - false

### `update-assignees`

Update existing assignees with new assignees eg. username,username1

## Sample usage

```
name: Update Issues Assignee

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - name: update assignees
      id: updater
      uses: garganshu/github-assignee-updater@v1.0.0
      with:
        owner: ${{secrets.OWNER}}
        repo: ${{secrets.REPO}}
        token: ${{secrets.TOKEN}}
        filter-labels: ready-for-review
        clear-assignees: false
        update-assignees: username

```

Projects using Github Label Updater? 🚀
----

### `Frontier` - Your Front Seat to Crypto and DeFi (<a href="https://frontier.xyz/" target="_blank">frontier.xyz</a>)

