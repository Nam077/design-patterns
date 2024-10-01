interface Vehicle {
    drive: () => void;
}

/**
 *
 */
class CarF implements Vehicle {
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
class BikeF implements Vehicle {
    /**
     *
     */
    drive(): void {
        console.log('Riding a bike');
    }
}

// Factory Method tạo các đối tượng
/**
 *
 */
abstract class VehicleFactoryF {
    abstract createVehicle(): Vehicle;

    /**
     *
     */
    startVehicle(): void {
        const vehicle = this.createVehicle();

        vehicle.drive();
    }
}

/**
 *
 */
class CarFactory extends VehicleFactoryF {
    /**
     * @returns {CarF} - Trả về đối tượng Car
     */
    createVehicle(): CarF {
        return new CarF();
    }
}

/**
 *
 */
class BikeFactory extends VehicleFactoryF {
    /**
     * @returns {BikeF} - Trả về đối tượng Bike
     */
    createVehicle(): BikeF {
        return new BikeF();
    }
}

// Sử dụng Factory Method Pattern
const carFactory = new CarFactory();

const bikeFactory = new BikeFactory();

carFactory.startVehicle();
bikeFactory.startVehicle();
