
# Observer Pattern

## Observer Pattern là gì?

Observer Pattern là một mẫu thiết kế hành vi (Behavioral Design Pattern), trong đó một đối tượng gọi là "subject" có thể thông báo cho nhiều "observer" về các thay đổi trong trạng thái của nó. Điều này giúp giảm sự phụ thuộc giữa subject và các observer, cho phép mở rộng hệ thống mà không cần thay đổi mã của các đối tượng khác.

## Demo

### Chưa áp dụng Observer Pattern

Trong ví dụ này, `NewsAgency` trực tiếp thông báo tin tức cho các subscriber mà không thông qua một cơ chế observer:

```typescript
class NewsAgency {
  private news: string;

  setNews(news: string) {
    this.news = news;
    this.notifySubscribers();
  }

  notifySubscribers() {
    console.log("Thông báo cho tất cả người đăng ký: " + this.news);
  }
}

class Subscriber {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  receiveNews(news: string) {
    console.log(`${this.name} nhận được tin tức: ${news}`);
  }
}

// Sử dụng
const newsAgency = new NewsAgency();
const subscriber1 = new Subscriber('Subscriber 1');
const subscriber2 = new Subscriber('Subscriber 2');

// Khi có tin tức mới, NewsAgency sẽ thông báo trực tiếp (không thông qua observer).
newsAgency.setNews('Tin tức mới nhất!');
```

### Đã áp dụng Observer Pattern

Trong ví dụ này, `NewsAgency` sử dụng Observer Pattern để quản lý các subscriber. Khi có tin tức mới, `NewsAgency` sẽ thông báo cho tất cả các observer thông qua phương thức `update`:

```typescript
// Đối tượng Observer
interface Observer {
  update(news: string): void;
}

// Đối tượng Subject
class NewsAgency {
  private news: string;
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  setNews(news: string) {
    this.news = news;
    this.notifyObservers();
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.news);
    }
  }
}

// Đối tượng Observer cụ thể
class Subscriber implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(news: string): void {
    console.log(`${this.name} nhận được tin tức: ${news}`);
  }
}

// Sử dụng Observer Pattern
const newsAgency = new NewsAgency();

const subscriber1 = new Subscriber('Subscriber 1');
const subscriber2 = new Subscriber('Subscriber 2');

newsAgency.addObserver(subscriber1);
newsAgency.addObserver(subscriber2);

newsAgency.setNews('Tin tức mới nhất!');
```

## Kết luận

Việc áp dụng Observer Pattern giúp chúng ta thiết kế các hệ thống linh hoạt hơn, nơi các đối tượng có thể giao tiếp mà không có sự phụ thuộc chặt chẽ vào nhau. Điều này giúp mở rộng và bảo trì hệ thống dễ dàng hơn.

## Đây là một phần trong khóa học nhiều phần về các mẫu thiết kế (Design Patterns).

Hãy theo dõi các phần tiếp theo để học thêm về các mẫu thiết kế khác và cách áp dụng chúng trong thực tế.

## Ứng dụng thực tế

Một ứng dụng thực tế của Observer Pattern là trong việc xây dựng các hệ thống quản lý sự kiện, như hệ thống chat, hệ thống thông báo, hệ thống cập nhật dữ liệu trực tuyến, v.v. Trong các hệ thống này, các đối tượng có thể đăng ký để nhận thông báo khi có sự kiện xảy ra, mà không cần phụ thuộc vào đối tượng gửi thông báo.