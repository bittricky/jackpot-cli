# lottery-cli

> Do you feel lucky? Well... Let's roll the dice and find out 🎲.

A Command line tool to generate lottery numbers

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

<!-- toc -->
* [lottery-cli](#lottery-cli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g lottery-cli
$ lottery COMMAND
running command...
$ lottery (--version)
lottery-cli/1.0.0 linux-x64 node-v18.20.3
$ lottery --help [COMMAND]
USAGE
  $ lottery COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`lottery help [COMMAND]`](#lottery-help-command)
* [`lottery plugins`](#lottery-plugins)
* [`lottery plugins add PLUGIN`](#lottery-plugins-add-plugin)
* [`lottery plugins:inspect PLUGIN...`](#lottery-pluginsinspect-plugin)
* [`lottery plugins install PLUGIN`](#lottery-plugins-install-plugin)
* [`lottery plugins link PATH`](#lottery-plugins-link-path)
* [`lottery plugins remove [PLUGIN]`](#lottery-plugins-remove-plugin)
* [`lottery plugins reset`](#lottery-plugins-reset)
* [`lottery plugins uninstall [PLUGIN]`](#lottery-plugins-uninstall-plugin)
* [`lottery plugins unlink [PLUGIN]`](#lottery-plugins-unlink-plugin)
* [`lottery plugins update`](#lottery-plugins-update)

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

## `lottery plugins`

List installed plugins.

```
USAGE
  $ lottery plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ lottery plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.1.3/src/commands/plugins/index.ts)_

## `lottery plugins add PLUGIN`

Installs a plugin into lottery.

```
USAGE
  $ lottery plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into lottery.

  Uses bundled npm executable to install plugins into /home/runner/.local/share/lottery

  Installation of a user-installed plugin will override a core plugin.

  Use the LOTTERY_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the LOTTERY_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ lottery plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ lottery plugins add myplugin

  Install a plugin from a github url.

    $ lottery plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ lottery plugins add someuser/someplugin
```

## `lottery plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ lottery plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ lottery plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.1.3/src/commands/plugins/inspect.ts)_

## `lottery plugins install PLUGIN`

Installs a plugin into lottery.

```
USAGE
  $ lottery plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into lottery.

  Uses bundled npm executable to install plugins into /home/runner/.local/share/lottery

  Installation of a user-installed plugin will override a core plugin.

  Use the LOTTERY_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the LOTTERY_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ lottery plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ lottery plugins install myplugin

  Install a plugin from a github url.

    $ lottery plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ lottery plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.1.3/src/commands/plugins/install.ts)_

## `lottery plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ lottery plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ lottery plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.1.3/src/commands/plugins/link.ts)_

## `lottery plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ lottery plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ lottery plugins unlink
  $ lottery plugins remove

EXAMPLES
  $ lottery plugins remove myplugin
```

## `lottery plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ lottery plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.1.3/src/commands/plugins/reset.ts)_

## `lottery plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ lottery plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ lottery plugins unlink
  $ lottery plugins remove

EXAMPLES
  $ lottery plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.1.3/src/commands/plugins/uninstall.ts)_

## `lottery plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ lottery plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ lottery plugins unlink
  $ lottery plugins remove

EXAMPLES
  $ lottery plugins unlink myplugin
```

## `lottery plugins update`

Update installed plugins.

```
USAGE
  $ lottery plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.1.3/src/commands/plugins/update.ts)_
<!-- commandsstop -->

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
