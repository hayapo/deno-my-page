export async function handler(req: Request): Promise<Response> {
    const res = await fetch('https://blog-subdirectory-proxy.hayapo.workers.dev/blog');
    return res;
}