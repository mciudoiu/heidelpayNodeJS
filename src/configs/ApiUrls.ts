export const URL_PAYMENT = '/payments'
export const URL_PAYMENT_AUTHORIZE = `${URL_PAYMENT}/authorize`
export const URL_PAYMENT_AUTHORIZE_CANCEL = `${URL_PAYMENT}/{paymentId}/authorize/{authorizationId}/cancels`
export const URL_PAYMENT_CHARGE = `${URL_PAYMENT}/charges`
export const URL_PAYMENT_CHARGE_AUTHORIZE = `${URL_PAYMENT}/{paymentId}/charges`
export const URL_PAYMENT_CHARGE_CANCEL = `${URL_PAYMENT}/{paymentId}/charges/{chargeId}/cancels`
export const URL_PAYMENT_SHIPMENT = `${URL_PAYMENT}/{paymentId}/shipments`

export const URL_CUSTOMER = '/customers'
export const URL_METADATA = '/metadata'
export const URL_TYPE_CARD = '/types/card'
export const URL_TYPE_EPS = '/types/eps'
export const URL_TYPE_GIROPAY = '/types/giropay'
export const URL_TYPE_IDEAL = '/types/ideal'
export const URL_TYPE_INVOICE = '/types/invoice'
export const URL_TYPE_INVOICE_GUARANTEED = '/types/invoice-guaranteed'
export const URL_TYPE_PAYPAL = '/types/paypal'
export const URL_TYPE_PREPAYMENT = '/types/prepayment'
export const URL_TYPE_PRZELEWY24 = '/types/przelewy24'
export const URL_TYPE_SEPA_DIRECT_DEBIT = '/types/sepa-direct-debit'
export const URL_TYPE_SEPA_DIRECT_DEBIT_GUARANTEED = '/types/sepa-direct-debit-guaranteed'
export const URL_TYPE_SOFORT = '/types/sofort'
export const URL_TYPE_PIS = '/types/pis'
