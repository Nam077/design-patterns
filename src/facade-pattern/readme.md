
# Facade Pattern

## Facade Pattern là gì?

Facade Pattern là một mẫu thiết kế cấu trúc (Structural Design Pattern), cung cấp một giao diện đơn giản để tương tác với các hệ thống hoặc thư viện phức tạp. Nó ẩn đi các chi tiết phức tạp và cung cấp một giao diện dễ sử dụng hơn cho client.

## Demo

### Chưa áp dụng Facade Pattern

Trong ví dụ này, client phải tương tác trực tiếp với các hệ thống phức tạp như CPU, Memory, và HardDrive:

```typescript
class CPU {
  public freeze(): void {
    console.log("CPU freezing...");
  }

  public jump(position: number): void {
    console.log(`CPU jumping to position ${position}`);
  }

  public execute(): void {
    console.log("CPU executing...");
  }
}

class Memory {
  public load(position: number, data: string): void {
    console.log(`Loading ${data} to position ${position}`);
  }
}

class HardDrive {
  public read(sector: number, size: number): string {
    console.log(`Reading ${size} bytes from sector ${sector}`);
    return "data";
  }
}

class Computer {
  private cpu: CPU;
  private memory: Memory;
  private hardDrive: HardDrive;

  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }

  public startComputer(): void {
    this.cpu.freeze();
    const data = this.hardDrive.read(100, 1024);
    this.memory.load(100, data);
    this.cpu.jump(100);
    this.cpu.execute();
  }
}

const computer = new Computer();
computer.startComputer();
```

### Đã áp dụng Facade Pattern

Trong ví dụ này, `ComputerFacade` cung cấp một giao diện đơn giản để client khởi động máy tính mà không cần biết về các chi tiết bên trong:

```typescript
class CPU {
  public freeze(): void {
    console.log("CPU freezing...");
  }

  public jump(position: number): void {
    console.log(`CPU jumping to position ${position}`);
  }

  public execute(): void {
    console.log("CPU executing...");
  }
}

class Memory {
  public load(position: number, data: string): void {
    console.log(`Loading ${data} to position ${position}`);
  }
}

class HardDrive {
  public read(sector: number, size: number): string {
    console.log(`Reading ${size} bytes from sector ${sector}`);
    return "data";
  }
}

class ComputerFacade {
  private cpu: CPU;
  private memory: Memory;
  private hardDrive: HardDrive;

  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }

  public start(): void {
    this.cpu.freeze();
    const data = this.hardDrive.read(100, 1024);
    this.memory.load(100, data);
    this.cpu.jump(100);
    this.cpu.execute();
  }
}

const computer = new ComputerFacade();
computer.start();
```

## Kết luận

Facade Pattern giúp ẩn đi các chi tiết phức tạp của hệ thống, cung cấp một giao diện đơn giản để client tương tác. Điều này giúp giảm sự phức tạp trong việc sử dụng hệ thống và giúp mã dễ bảo trì hơn.

## Đây là một phần trong khóa học nhiều phần về các mẫu thiết kế (Design Patterns).

Hãy theo dõi các phần tiếp theo để học thêm về các mẫu thiết kế khác và cách áp dụng chúng trong thực tế.

## Ứng dụng thực tế

Facade Pattern được sử dụng rộng rãi trong các thư viện và framework để cung cấp một giao diện đơn giản cho client tương tác với hệ thống phức tạp bên dưới.