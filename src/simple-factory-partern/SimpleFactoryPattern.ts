type VehicleType = 'car' | 'bike';

// Các đối tượng cụ thể
/**
 *
 */
class Car {
    /**
     *
     */
    drive(): void {
        console.log('Driving a car');
    }
}

/**
 *
 */
class Bike {
    /**
     *
     */
    drive(): void {
        console.log('Riding a bike');
    }
}

// Simple Factory tạo các đối tượng
/**
 *
 */
class VehicleFactory {
    /**
     *
     * @param {string} type - Loại phương tiện
     * @returns {Car | Bike} - Trả về đối tượng phương tiện
     */
    static createVehicle(type: VehicleType): Car | Bike {
        if (type === 'car') {
            return new Car();
        } else if (type === 'bike') {
            return new Bike();
        }

        throw new Error('Unknown vehicle type');
    }
}

// Sử dụng Simple Factory Pattern
const vehicle1 = VehicleFactory.createVehicle('car');

vehicle1.drive();

const vehicle2 = VehicleFactory.createVehicle('bike');

vehicle2.drive();
