import chalk from 'chalk'

console.old_log = console.log

const log = function (...messages: string[]) {
  messages.unshift('info   :')
  console.old_log(chalk.blue(_text(messages)))
}

const start = function (...messages: string[]) {
  messages.unshift('start  :')
  console.old_log(chalk.bgGreen.bold.black(_text(messages)))
}

const success = function (...messages: string[]) {
  messages.unshift('success:')
  console.old_log(chalk.green(_text(messages)))
}

const error = function (...messages: string[]) {
  messages.unshift('error  :')
  console.old_log(chalk.red(_text(messages)))
}

const warn = function (...messages: string[]) {
  messages.unshift('warn   :')
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
  let text = new Date().toISOString()
  for (const message of messages) {
    text += ' ' + message
  }
  return text
}

export default defineLogger
