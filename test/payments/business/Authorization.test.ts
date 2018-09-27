import Heidelpay from '../../../src/Heidelpay'
import Authorization from '../../../src/payments/business/Authorization'
import Card from '../../../src/payments/types/Card'
import { Customer } from '../../../src/payments/Customer'
import * as TestHelper from '../../helpers/TestHelper'
import Payment from '../../../src/payments/business/Payment';

describe('Authorize test', () => {
  let heidelpay: Heidelpay
  let createPaymentTypeCard, createCustomer
  const {getAuthorization} = TestHelper

  beforeAll(() => {
    jest.setTimeout(TestHelper.getTimeout())
    heidelpay = new Heidelpay('s-priv-6S59Dt6Q9mJYj8X5qpcxSpA3XLXUw4Zf')
    createPaymentTypeCard = TestHelper.createPaymentTypeCard(heidelpay)
    createCustomer = TestHelper.createCustomer(heidelpay)
  })

  it('Test authorize with authorize payload object', async () => {
    const card = await createPaymentTypeCard()
    const authorize: Authorization = await heidelpay.authorize(getAuthorization(card.getId()))

    expect(authorize).toBeInstanceOf(Authorization)
    expect(authorize.getId()).toBeDefined()
    expect(authorize.getProcessing().getShortId()).toBeDefined()
    expect(authorize.getProcessing().getUniqueId()).toBeDefined()
  })

  it('Test authorize with payment type Card', async () => {
    const card = await createPaymentTypeCard(true)

    const authorize: Authorization = await heidelpay.authorize(getAuthorization(card))
    const payment: Payment = await heidelpay.fetchPayment(authorize.getResources().getPaymentId()) as Payment

    expect(payment.getResources()).toBeDefined()
    expect(authorize).toBeInstanceOf(Authorization)
    expect(authorize.getId()).toBeDefined()
    expect(authorize.getResources()).toBeDefined()
  })

  it('Test authorize with customer', async () => {
    const customer = await createCustomer(true) as Customer
    const card = await createPaymentTypeCard() as Card

    const authorize: Authorization = await heidelpay.authorize(getAuthorization(card.getId(), customer))
    expect(authorize.getId()).toBeDefined()
  })
  it('Test authorize with customer Id', async () => {
    const customer = await createCustomer() as Customer
    const card = await createPaymentTypeCard() as Card

    const authorize: Authorization = await heidelpay.authorize(getAuthorization(card.getId(), customer.getCustomerId()))
    expect(authorize.getId()).toBeDefined()
  })
})
