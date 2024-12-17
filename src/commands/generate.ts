import {Command, Flags} from '@oclif/core'
import {randomInt} from 'crypto'

type LotteryType =
  | 'powerball'
  | 'megamillions'
  | 'euromillions'
  | 'uklotto'
  | 'elgordo'
  | 'superenalotto'
  | 'auspowerball'
  | 'ozlotto'
  | 'canada649'
  | 'canadamax'
  | 'franceloto'
  | 'germanlotto'

interface LotteryConfig {
  mainNumbers: {
    count: number
    min: number
    max: number
  }
  specialBalls?: {
    count: number
    min: number
    max: number
  }
}

const VALID_LOTTERIES: LotteryType[] = [
  'powerball',
  'megamillions',
  'euromillions',
  'uklotto',
  'elgordo',
  'superenalotto',
  'auspowerball',
  'ozlotto',
  'canada649',
  'canadamax',
  'franceloto',
  'germanlotto',
]

const LOTTERY_CONFIGS: Record<LotteryType, LotteryConfig> = {
  powerball: {
    mainNumbers: {count: 5, min: 1, max: 69},
    specialBalls: {count: 1, min: 1, max: 26},
  },
  megamillions: {
    mainNumbers: {count: 5, min: 1, max: 70},
    specialBalls: {count: 1, min: 1, max: 25},
  },
  euromillions: {
    mainNumbers: {count: 5, min: 1, max: 50},
    specialBalls: {count: 2, min: 1, max: 12},
  },
  uklotto: {
    mainNumbers: {count: 6, min: 1, max: 59},
  },
  elgordo: {
    mainNumbers: {count: 5, min: 0, max: 54},
  },
  superenalotto: {
    mainNumbers: {count: 6, min: 1, max: 90},
  },
  auspowerball: {
    mainNumbers: {count: 7, min: 1, max: 35},
    specialBalls: {count: 1, min: 1, max: 20},
  },
  ozlotto: {
    mainNumbers: {count: 7, min: 1, max: 45},
  },
  canada649: {
    mainNumbers: {count: 6, min: 1, max: 49},
  },
  canadamax: {
    mainNumbers: {count: 7, min: 1, max: 50},
  },
  franceloto: {
    mainNumbers: {count: 5, min: 1, max: 49},
    specialBalls: {count: 1, min: 1, max: 10},
  },
  germanlotto: {
    mainNumbers: {count: 6, min: 1, max: 49},
    specialBalls: {count: 1, min: 0, max: 9},
  },
}

const generateUniqueNumbers = (count: number, min: number, max: number): number[] => {
  if (!Number.isInteger(count) || count <= 0) {
    throw new Error(`Count must be a positive integer, received: ${count}`)
  }
  if (!Number.isInteger(min)) {
    throw new Error(`Minimum value must be an integer, received: ${min}`)
  }
  if (!Number.isInteger(max)) {
    throw new Error(`Maximum value must be an integer, received: ${max}`)
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
  const mainNumbers = generateUniqueNumbers(
    config.mainNumbers.count,
    config.mainNumbers.min,
    config.mainNumbers.max
  )

  if (config.specialBalls) {
    const specialBalls = generateUniqueNumbers(
      config.specialBalls.count,
      config.specialBalls.min,
      config.specialBalls.max
    )
    return formatLotteryNumbers([...mainNumbers, ...specialBalls], config.specialBalls.count)
  }

  return formatLotteryNumbers(mainNumbers)
}

export default class Lottery extends Command {
  static override description = 'Generate lottery numbers for major global lotteries'

  static override examples = [
    '<%= config.bin %> <%= command.id %> --lotto powerball',
    '<%= config.bin %> <%= command.id %> --lotto megamillions',
    '<%= config.bin %> <%= command.id %> --lotto euromillions',
    '<%= config.bin %> <%= command.id %> --lotto uklotto',
    '<%= config.bin %> <%= command.id %> --lotto elgordo',
    '<%= config.bin %> <%= command.id %> --lotto superenalotto',
    '<%= config.bin %> <%= command.id %> --lotto auspowerball',
    '<%= config.bin %> <%= command.id %> --lotto ozlotto',
    '<%= config.bin %> <%= command.id %> --lotto canada649',
    '<%= config.bin %> <%= command.id %> --lotto canadamax',
    '<%= config.bin %> <%= command.id %> --lotto franceloto',
    '<%= config.bin %> <%= command.id %> --lotto germanlotto',
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
