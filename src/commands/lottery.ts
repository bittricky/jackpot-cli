import {Args, Command, Flags} from '@oclif/core'

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
      const powerballNumbers = generateUniqueNumbers(1, 1, 26)
      return [...mainNumbers, ...powerballNumbers]
    }

    case 'megamillions': {
      const mainNumbers = generateUniqueNumbers(5, 1, 70)
      const megaBallNumbers = generateUniqueNumbers(1, 1, 26)
      return [...mainNumbers, megaBallNumbers]
    }

    /* TODO: add all global lotteries here */
    default: {
      throw new Error('Unsupported lottery type')
    }
  }
}

export default class Lottery extends Command {
  static override args = {
    file: Args.string({description: 'file to read'}),
  }

  static override description = 'Generate lottery numbers for major global lotteries'

  static override examples = [
    '<%= config.bin %> <%= command.id %> --type powerball',
    '<%= config.bin %> <%= command.id %> --type megamillions',
  ]

  static override flags = {
    type: Flags.string({char: 't', description: 'type of lottery', required: true}),
  }

  public async run(): Promise<void> {
    const {flags} = await this.parse(Lottery)

    const lotteryType = flags.type
    try {
      const numbers = generateLotteryNumbers(lotteryType)
      const numString = numbers.join(', ')

      const art = `
   ______
  /\\ o o o\\
 /o \\ o o o\\_______
<    >------>   o /|
 \\ o/  o   /_____/o|
  \\/______/     |oo|
        |   o   |o/
        |_______|/
        
Here are your ${lotteryType} numbers: ${numString}
      `

      this.log(art)
    } catch (error: any) {
      this.error(error.message)
    }
  }
}
