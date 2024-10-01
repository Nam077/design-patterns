/**
 *
 */
class PaymentServiceBasic {
    /**
     *
     * @param {string} paymentType - Loại thanh toán
     * @param {number} amount - Số tiền cần thanh toán
     */
    processPayment(paymentType: string, amount: number): void {
        if (paymentType === 'paypal') {
            this.processPaypalPayment(amount);
        } else if (paymentType === 'creditcard') {
            this.processCreditCardPayment(amount);
        } else {
            console.log('Payment type not supported');
        }
    }

    /**
     *
     * @param {number} amount - Số tiền cần thanh toán
     */
    private processPaypalPayment(amount: number): void {
        // Xử lý thanh toán qua PayPal
        console.log(`Processing PayPal payment of $${amount}`);
    }

    /**
     *
     * @param {number} amount - Số tiền cần thanh toán
     */
    private processCreditCardPayment(amount: number): void {
        // Xử lý thanh toán qua Credit Card
        console.log(`Processing Credit Card payment of $${amount}`);
    }
}

// Sử dụng PaymentService
const paymentService = new PaymentServiceBasic();

paymentService.processPayment('paypal', 100);
paymentService.processPayment('creditcard', 200);
