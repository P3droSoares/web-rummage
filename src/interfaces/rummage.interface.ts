import { IQuoteController } from '@modules/quote'

export interface IRummage {
  quote: (baseCurrency: string) => IQuoteController
}
