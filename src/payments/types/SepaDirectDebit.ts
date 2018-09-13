import * as apiURL from '../../configs/ApiUrls'
import PaymentType from './PaymentType'
import AbstractPaymentType from './AbstractPaymentType'

export default class SepaDirectDebit extends AbstractPaymentType implements PaymentType {
  private _iban: string
  private _bic: string
  private _holder: string

  /**
   * Set iban number
   *
   * @param {string} iban
   * @returns {SepaDirectDebit}
   */
  public setIban(iban: string): SepaDirectDebit {
    this._iban = iban
    return this
  }

  /**
   * Get iban number
   *
   * @returns {string}
   */
  public getIban(): string {
    return this._iban
  }

  /**
   * Set bic number
   *
   * @param {string} bic
   * @returns {Card}
   */
  public setBic(bic: string): SepaDirectDebit {
    this._bic = bic
    return this
  }

  /**
   * Get bic number
   *
   * @returns {string}
   */
  public getBic(): string {
    return this._bic
  }

  /**
   * Set holder
   *
   * @param {string} holder
   * @returns {Card}
   */
  public setHolder(holder: string): SepaDirectDebit {
    this._holder = holder
    return this
  }

  /**
   * Get holder
   *
   * @returns {string}
   */
  public getHolder(): string {
    return this._holder
  }

  /**
   * Get url end point
   *
   * @returns {string}
   */
  public getTypeUrl(): string {
    return apiURL.URL_TYPE_SEPA_DIRECT_DEBIT
  }

  /**
   * Get Payload
   *
   * @returns
   */
  public getPayload() {
    return {}
  }
}