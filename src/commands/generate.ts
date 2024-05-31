import {Command, Flags} from '@oclif/core'

const generateUniqueNumbers = (count: number, min: number, max: number) => {
  const numbers = new Set()
  while (numbers.size < count) {
    const num = Math.floor(Math.random() * (max - min + 1) + min)
    numbers.add(num)
  }

  return [...numbers]
}

const generateLotteryNumbers = (lotteryType: string) => {
  switch (lotteryType) {
    case 'powerball': {
      const mainNumbers = generateUniqueNumbers(5, 1, 69)
      const powerballNumber = generateUniqueNumbers(1, 1, 26)
      return [...mainNumbers, ...powerballNumber]
    }

    case 'megamillions': {
      const mainNumbers = generateUniqueNumbers(5, 1, 70)
      const megaBallNumber = generateUniqueNumbers(1, 1, 25)
      return [...mainNumbers, ...megaBallNumber]
    }

    case 'euromillions': {
      const mainNumbers = generateUniqueNumbers(5, 1, 50)
      const luckyStars = generateUniqueNumbers(2, 1, 12)
      return [...mainNumbers, ...luckyStars]
    }

    case 'uklotto': {
      const mainNumbers = generateUniqueNumbers(6, 1, 59)
      return mainNumbers
    }

    case 'elgordo': {
      const mainNumbers = generateUniqueNumbers(5, 0, 54)
      return mainNumbers
    }

    case 'superenalotto': {
      const mainNumbers = generateUniqueNumbers(6, 1, 90)
      return mainNumbers
    }

    case 'auspowerball': {
      const mainNumbers = generateUniqueNumbers(7, 1, 35)
      const powerballNumber = generateUniqueNumbers(1, 1, 20)
      return [...mainNumbers, ...powerballNumber]
    }

    case 'ozlotto': {
      const mainNumbers = generateUniqueNumbers(7, 1, 45)
      return mainNumbers
    }

    case 'canada649': {
      const mainNumbers = generateUniqueNumbers(6, 1, 49)
      return mainNumbers
    }

    case 'canadamax': {
      const mainNumbers = generateUniqueNumbers(7, 1, 50)
      return mainNumbers
    }

    case 'franceloto': {
      const mainNumbers = generateUniqueNumbers(5, 1, 49)
      const luckyNumber = generateUniqueNumbers(1, 1, 10)
      return [...mainNumbers, ...luckyNumber]
    }

    case 'germanlotto': {
      const mainNumbers = generateUniqueNumbers(6, 1, 49)
      const superzahl = generateUniqueNumbers(1, 0, 9)
      return [...mainNumbers, ...superzahl]
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
    const {flags} = await this.parse(Lottery)

    const lotteryType = flags.lotto
    try {
      const numbers = generateLotteryNumbers(lotteryType)
      const numString = numbers.join(' ')

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

${numString}
      `

      this.log(art)
    } catch (error: any) {
      this.error(error.message)
    }
  }
}
