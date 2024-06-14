# jackpot-cli

> Do you feel lucky? Well... Let's roll the dice and find out 🎲.

A command line tool to generate random lottery numbers

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/jackpot-cli.svg)](https://npmjs.org/package/jackpot-cli)
[![Downloads/week](https://img.shields.io/npm/dw/jackpot-cli.svg)](https://www.npmjs.com/package/jackpot-cli)

<!-- toc -->

-- [jackpot-cli](#jackpot-cli)
-- [Usage](#usage)
-- [Commands](#commands)
-- [Supported Lotteries](#supported-lotteries)

<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g jackpot-cli
$ jackpot COMMAND
running command...
$ jackpot (--version)
jackpot-cli/1.0.0 darwin-x64 node-v20.9.0
$ jackpot --help [COMMAND]
USAGE
  $ jackpot COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`jackpot generate`](#jackpot-generate)
- [`jackpot help [COMMAND]`](#jackpot-help-command)
- [`jackpot plugins`](#jackpot-plugins)
- [`jackpot plugins:add PLUGIN`](#jackpot-pluginsadd-plugin)
- [`jackpot plugins:inspect PLUGIN...`](#jackpot-pluginsinspect-plugin)
- [`jackpot plugins:install PLUGIN`](#jackpot-pluginsinstall-plugin)
- [`jackpot plugins:link PATH`](#jackpot-pluginslink-path)
- [`jackpot plugins:remove [PLUGIN]`](#jackpot-pluginsremove-plugin)
- [`jackpot plugins:reset`](#jackpot-pluginsreset)
- [`jackpot plugins:uninstall [PLUGIN]`](#jackpot-pluginsuninstall-plugin)
- [`jackpot plugins:unlink [PLUGIN]`](#jackpot-pluginsunlink-plugin)
- [`jackpot plugins:update`](#jackpot-pluginsupdate)

## `jackpot generate`

Generate lottery numbers for major global lotteries

```
USAGE
  $ jackpot generate -l <value>

FLAGS
  -l, --lotto=<value>  (required) type of lottery

DESCRIPTION
  Generate lottery numbers for major global lotteries

EXAMPLES
  $ jackpot generate --lotto powerball

  $ jackpot generate --lotto megamillions

  $ jackpot generate --lotto euromillions

  $ jackpot generate --lotto uklotto

  $ jackpot generate --lotto elgordo

  $ jackpot generate --lotto superenalotto

  $ jackpot generate --lotto auspowerball

  $ jackpot generate --lotto ozlotto

  $ jackpot generate --lotto canada649

  $ jackpot generate --lotto canadamax

  $ jackpot generate --lotto franceloto

  $ jackpot generate --lotto germanlotto
```

_See code: [src/commands/generate.ts](https://github.com/bittricky/jackpot-cli/blob/v1.0.0/src/commands/generate.ts)_

## `jackpot help [COMMAND]`

Display help for jackpot.

```
USAGE
  $ jackpot help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for jackpot.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.22/src/commands/help.ts)_

## `jackpot plugins`

List installed plugins.

```
USAGE
  $ jackpot plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ jackpot plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.1.3/src/commands/plugins/index.ts)_

## `jackpot plugins:add PLUGIN`

Installs a plugin into jackpot.

```
USAGE
  $ jackpot plugins:add PLUGIN... [--json] [-f] [-h] [-s | -v]

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
  Installs a plugin into jackpot.

  Uses bundled npm executable to install plugins into /Users/bittricky/.local/share/jackpot

  Installation of a user-installed plugin will override a core plugin.

  Use the JACKPOT_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the JACKPOT_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ jackpot plugins:add

EXAMPLES
  Install a plugin from npm registry.

    $ jackpot plugins:add myplugin

  Install a plugin from a github url.

    $ jackpot plugins:add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ jackpot plugins:add someuser/someplugin
```

## `jackpot plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ jackpot plugins:inspect PLUGIN...

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
  $ jackpot plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.1.3/src/commands/plugins/inspect.ts)_

## `jackpot plugins:install PLUGIN`

Installs a plugin into jackpot.

```
USAGE
  $ jackpot plugins:install PLUGIN... [--json] [-f] [-h] [-s | -v]

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
  Installs a plugin into jackpot.

  Uses bundled npm executable to install plugins into /Users/bittricky/.local/share/jackpot

  Installation of a user-installed plugin will override a core plugin.

  Use the JACKPOT_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the JACKPOT_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ jackpot plugins:add

EXAMPLES
  Install a plugin from npm registry.

    $ jackpot plugins:install myplugin

  Install a plugin from a github url.

    $ jackpot plugins:install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ jackpot plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.1.3/src/commands/plugins/install.ts)_

## `jackpot plugins:link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ jackpot plugins:link PATH [-h] [--install] [-v]

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
  $ jackpot plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.1.3/src/commands/plugins/link.ts)_

## `jackpot plugins:remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ jackpot plugins:remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ jackpot plugins:unlink
  $ jackpot plugins:remove

EXAMPLES
  $ jackpot plugins:remove myplugin
```

## `jackpot plugins:reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ jackpot plugins:reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.1.3/src/commands/plugins/reset.ts)_

## `jackpot plugins:uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ jackpot plugins:uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ jackpot plugins:unlink
  $ jackpot plugins:remove

EXAMPLES
  $ jackpot plugins:uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.1.3/src/commands/plugins/uninstall.ts)_

## `jackpot plugins:unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ jackpot plugins:unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ jackpot plugins:unlink
  $ jackpot plugins:remove

EXAMPLES
  $ jackpot plugins:unlink myplugin
```

## `jackpot plugins:update`

Update installed plugins.

```
USAGE
  $ jackpot plugins:update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.1.3/src/commands/plugins/update.ts)_

<!-- commandsstop -->

- [`jackpot generate`](#jackpot-generate)
- [`jackpot help [COMMAND]`](#jackpot-help-command)

## `jackpot generate`

Generate jackpot numbers for major global lotteries

```
USAGE
  $ jackpot generate -l <value>

ARGUMENTS
  jackpot  Name of the major jackpot

FLAGS
  -l, --lotto=<value>  (required) name of major jackpot

DESCRIPTION
  Generate jackpot numbers for major global lotteries

EXAMPLES
  $ jackpot generate --lotto megamillions
```

_See code: [src/commands/generate.ts](https://github.com/bittricky/jackpot-cli/blob/v0.0.0/src/commands/generate.ts)_

## `jackpot help [COMMAND]`

Display help for jackpot.

```
USAGE
  $ jackpot help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for jackpot.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.22/src/commands/help.ts)_

## Supported Lotteries

The `jackpot-cli` command-line tool supports generating numbers for the following major global lotteries:

| Lottery                                   | Draw Days                        | Numbers                                                    | Command                 |
| ----------------------------------------- | -------------------------------- | ---------------------------------------------------------- | ----------------------- |
| **Powerball** (USA)                       | Wednesdays, Saturdays            | 5 numbers from 1 to 69 and 1 Powerball number from 1 to 26 | `--lotto powerball`     |
| **Mega Millions** (USA)                   | Tuesdays, Fridays                | 5 numbers from 1 to 70 and 1 Mega Ball number from 1 to 25 | `--lotto megamillions`  |
| **EuroMillions** (Europe)                 | Tuesdays, Fridays                | 5 numbers from 1 to 50 and 2 Lucky Stars from 1 to 12      | `--lotto euromillions`  |
| **UK National jackpot (Lotto)** (UK)      | Wednesdays, Saturdays            | 6 numbers from 1 to 59                                     | `--lotto uklotto`       |
| **El Gordo** (Spain)                      | Weekly, special draw in December | 5 numbers from 0 to 54                                     | `--lotto elgordo`       |
| **SuperEnalotto** (Italy)                 | Tuesdays, Thursdays, Saturdays   | 6 numbers from 1 to 90                                     | `--lotto superenalotto` |
| **Australian Powerball** (Australia)      | Thursdays                        | 7 numbers from 1 to 35 and 1 Powerball number from 1 to 20 | `--lotto auspowerball`  |
| **Oz Lotto** (Australia)                  | Tuesdays                         | 7 numbers from 1 to 45                                     | `--lotto ozlotto`       |
| **Canada Lotto 6/49** (Canada)            | Wednesdays, Saturdays            | 6 numbers from 1 to 49                                     | `--lotto canada649`     |
| **Canada Lotto Max** (Canada)             | Fridays                          | 7 numbers from 1 to 50                                     | `--lotto canadamax`     |
| **France Loto** (France)                  | Mondays, Wednesdays, Saturdays   | 5 numbers from 1 to 49 and 1 Lucky Number from 1 to 10     | `--lotto franceloto`    |
| **German Lotto (Lotto 6aus49)** (Germany) | Wednesdays, Saturdays            | 6 numbers from 1 to 49 and 1 Superzahl from 0 to 9         | `--lotto germanlotto`   |

More lotteries will be added in the future. If you'd like to see a specific jackpot added, please [create an issue](https://github.com/bittricky/jackpot-cli/issues/new) in the repository.
