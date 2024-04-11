export interface BaseController<T> {
    getAll: () => Promise<T[]>;
    get: (id: number) => Promise<T>;
    create: (data: T) => Promise<T>;
    update: (id: number, data: Partial<T>) => Promise<T>;
    delete(id: number): Promise<boolean>;
}

