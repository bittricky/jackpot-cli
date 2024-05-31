# lottery-cli

> Do you feel lucky? Well... Let's roll the dice and find out 🎲.

A Command line tool to generate lottery numbers

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

<!-- toc -->

- [lottery-cli](#lottery-cli)
- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g lottery-cli
$ lottery COMMAND
running command...
$ lottery (--version)
lottery-cli/0.0.0 darwin-x64 node-v20.9.0
$ lottery --help [COMMAND]
USAGE
  $ lottery COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`lottery generate`](#lottery-generate)
- [`lottery help [COMMAND]`](#lottery-help-command)

## `lottery generate`

Generate lottery numbers for major global lotteries

```
USAGE
  $ lottery generate -l <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -l, --lotto=<value>  (required) name of major lottery

DESCRIPTION
  Generate lottery numbers for major global lotteries

EXAMPLES
  $ lottery generate --lotto megamillions
```

_See code: [src/commands/generate.ts](https://github.com/bittricky/lottery-cli/blob/v0.0.0/src/commands/generate.ts)_

## `lottery help [COMMAND]`

Display help for lottery.

```
USAGE
  $ lottery help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for lottery.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.22/src/commands/help.ts)_
