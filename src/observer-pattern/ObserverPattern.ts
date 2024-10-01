interface Observer {
    update: (message: string) => void;
}

/**
 *
 */
class NewsAgency {
    private news: string;
    private observers: Observer[] = [];

    /**
     *
     * @param {Observer} observer - Đối tượng quan sát
     */
    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    /**
     *
     * @param {observer} observer - Đối tượng quan sát
     */
    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter((item) => item !== observer);
    }

    /**
     *
     * @param {string} news - Tin tức
     */
    setNews(news: string): void {
        this.news = news;
        this.notifyObservers();
    }

    /**
     *
     */
    notifyObservers(): void {
        this.observers.forEach((observer) => observer.update(this.news));
    }
}

/**
 *
 */
class Subscriber implements Observer {
    private name: string;

    /**
     *
     * @param {string} name - Tên người đăng ký
     */
    constructor(name: string) {
        this.name = name;
    }

    /**
     *
     * @param {string} news - Tin tức
     */
    update(news: string): void {
        console.log(`${this.name} nhận được tin tức: ${news}`);
    }
}

/**
 *
 */
async function main() {
    const newsAgency = new NewsAgency();
    const subscriber1 = new Subscriber('Nguyễn Văn A');
    const subscriber2 = new Subscriber('Nguyễn Văn B');

    newsAgency.addObserver(subscriber1);
    newsAgency.addObserver(subscriber2);

    newsAgency.setNews('Có mưa rồi');
    newsAgency.setNews('Hà Nội thắng');
    newsAgency.setNews('Covid-19 bùng phát');
}

(async () => {
    await main();
})();
