import { CurrencyInfo } from '@dtos/response'
import axios, { AxiosRequestConfig } from 'axios'

interface CurrencyApiResponse {
  [key: string]: CurrencyInfo
}

export function QuoteServices() {
  async function fetchCurrencyQuote(
    currencyCode: string,
  ): Promise<CurrencyInfo> {
    const options: AxiosRequestConfig = {
      method: 'GET',
      url: `https://economia.awesomeapi.com.br/json/last/${currencyCode}`,
      headers: {
        'Content-Type': 'application/json',
      },
    }
    try {
      const { data } = await axios<CurrencyApiResponse>(options)
      const response: CurrencyInfo = Object.values(data)[0]

      return response
    } catch {}
  }

  return {
    fetchCurrencyQuote,
  }
}
