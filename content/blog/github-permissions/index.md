---
title: GitHub Permissions for HTTPS repos
date: "2021-09-30T23:46:37.121Z"
description: When you can't push to HTTPS 
---

* You are trying to push a HTTPS GitHub repo and you get permission denied error

```
Username for 'https://github.com': ENTER_GITHUB_USERNAME_HERE
Password for 'https://your_github_username@github.com':
remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.
remote: Please see https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ for more informa
tion.
fatal: Authentication failed for 'https://github.com/YOURREPO.git'
```

## Solution
* You need to generate a token
* The fastest way to do this is to install the <a href="https://cli.github.com/" target="_blank">GitHub CLI</a>
* Once installed, use this:  

`$ gh auth login`

* Then you will be asked to enter your credentials to authenticate on GitHub

### Generate a token on GitHub
* Use this link:

Tip: you can generate a Personal Access Token here https://github.com/settings/tokens

* When creating you need to at least give the token these scopes: 
  - repo
  - read:org
  - admin:public_key

* Then generate the token
* Copy the token
* Paste in the spot when it asks you "Paste your authentication token"

```
? What account do you want to log into? GitHub.com
? You're already logged into github.com. Do you want to re-authenticate? Yes
? What is your preferred protocol for Git operations? SSH
? Upload your SSH public key to your GitHub account? /Users/philiphowley/.ssh/id_ed25519.pub
? How would you like to authenticate GitHub CLI? Paste an authentication token
Tip: you can generate a Personal Access Token here https://github.com/settings/tokens
The minimum required scopes are 'repo', 'read:org', 'admin:public_key'.
? Paste your authentication token: ****************************************
- gh config set -h github.com git_protocol ssh
✓ Configured git protocol
✓ Uploaded the SSH key to your GitHub account: /Users/YOUR-MACHINE-USERNAME/.ssh/id_ed25519.pub
✓ Logged in as YOUR_GITHUB_USERNAME
```

* Now you will be allowed to push your code to GitHub as you have successfully authenticated
