import {Command, Flags} from '@oclif/core'
import {randomInt} from 'node:crypto'

type LotteryType =
  | 'auspowerball'
  | 'canada649'
  | 'canadamax'
  | 'elgordo'
  | 'euromillions'
  | 'franceloto'
  | 'germanlotto'
  | 'megamillions'
  | 'ozlotto'
  | 'powerball'
  | 'superenalotto'
  | 'uklotto'

interface LotteryConfig {
  mainNumbers: {
    count: number
    max: number
    min: number
  }
  specialBalls?: {
    count: number
    max: number
    min: number
  }
}

const VALID_LOTTERIES: LotteryType[] = [
  'auspowerball',
  'canada649',
  'canadamax',
  'elgordo',
  'euromillions',
  'franceloto',
  'germanlotto',
  'megamillions',
  'ozlotto',
  'powerball',
  'superenalotto',
  'uklotto',
]

const LOTTERY_CONFIGS: Record<LotteryType, LotteryConfig> = {
  auspowerball: {
    mainNumbers: {count: 7, max: 35, min: 1},
    specialBalls: {count: 1, max: 20, min: 1},
  },
  canada649: {
    mainNumbers: {count: 6, max: 49, min: 1},
  },
  canadamax: {
    mainNumbers: {count: 7, max: 50, min: 1},
  },
  elgordo: {
    mainNumbers: {count: 5, max: 54, min: 1},
    specialBalls: {count: 1, max: 9, min: 0},
  },
  euromillions: {
    mainNumbers: {count: 5, max: 50, min: 1},
    specialBalls: {count: 2, max: 12, min: 1},
  },
  franceloto: {
    mainNumbers: {count: 5, max: 49, min: 1},
    specialBalls: {count: 1, max: 10, min: 1},
  },
  germanlotto: {
    mainNumbers: {count: 6, max: 49, min: 1},
    specialBalls: {count: 1, max: 9, min: 0},
  },
  megamillions: {
    mainNumbers: {count: 5, max: 70, min: 1},
    specialBalls: {count: 1, max: 25, min: 1},
  },
  ozlotto: {
    mainNumbers: {count: 7, max: 45, min: 1},
  },
  powerball: {
    mainNumbers: {count: 5, max: 69, min: 1},
    specialBalls: {count: 1, max: 26, min: 1},
  },
  superenalotto: {
    mainNumbers: {count: 6, max: 90, min: 1},
  },
  uklotto: {
    mainNumbers: {count: 6, max: 59, min: 1},
  },
}

const generateUniqueNumbers = (count: number, min: number, max: number): number[] => {
  if (!Number.isInteger(count) || count <= 0) {
    throw new TypeError(`Count must be a positive integer, received: ${count}`)
  }

  if (!Number.isInteger(min)) {
    throw new TypeError(`Minimum value must be an integer, received: ${min}`)
  }

  if (!Number.isInteger(max)) {
    throw new TypeError(`Maximum value must be an integer, received: ${max}`)
  }

  if (min >= max) {
    throw new Error(`Minimum value (${min}) must be less than maximum value (${max})`)
  }

  if (count > max - min + 1) {
    throw new Error(
      `Cannot generate ${count} unique numbers in range ${min}-${max}. ` +
        `Only ${max - min + 1} numbers are available in this range.`,
    )
  }

  const numbers: Set<number> = new Set()

  while (numbers.size < count) {
    const num = randomInt(min, max + 1)
    numbers.add(num)
  }

  return [...numbers].sort((a, b) => a - b)
}

const formatLotteryNumbers = (numbers: number[], specialBallCount = 0): string => {
  if (specialBallCount === 0) {
    return numbers.sort((a, b) => a - b).join(' ')
  }

  const mainNumbers = numbers.slice(0, -specialBallCount).sort((a, b) => a - b)
  const specialBalls = numbers.slice(-specialBallCount).sort((a, b) => a - b)

  return `${mainNumbers.join(' ')} [${specialBalls.join(' ')}]`
}

const generateLotteryNumbers = (input: string): string => {
  const lotteryType = input.toLowerCase() as LotteryType

  if (!VALID_LOTTERIES.includes(lotteryType)) {
    throw new Error(`Unsupported lottery type: "${input}"\n\nValid options are:\n${VALID_LOTTERIES.join('\n')}`)
  }

  const config = LOTTERY_CONFIGS[lotteryType]
  const mainNumbers = generateUniqueNumbers(config.mainNumbers.count, config.mainNumbers.min, config.mainNumbers.max)

  if (config.specialBalls) {
    const specialBalls = generateUniqueNumbers(
      config.specialBalls.count,
      config.specialBalls.min,
      config.specialBalls.max,
    )
    return formatLotteryNumbers([...mainNumbers, ...specialBalls], config.specialBalls.count)
  }

  return formatLotteryNumbers(mainNumbers)
}

export default class Lottery extends Command {
  static override description = 'Generate lottery numbers for major global lotteries'

  static override examples = [
    '<%= config.bin %> <%= command.id %> --lotto auspowerball',
    '<%= config.bin %> <%= command.id %> --lotto canada649',
    '<%= config.bin %> <%= command.id %> --lotto canadamax',
    '<%= config.bin %> <%= command.id %> --lotto elgordo',
    '<%= config.bin %> <%= command.id %> --lotto euromillions',
    '<%= config.bin %> <%= command.id %> --lotto franceloto',
    '<%= config.bin %> <%= command.id %> --lotto germanlotto',
    '<%= config.bin %> <%= command.id %> --lotto megamillions',
    '<%= config.bin %> <%= command.id %> --lotto ozlotto',
    '<%= config.bin %> <%= command.id %> --lotto powerball',
    '<%= config.bin %> <%= command.id %> --lotto superenalotto',
    '<%= config.bin %> <%= command.id %> --lotto uklotto',
  ]

  static override flags = {
    lotto: Flags.string({char: 'l', description: 'type of lottery', required: true}),
  }

  public async run(): Promise<void> {
    try {
      const {flags} = await this.parse(Lottery)
      const lotteryType = flags.lotto

      try {
        const numbers = generateLotteryNumbers(lotteryType)

        const art = `
   ______
  /\\ o o o\\
 /o \\ o o o\\_______
<    >------>   o /|
 \\ o/  o   /_____/o|
  \\/______/     |oo|
        |   o   |o/
        |_______|/
        
Here are your ${lotteryType} numbers:

${numbers}
    `

        this.log(art)
      } catch (error) {
        if (error instanceof Error) {
          this.error(`Error generating lottery numbers: ${error.message}`)
        } else {
          this.error('An unexpected error occurred while generating lottery numbers')
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        this.error(`Command error: ${error.message}`)
      } else {
        this.error('An unexpected error occurred while running the command')
      }
    }
  }
}
