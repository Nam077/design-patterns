/**
 *
 */
class CPU {
    /**
     *
     */
    public freeze(): void {
        console.log('CPU freezing...');
    }

    /**
     *
     * @param {number} position - The position to jump to
     */
    public jump(position: number): void {
        console.log(`CPU jumping to position ${position}`);
    }

    /**
     *
     */
    public execute(): void {
        console.log('CPU executing...');
    }
}

/**
 *
 */
class Memory {
    /**
     *
     * @param {number} position - The position to load the data
     * @param {string} data - The data to load
     */
    public load(position: number, data: string): void {
        console.log(`Loading ${data} to position ${position}`);
    }
}

/**
 *
 */
class HardDrive {
    /**
     *
     * @param {number} sector - The sector to read
     * @param {number} size - The size to read
     * @returns {string} - The data read
     */
    public read(sector: number, size: number): string {
        console.log(`Reading ${size} bytes from sector ${sector}`);

        return 'data';
    }
}

/**
 *
 */
class ComputerFacade {
    private cpu: CPU;
    private memory: Memory;
    private hardDrive: HardDrive;

    /**
     *
     */
    constructor() {
        this.cpu = new CPU();
        this.memory = new Memory();
        this.hardDrive = new HardDrive();
    }

    /**
     *
     */
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
