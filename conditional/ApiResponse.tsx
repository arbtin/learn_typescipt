type ApiResponse<T> =
| { status: 'success'; data: T; timestamp: Date }
| { status: 'error'; message: string; timestamp: Date};

let response1: ApiResponse<number> = {
    status: 'success',
    data: 100,
    timestamp: new Date(),
};

let response2: ApiResponse<number> = {
    status: 'error',
    message: 'encountered error',
    timestamp: new Date(),
};
