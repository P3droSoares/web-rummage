import { CurrencyInfo } from '@dtos/response'
import { QuoteServices } from './quote.services'

const MyServices = QuoteServices()

export interface IQuoteController {
  to: (targetCurrency: string) => Promise<CurrencyInfo>
}

export function QuoteController(baseCurrency: string): IQuoteController {
  async function to(targetCurrency: string): Promise<CurrencyInfo> {
    const currencyCode = baseCurrency.concat('-', targetCurrency)
    const response = await MyServices.fetchCurrencyQuote(currencyCode)

    return response
  }

  return { to }
}
