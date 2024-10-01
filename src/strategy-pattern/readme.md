
# Giới thiệu về Strategy Pattern

## Strategy Pattern là gì?

Strategy Pattern là một mẫu thiết kế hành vi (Behavioral Design Pattern) cho phép ta định nghĩa nhiều thuật toán khác nhau trong các class riêng biệt. Những thuật toán này có thể được thay thế cho nhau tại runtime mà không ảnh hưởng đến những phần khác của hệ thống.

## Demo

Dưới đây là đoạn mã đã áp dụng Strategy Pattern. Mỗi phương thức thanh toán được triển khai thành một class riêng, và `PaymentService` chỉ cần thiết lập chiến lược (strategy) phù hợp để thực hiện thanh toán:

```typescript
// PaymentStrategy.ts

// Định nghĩa giao diện chiến lược thanh toán
interface PaymentStrategy {
  pay(amount: number): void;
}

// Triển khai chiến lược thanh toán qua PayPal
class PaypalPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Processing PayPal payment of $${amount}`);
  }
}

// Triển khai chiến lược thanh toán qua Credit Card
class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Processing Credit Card payment of $${amount}`);
  }
}

// Lớp PaymentService áp dụng Strategy Pattern
class PaymentService {
  private strategy: PaymentStrategy;

  // Cài đặt chiến lược thanh toán cụ thể
  setPaymentStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  // Xử lý thanh toán theo chiến lược đã đặt
  processPayment(amount: number): void {
    this.strategy.pay(amount);
  }
}

// Sử dụng PaymentService với chiến lược cụ thể
const paymentService = new PaymentService();

// Sử dụng chiến lược PayPal
paymentService.setPaymentStrategy(new PaypalPayment());
paymentService.processPayment(100);

// Sử dụng chiến lược Credit Card
paymentService.setPaymentStrategy(new CreditCardPayment());
paymentService.processPayment(200);
```

## Kết luận

Bằng cách áp dụng Strategy Pattern, chúng ta có thể dễ dàng mở rộng hệ thống khi có các phương thức xử lý thanh toán mới mà không cần thay đổi cấu trúc code hiện có. Điều này giúp mã nguồn trở nên dễ bảo trì và tuân theo nguyên tắc Mở-Rộng, Đóng-Sửa đổi (Open-Closed Principle).

## Đây là một phần trong khoá học nhiều phần về các mẫu thiết kế (Design Patterns).

Hãy theo dõi các phần tiếp theo để học thêm về các mẫu thiết kế khác và cách áp dụng chúng trong thực tế.

## Ứng dụng thực tế

Strategy Pattern thường được sử dụng trong các hệ thống xử lý thanh toán, xử lý tìm kiếm, xử lý định dạng dữ liệu, xử lý giao diện người dùng, v.v.