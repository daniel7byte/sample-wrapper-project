import { APIGatewayProxyStructuredResultV2 } from 'aws-lambda/trigger/api-gateway-proxy';

const headers = {
    'Content-Type': 'application/json',
}

export const OK: (body: any) => APIGatewayProxyStructuredResultV2 = (body) => ({
    statusCode: 200,
    headers,
    body: JSON.stringify({
        status: 200,
        data: body,
    }),
});

export const BadRequest: (message: string | string[]) => APIGatewayProxyStructuredResultV2 = (message) => ({
    statusCode: 400,
    headers,
    body: JSON.stringify({
        status: 400,
        message: Array.isArray(message) ? message.join('; ') : message,
    }),
});

export const Forbidden: APIGatewayProxyStructuredResultV2 = {
    statusCode: 403,
    headers,
    body: JSON.stringify({
        status: 403,
        message: 'Not authorized to access this resource.',
    }),
};

export const NotFound: APIGatewayProxyStructuredResultV2 = {
    statusCode: 404,
    headers,
    body: JSON.stringify({
        status: 404,
        message: 'Requested resource not found.',
        data: null
    }),
}

export const InternalServerError: (message: string) => APIGatewayProxyStructuredResultV2 = (message) => ({
    statusCode: 500,
    headers,
    body: JSON.stringify({
        status: 500,
        message: Array.isArray(message) ? message.join('; ') : message,
    }),
});

export const resolveError = (err: unknown) => {
    console.error(err);
    if (err instanceof Error) {
        return InternalServerError(err.message);
    }
    throw err;
}
