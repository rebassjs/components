#!/usr/bin/env node
const path = require('path')
// const shell = require('shelljs')
const got = require('got')

const repo = 'rebassjs%2Frebassjs.github.io'

console.log(`Fetching Git commit hash...`)

/*
const gitCommitRet = shell.exec('git rev-parse HEAD', {
  cwd: path.join(__dirname, '..')
})

if (0 !== gitCommitRet.code) {
  console.error('Error getting git commit hash')

  process.exit(-1)
}
*/

// const gitCommitHash = gitCommitRet.stdout.trim()

// console.log(`Git commit: ${gitCommitHash}`)
console.log('Calling Travis...')

const endpoint = `https://api.travis-ci.org/repo/${repo}/requests`

got.post(endpoint, {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Travis-API-Version': '3',
    'Authorization': `token ${process.env.TRAVIS_API_TOKEN}`,
  },
  body: JSON.stringify({
    request: {
      // message: `Trigger build at ${repo} commit: ${gitCommitHash}`,
      message: `Trigger build at ${repo}`,
      branch: 'src',
    },
  }),
})
.then(() => {
  console.log(`Triggered build of ${repo}`)
})
.catch((err) => {
  console.error(err)
  process.exit(-1)
})
