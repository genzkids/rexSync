/**
 * Validates whether a given string is a valid RabbitMQ URL.
 * 
 * The function checks the URL format against a regular expression pattern
 * specifically designed for RabbitMQ URLs, which typically follow the format:
 * `amqp://user:password@hostname:port/vhost` or `amqps://user:password@hostname:port/vhost`.
 * 
 * - Protocol: Must be `amqp` or `amqps`.
 * - User Info (optional): Consists of a username and password separated by `:`.
 * - Hostname: Can include alphanumeric characters, underscores (`_`), hyphens (`-`), or dots (`.`).
 * - Port (optional): Numeric value prefixed with a colon (`:`).
 * - Virtual Host (optional): Prefixed with a forward slash (`/`), containing valid characters.
 * 
 * @param url - The RabbitMQ URL to validate.
 * @returns `true` if the string is a valid RabbitMQ URL, otherwise `false`.
 */
export function isValidRabbitMQUrl(url: string): boolean {
    const rabbitMqUrlPattern = /^amqp(s)?:\/\/([a-zA-Z0-9_\-\.]+:[^@]+@)?[a-zA-Z0-9_\-\.]+(:\d+)?(\/[a-zA-Z0-9_\-\.]*)?$/;
    return rabbitMqUrlPattern.test(url);
}

/**
 * Validates whether a given string is a valid URL.
 * 
 * @param url - The string to validate as a URL.
 * @returns `true` if the string is a valid URL, otherwise `false`.
 */
export function isValidUrl (url: string): boolean {
    try {
        const parsedUrl = new URL(url); // Throws if invalid
        return !!parsedUrl.protocol && !!parsedUrl.host;
    } catch {
        return false;
    }
}