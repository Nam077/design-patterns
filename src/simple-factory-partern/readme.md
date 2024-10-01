
# Simple Factory Pattern

## Simple Factory Pattern là gì?

Simple Factory Pattern là một mẫu thiết kế cung cấp một lớp chuyên biệt để tạo ra các đối tượng mà không cần client phải biết chi tiết về việc khởi tạo chúng. Điều này giúp đơn giản hóa quá trình khởi tạo và giảm sự phụ thuộc của client vào các đối tượng cụ thể.

## Demo

### Chưa áp dụng Simple Factory Pattern

Trong ví dụ này, client phải trực tiếp khởi tạo các đối tượng `Car` và `Bike`, dẫn đến sự phụ thuộc chặt chẽ giữa client và các đối tượng cụ thể:

```typescript
class Car {
  drive(): void {
    console.log("Driving a car");
  }
}

class Bike {
  drive(): void {
    console.log("Riding a bike");
  }

const car = new Car();
car.drive();

const bike = new Bike();
bike.drive();
```

### Đã áp dụng Simple Factory Pattern

Trong ví dụ này, `VehicleFactory` được sử dụng để tạo ra các đối tượng. Điều này giúp client chỉ cần gọi phương thức của factory mà không cần biết chi tiết về việc khởi tạo:

```typescript
class Car {
  drive(): void {
    console.log("Driving a car");
  }
}

class Bike {
  drive(): void {
    console.log("Riding a bike");
  }
}

class VehicleFactory {
  static createVehicle(type: string) {
    if (type === 'car') {
      return new Car();
    } else if (type === 'bike') {
      return new Bike();
    }
    throw new Error("Unknown vehicle type");
  }
}

const vehicle1 = VehicleFactory.createVehicle('car');
vehicle1.drive();

const vehicle2 = VehicleFactory.createVehicle('bike');
vehicle2.drive();
```

## Kết luận

Simple Factory Pattern giúp giảm sự phụ thuộc giữa client và các đối tượng cụ thể. Nó tạo ra một giao diện đơn giản để client có thể khởi tạo đối tượng mà không cần biết chi tiết về cách chúng được tạo ra.

## Đây là một phần trong khóa học nhiều phần về các mẫu thiết kế (Design Patterns).

Hãy theo dõi các phần tiếp theo để học thêm về các mẫu thiết kế khác và cách áp dụng chúng trong thực tế.

## Ứng dụng thực tế

### Ứng dụng thực tế của Simple Factory Pattern

1. **Hệ thống quản lý đơn hàng**: Trong một hệ thống quản lý đơn hàng, Simple Factory Pattern có thể được sử dụng để tạo ra các đối tượng đơn hàng khác nhau như `OnlineOrder`, `PhoneOrder`, và `StoreOrder` dựa trên loại đơn hàng mà người dùng chọn.

2. **Trò chơi điện tử**: Trong phát triển trò chơi điện tử, Simple Factory Pattern có thể được sử dụng để tạo ra các đối tượng nhân vật khác nhau như `Warrior`, `Mage`, và `Archer` dựa trên lựa chọn của người chơi.

3. **Ứng dụng ngân hàng**: Trong các ứng dụng ngân hàng, Simple Factory Pattern có thể được sử dụng để tạo ra các đối tượng tài khoản khác nhau như `SavingsAccount`, `CheckingAccount`, và `LoanAccount` dựa trên loại tài khoản mà khách hàng yêu cầu.

4. **Hệ thống thông báo**: Trong một hệ thống thông báo, Simple Factory Pattern có thể được sử dụng để tạo ra các đối tượng thông báo khác nhau như `EmailNotification`, `SMSNotification`, và `PushNotification` dựa trên phương thức thông báo mà người dùng chọn.

5. **Ứng dụng thương mại điện tử**: Trong các ứng dụng thương mại điện tử, Simple Factory Pattern có thể được sử dụng để tạo ra các đối tượng sản phẩm khác nhau như `Electronics`, `Clothing`, và `Books` dựa trên loại sản phẩm mà người dùng muốn mua.

Những ví dụ trên cho thấy Simple Factory Pattern có thể được áp dụng trong nhiều lĩnh vực khác nhau để đơn giản hóa quá trình khởi tạo đối tượng và giảm sự phụ thuộc giữa client và các đối tượng cụ thể.