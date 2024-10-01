interface PaymentStrategy {
    pay: (amount: number) => void;
}

/**
 *
 */
class PaypalStrategy implements PaymentStrategy {
    /**
     *
     * @override
     * @param {number} amount - Số tiền cần thanh toán
     * @returns {void} - Kết quả trả về
     */
    pay(amount: number): void {
        console.log(`Processing PayPal payment of $${amount}`);
    }
}

/**
 *
 */
class CreditCardStrategy implements PaymentStrategy {
    /**
     *
     * @override
     * @param {number} amount - Số tiền cần thanh toán
     * @returns {void} - Kết quả trả về
     */
    pay(amount: number): void {
        console.log(`Processing Credit Card payment of $${amount}`);
    }
}

/**
 *
 */
class PaymentService {
    private paymentStrategy: PaymentStrategy;

    /**
     *
     * @param {PaymentStrategy} strategy - Chiến lược thanh toán
     */
    setPaymentStrategy(strategy: PaymentStrategy): void {
        this.paymentStrategy = strategy;
    }

    /**
     *
     * @param {number} amount - Số tiền cần thanh toán
     */
    processPayment(amount: number): void {
        this.paymentStrategy.pay(amount);
    }
}

// Sử dụng PaymentService
/**
 *
 */
async function main() {
    const paypalStrategy = new PaypalStrategy();
    const creditCardStrategy = new CreditCardStrategy();

    const paymentService = new PaymentService();

    paymentService.setPaymentStrategy(paypalStrategy);
    paymentService.processPayment(100);

    paymentService.setPaymentStrategy(creditCardStrategy);
    paymentService.processPayment(200);
}

(async () => {
    await main();
})();
