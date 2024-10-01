// Đối tượng gốc
/**
 *
 */
class RealImage {
    private filename: string;

    /**
     *
     * @param {string} filename - Tên file
     */
    constructor(filename: string) {
        this.filename = filename;
        this.loadFromDisk();
    }

    /**
     *
     */
    public display(): void {
        console.log('Displaying ' + this.filename);
    }

    /**
     *
     */
    private loadFromDisk(): void {
        console.log('Loading ' + this.filename);
    }
}

// Proxy kiểm soát quyền truy cập đến đối tượng gốc
/**
 *
 */
class ProxyImage {
    private realImage: RealImage;
    private filename: string;

    /**
     *
     * @param {string} filename - Tên file
     */
    constructor(filename: string) {
        this.filename = filename;
    }

    /**
     *
     */
    public display(): void {
        if (!this.realImage) {
            this.realImage = new RealImage(this.filename); // Chỉ tải khi cần thiết
        }

        this.realImage.display();
    }
}

// Sử dụng Proxy Pattern
const image1 = new ProxyImage('image1.jpg');

image1.display(); // Chỉ tải và hiển thị khi cần

const image2 = new ProxyImage('image2.jpg');

image2.display(); // Chỉ tải và hiển thị khi cần
