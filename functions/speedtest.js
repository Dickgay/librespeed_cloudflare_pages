export async function onRequest(context) {
    const url = new URL(context.request.url);
    const path = url.pathname;

    // Set data sizes for speed testing
    const uploadSize = 100 * 1024 * 1024; // 100MB for upload test
    const downloadSize = 100 * 1024 * 1024; // 100MB for download test

    if (path.endsWith("/download")) {
        // Download speed test
        const data = new Uint8Array(downloadSize).fill(0);
        return new Response(data, {
            headers: {
                "Content-Type": "application/octet-stream",
                "Cache-Control": "no-store",
            },
        });
    } else if (path.endsWith("/upload")) {
        // Upload speed test
        const size = (await context.request.arrayBuffer()).byteLength;
        return new Response("OK", {
            headers: { "Content-Type": "text/plain" },
        });
    } else if (path.endsWith("/ping")) {
        // Ping test
        return new Response("pong", {
            headers: { "Content-Type": "text/plain" },
        });
    } else if (path.endsWith("/ip")) {
        // Client IP retrieval
        const ip = context.request.headers.get("cf-connecting-ip");
        return new Response(JSON.stringify({ ip }), {
            headers: { "Content-Type": "application/json" },
        });
    } else {
        return new Response("Not Found", { status: 404 });
    }
}
