import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('Generate Command', () => {
  it('should generate Powerball numbers', async () => {
    const result = await runCommand(['generate', '--lotto', 'powerball'])
    expect(result.stdout).to.match(/Here are your powerball numbers: (\d+, ){5}\d+/)
  })

  it('should generate Mega Millions numbers', async () => {
    const result = await runCommand(['generate', '--lotto', 'megamillions'])
    expect(result.stdout).to.match(/Here are your megamillions numbers: (\d+, ){5}\d+/)
  })

  it('should generate EuroMillions numbers', async () => {
    const result = await runCommand(['generate', '--lotto', 'euromillions'])
    expect(result.stdout).to.match(/Here are your euromillions numbers: (\d+, ){4}\d+, \d+, \d+/)
  })

  it('should generate UK Lotto numbers', async () => {
    const result = await runCommand(['generate', '--lotto', 'uklotto'])
    expect(result.stdout).to.match(/Here are your uklotto numbers: (\d+, ){5}\d+/)
  })

  it('should generate El Gordo numbers', async () => {
    const result = await runCommand(['generate', '--lotto', 'elgordo'])
    expect(result.stdout).to.match(/Here are your elgordo numbers: (\d+, ){4}\d+/)
  })

  it('should generate SuperEnalotto numbers', async () => {
    const result = await runCommand(['generate', '--lotto', 'superenalotto'])
    expect(result.stdout).to.match(/Here are your superenalotto numbers: (\d+, ){5}\d+/)
  })

  it('should generate Australian Powerball numbers', async () => {
    const result = await runCommand(['generate', '--lotto', 'auspowerball'])
    expect(result.stdout).to.match(/Here are your auspowerball numbers: (\d+, ){7}\d+/)
  })

  it('should generate Oz Lotto numbers', async () => {
    const result = await runCommand(['generate', '--lotto', 'ozlotto'])
    expect(result.stdout).to.match(/Here are your ozlotto numbers: (\d+, ){6}\d+/)
  })

  it('should generate Canada Lotto 6/49 numbers', async () => {
    const result = await runCommand(['generate', '--lotto', 'canada649'])
    expect(result.stdout).to.match(/Here are your canada649 numbers: (\d+, ){5}\d+/)
  })

  it('should generate Canada Lotto Max numbers', async () => {
    const result = await runCommand(['generate', '--lotto', 'canadamax'])
    expect(result.stdout).to.match(/Here are your canadamax numbers: (\d+, ){6}\d+/)
  })

  it('should generate France Loto numbers', async () => {
    const result = await runCommand(['generate', '--lotto', 'franceloto'])
    expect(result.stdout).to.match(/Here are your franceloto numbers: (\d+, ){4}\d+, \d+/)
  })

  it('should generate German Lotto numbers', async () => {
    const result = await runCommand(['generate', '--lotto', 'germanlotto'])
    expect(result.stdout).to.match(/Here are your germanlotto numbers: (\d+, ){5}\d+, \d+/)
  })

  it('should throw an error for unsupported lottery type', async () => {
    try {
      await runCommand(['generate', '--lotto', 'unsupported'])
    } catch (error) {
      expect(error.message).to.include('Unsupported lottery')
    }
  })
})
