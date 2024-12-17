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

const generateLotteryNumbers = (input: string) => {
  const lotteryType = input.toLowerCase() as LotteryType

  if (!VALID_LOTTERIES.includes(lotteryType)) {
    throw new Error(`Unsupported lottery type: "${input}"\n\nValid options are:\n${VALID_LOTTERIES.join('\n')}`)
  }

  switch (lotteryType) {
    case 'powerball': {
      const mainNumbers = generateUniqueNumbers(5, 1, 69)
      const powerballNumber = generateUniqueNumbers(1, 1, 26)
      return formatLotteryNumbers([...mainNumbers, ...powerballNumber], 1)
    }

    case 'megamillions': {
      const mainNumbers = generateUniqueNumbers(5, 1, 70)
      const megaBallNumber = generateUniqueNumbers(1, 1, 25)
      return formatLotteryNumbers([...mainNumbers, ...megaBallNumber], 1)
    }

    case 'euromillions': {
      const mainNumbers = generateUniqueNumbers(5, 1, 50)
      const luckyStars = generateUniqueNumbers(2, 1, 12)
      return formatLotteryNumbers([...mainNumbers, ...luckyStars], 2)
    }

    case 'uklotto': {
      const mainNumbers = generateUniqueNumbers(6, 1, 59)
      return formatLotteryNumbers(mainNumbers)
    }

    case 'elgordo': {
      const mainNumbers = generateUniqueNumbers(5, 0, 54)
      return formatLotteryNumbers(mainNumbers)
    }

    case 'superenalotto': {
      const mainNumbers = generateUniqueNumbers(6, 1, 90)
      return formatLotteryNumbers(mainNumbers)
    }

    case 'auspowerball': {
      const mainNumbers = generateUniqueNumbers(7, 1, 35)
      const powerballNumber = generateUniqueNumbers(1, 1, 20)
      return formatLotteryNumbers([...mainNumbers, ...powerballNumber], 1)
    }

    case 'ozlotto': {
      const mainNumbers = generateUniqueNumbers(7, 1, 45)
      return formatLotteryNumbers(mainNumbers)
    }

    case 'canada649': {
      const mainNumbers = generateUniqueNumbers(6, 1, 49)
      return formatLotteryNumbers(mainNumbers)
    }

    case 'canadamax': {
      const mainNumbers = generateUniqueNumbers(7, 1, 50)
      return formatLotteryNumbers(mainNumbers)
    }

    case 'franceloto': {
      const mainNumbers = generateUniqueNumbers(5, 1, 49)
      const luckyNumber = generateUniqueNumbers(1, 1, 10)
      return formatLotteryNumbers([...mainNumbers, ...luckyNumber], 1)
    }

    case 'germanlotto': {
      const mainNumbers = generateUniqueNumbers(6, 1, 49)
      const superzahl = generateUniqueNumbers(1, 0, 9)
      return formatLotteryNumbers([...mainNumbers, ...superzahl], 1)
    }

    default: {
      throw new Error('Unsupported lottery')
    }
  }
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
