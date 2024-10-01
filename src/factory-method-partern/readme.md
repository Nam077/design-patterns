
# Factory Method Pattern

## Factory Method Pattern là gì?

Factory Method Pattern là một mẫu thiết kế sáng tạo (Creational Design Pattern) cung cấp một giao diện cho việc tạo các đối tượng trong một class, nhưng cho phép các lớp con quyết định loại đối tượng cụ thể nào sẽ được tạo ra. Điều này giúp linh hoạt hơn trong việc khởi tạo các đối tượng khác nhau mà không cần sửa đổi mã gốc.

## Demo

### Chưa áp dụng Factory Method Pattern

Trong ví dụ này, client phải trực tiếp tạo các đối tượng `Car` và `Bike`, dẫn đến sự phụ thuộc chặt chẽ vào các đối tượng cụ thể:

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

### Đã áp dụng Factory Method Pattern

Trong ví dụ này, `VehicleFactory` cung cấp một phương thức trừu tượng để các lớp con quyết định tạo loại phương tiện nào. Điều này giúp tách rời việc tạo đối tượng khỏi client:

```typescript
interface Vehicle {
  drive(): void;
}

class Car implements Vehicle {
  drive(): void {
    console.log("Driving a car");
  }
}

class Bike implements Vehicle {
  drive(): void {
    console.log("Riding a bike");
  }
}

abstract class VehicleFactory {
  abstract createVehicle(): Vehicle;

  startVehicle(): void {
    const vehicle = this.createVehicle();
    vehicle.drive();
  }
}

class CarFactory extends VehicleFactory {
  createVehicle(): Vehicle {
    return new Car();
  }
}

class BikeFactory extends VehicleFactory {
  createVehicle(): Vehicle {
    return new Bike();
  }
}

const carFactory = new CarFactory();
carFactory.startVehicle();

const bikeFactory = new BikeFactory();
bikeFactory.startVehicle();
```

## Kết luận

Factory Method Pattern giúp linh hoạt hơn trong việc tạo đối tượng, cho phép mở rộng các lớp con mà không cần thay đổi mã gốc. Điều này giúp tăng khả năng bảo trì và mở rộng hệ thống.

## Đây là một phần trong khóa học nhiều phần về các mẫu thiết kế (Design Patterns).

Hãy theo dõi các phần tiếp theo để học thêm về các mẫu thiết kế khác và cách áp dụng chúng trong thực tế.

## Khi nào nên sử dụng?

- Khi bạn muốn tạo một đối tượng mà không cần biết chi tiết về cách nó được tạo ra.
- Khi bạn muốn tách rời việc khởi tạo đối tượng khỏi client.

## Ví dụ thực tế

### Ví dụ thực tế

Một ví dụ thực tế về Factory Method Pattern là trong việc tạo các đối tượng kết nối cơ sở dữ liệu. Giả sử bạn có nhiều loại cơ sở dữ liệu khác nhau như MySQL, PostgreSQL, và MongoDB. Bạn có thể sử dụng Factory Method Pattern để tạo các kết nối này mà không cần thay đổi mã gốc.

```typescript
interface DatabaseConnection {
    connect(): void;
}

class MySQLConnection implements DatabaseConnection {
    connect(): void {
        console.log("Connecting to MySQL database");
    }
}

class PostgreSQLConnection implements DatabaseConnection {
    connect(): void {
        console.log("Connecting to PostgreSQL database");
    }
}

class MongoDBConnection implements DatabaseConnection {
    connect(): void {
        console.log("Connecting to MongoDB database");
    }
}

abstract class DatabaseConnectionFactory {
    abstract createConnection(): DatabaseConnection;

    startConnection(): void {
        const connection = this.createConnection();
        connection.connect();
    }
}

class MySQLConnectionFactory extends DatabaseConnectionFactory {
    createConnection(): DatabaseConnection {
        return new MySQLConnection();
    }
}

class PostgreSQLConnectionFactory extends DatabaseConnectionFactory {
    createConnection(): DatabaseConnection {
        return new PostgreSQLConnection();
    }
}

class MongoDBConnectionFactory extends DatabaseConnectionFactory {
    createConnection(): DatabaseConnection {
        return new MongoDBConnection();
    }
}

const mySQLFactory = new MySQLConnectionFactory();
mySQLFactory.startConnection();

const postgreSQLFactory = new PostgreSQLConnectionFactory();
postgreSQLFactory.startConnection();

const mongoDBFactory = new MongoDBConnectionFactory();
mongoDBFactory.startConnection();
```

Trong ví dụ này, `DatabaseConnectionFactory` là một lớp trừu tượng cung cấp phương thức `createConnection` để các lớp con quyết định loại kết nối cơ sở dữ liệu nào sẽ được tạo ra. Điều này giúp tách rời việc tạo đối tượng khỏi client và dễ dàng mở rộng để hỗ trợ các loại cơ sở dữ liệu mới trong tương lai.