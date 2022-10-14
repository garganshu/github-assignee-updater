
<a href="https://www.buymeacoffee.com/garganshu" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

<a href="https://github.com/garganshu/github-assignee-updater/releases">![](https://img.shields.io/github/v/release/garganshu/github-assignee-updater)</a>
[![](https://img.shields.io/badge/marketplace-github--assignee--updater-green?style=flat-square)](https://github.com/marketplace/actions/github-assignee-updater)

[![GitHub stars](https://img.shields.io/github/stars/garganshu/github-assignee-updater)](https://github.com/garganshu/github-assignee-updater/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/garganshu/github-assignee-updater)](https://github.com/garganshu/github-assignee-updater/issues)
[![GitHub license](https://img.shields.io/github/license/garganshu/github-assignee-updater)](https://github.com/garganshu/github-assignee-updater/blob/master/LICENSE)

# Github Assignee Updater

This action can filter issues based on labels and update assignees

Demo
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

Contributions
-------------

Pull requests and contributions are most welcome.

Please drop a star if you like it ❤️
