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
  LOTTERY  Name of the major lottery

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

## Supported Lotteries

The `lottery-cli` command-line tool supports generating numbers for the following major global lotteries:

| Lottery                                   | Draw Days                        | Numbers                                                    |
| ----------------------------------------- | -------------------------------- | ---------------------------------------------------------- |
| **Powerball** (USA)                       | Wednesdays, Saturdays            | 5 numbers from 1 to 69 and 1 Powerball number from 1 to 26 |
| **Mega Millions** (USA)                   | Tuesdays, Fridays                | 5 numbers from 1 to 70 and 1 Mega Ball number from 1 to 25 |
| **EuroMillions** (Europe)                 | Tuesdays, Fridays                | 5 numbers from 1 to 50 and 2 Lucky Stars from 1 to 12      |
| **UK National Lottery (Lotto)** (UK)      | Wednesdays, Saturdays            | 6 numbers from 1 to 59                                     |
| **El Gordo** (Spain)                      | Weekly, special draw in December | 5 numbers from 0 to 54                                     |
| **SuperEnalotto** (Italy)                 | Tuesdays, Thursdays, Saturdays   | 6 numbers from 1 to 90                                     |
| **Australian Powerball** (Australia)      | Thursdays                        | 7 numbers from 1 to 35 and 1 Powerball number from 1 to 20 |
| **Oz Lotto** (Australia)                  | Tuesdays                         | 7 numbers from 1 to 45                                     |
| **Canada Lotto 6/49** (Canada)            | Wednesdays, Saturdays            | 6 numbers from 1 to 49                                     |
| **Canada Lotto Max** (Canada)             | Fridays                          | 7 numbers from 1 to 50                                     |
| **France Loto** (France)                  | Mondays, Wednesdays, Saturdays   | 5 numbers from 1 to 49 and 1 Lucky Number from 1 to 10     |
| **German Lotto (Lotto 6aus49)** (Germany) | Wednesdays, Saturdays            | 6 numbers from 1 to 49 and 1 Superzahl from 0 to 9         |

More lotteries will be added in the future. If you'd like to see a specific lottery added, please [create an issue](https://github.com/bittricky/lottery-cli/issues/new) in the repository.
