interface AmountType {
  value: string;
  currency: string;
}

interface RecipientType {
  account_id: string;
  gateway_id: string;
}

interface PaymentMethodType {
  type: string;
  id: string;
  saved: boolean;
}

interface ConfirmationType {
  type: string;
  return_url: string;
  confirmation_url: string;
}

export interface PaymentResponseModel {
  id: string;
  status: string;
  amount: AmountType;
  recipient: RecipientType;
  payment_methond: PaymentMethodType;
  created_at: Date;
  confirmation: ConfirmationType;
}
