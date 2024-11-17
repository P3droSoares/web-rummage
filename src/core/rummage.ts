import { IRummage } from '@interfaces/index'
import { IQuoteController, QuoteController } from '@modules/index'

export function rummage(): IRummage {
  function quote(baseCurrency: string): IQuoteController {
    return QuoteController(baseCurrency)
  }

  return {
    quote,
  }
}
