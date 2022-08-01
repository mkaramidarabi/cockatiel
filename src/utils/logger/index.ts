import chalk from 'chalk'

console.old_log = console.log

const log = function (...messages: string[]) {
  console.old_log(chalk.blue(_text(messages)))
}

const start = function (...messages: string[]) {
  console.old_log(chalk.bgGreen.bold.black(_text(messages)))
}

const success = function (...messages: string[]) {
  console.old_log(chalk.green(_text(messages)))
}

const error = function (...messages: string[]) {
  console.old_log(chalk.red(_text(messages)))
}

const warn = function (...messages: string[]) {
  console.old_log(chalk.yellow(_text(messages)))
}

const defineLogger = () => {
  console.log = log
  console.success = success
  console.error = error
  console.warn = warn
  console.start = start
}

const _text = (messages: string[]): string => {
  let text = ''
  for (const message of messages) {
    text += message + ' '
  }
  return text
}

export default defineLogger
