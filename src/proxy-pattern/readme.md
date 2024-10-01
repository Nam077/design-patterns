
# Proxy Pattern

## Proxy Pattern là gì?

Proxy Pattern là một mẫu thiết kế cấu trúc (Structural Design Pattern), cung cấp một đối tượng đại diện (proxy) thay thế cho đối tượng thực sự. Proxy giúp kiểm soát quyền truy cập, bảo vệ hoặc thêm các tính năng khác mà không làm thay đổi đối tượng gốc.

## Demo

### Chưa áp dụng Proxy Pattern

Trong ví dụ này, `RealImage` ngay lập tức tải hình ảnh từ ổ đĩa khi được khởi tạo, dẫn đến lãng phí tài nguyên nếu không cần thiết hiển thị hình ảnh ngay:

```typescript
class RealImage {
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
    this.loadFromDisk();
  }

  public display(): void {
    console.log("Displaying " + this.filename);
  }

  private loadFromDisk(): void {
    console.log("Loading " + this.filename);
  }
}

const image1 = new RealImage("image1.jpg");
image1.display();

const image2 = new RealImage("image2.jpg");
image2.display();
```

### Đã áp dụng Proxy Pattern

Trong ví dụ này, `ProxyImage` chỉ tải hình ảnh từ ổ đĩa khi thực sự cần thiết. Điều này giúp tiết kiệm tài nguyên:

```typescript
class RealImage {
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
    this.loadFromDisk();
  }

  public display(): void {
    console.log("Displaying " + this.filename);
  }

  private loadFromDisk(): void {
    console.log("Loading " + this.filename);
  }
}

class ProxyImage {
  private realImage: RealImage;
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
  }

  public display(): void {
    if (!this.realImage) {
      this.realImage = new RealImage(this.filename); // Chỉ tải khi cần thiết
    }
    this.realImage.display();
  }
}

const image1 = new ProxyImage("image1.jpg");
image1.display();

const image2 = new ProxyImage("image2.jpg");
image2.display();
```

## Kết luận

Proxy Pattern giúp kiểm soát quyền truy cập và tối ưu hóa hệ thống bằng cách chỉ khởi tạo đối tượng thực sự khi cần thiết. Điều này giúp giảm thiểu lãng phí tài nguyên và tăng hiệu suất.

## Đây là một phần trong khóa học nhiều phần về các mẫu thiết kế (Design Patterns).

Hãy theo dõi các phần tiếp theo để học thêm về các mẫu thiết kế khác và cách áp dụng chúng trong thực tế.

## Khi nào nên sử dụng?

Sử dụng Proxy Pattern khi bạn muốn: 

- Kiểm soát quyền truy cập vào đối tượng thực sự.
- Tối ưu hóa hệ thống bằng cách chỉ khởi tạo đối tượng thực sự khi cần thiết.
- Thêm các tính năng bảo vệ hoặc kiểm tra trước khi truy cập đối tượng thực sự.

## Ứng dụng thực tế

Proxy Pattern được sử dụng rộng rãi trong các hệ thống lớn, đặc biệt là khi cần kiểm soát quyền truy cập vào các tài nguyên như file, mạng, bộ nhớ, ...