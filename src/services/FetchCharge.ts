import PaymentService from './PaymentService'
import Charge from '../payments/business/Charge';

export default (args: string, paymentService: PaymentService): Promise<Charge> => {
  return new Promise(async (resolve, reject) => {
    try {
      // Call api end point to get response
      const response: any = await paymentService
        .getRequestAdapter()
        .get(args, paymentService.getHeidelpay().getPrivateKey(), true)

      // New Charge with Hedeipay instance
      let charge = new Charge(paymentService.getHeidelpay())

      // Set charge Id
      charge.setId(response.id)

      // Set amount of charge
      charge.setAmount(response.amount)

      // Set currency
      charge.setCurrency(response.currency)

      // Set return URL
      charge.setReturnUrl(response.returnUrl)

      // Set resources
      charge.setResources(response.resources)

      // Set Processing
      charge.setProcessing(response.processing)

      // Set Payload
      charge.setPayload(response)

      // Resolve final result
      resolve(charge)
    } catch (error) {
      // Reject with error object
      reject(error)
    }
  })
}
