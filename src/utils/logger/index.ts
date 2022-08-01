import chalk from 'chalk'

console.old_log = console.log

const log = function (...messages: any[]) {
  let text = ''
  for (const message of messages) {
    text += message + ' '
  }
  console.old_log(chalk.blue(text))
}

const start = function (...messages: string[]) {
  let text = ''
  for (const message of messages) {
    text += message + ' '
  }
  console.old_log(chalk.bgGreen.bold.black(text))
}

const success = function (...messages: string[]) {
  let text = ''
  for (const message of messages) {
    text += message + ' '
  }
  console.old_log(chalk.green(text))
}

const error = function (...messages: string[]) {
  let text = ''
  for (const message of messages) {
    text += message + ' '
  }
  console.old_log(chalk.red(text))
}

const warn = function (...messages: string[]) {
  let text = ''
  for (const message of messages) {
    text += message + ' '
  }
  console.old_log(chalk.yellow(text))
}

const defineLogger = () => {
  console.log = log
  console.success = success
  console.error = error
  console.warn = warn
  console.start = start
}

export default defineLogger
