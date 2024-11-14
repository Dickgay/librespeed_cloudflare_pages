export async function onRequest(context) {
    const downloadSize = 100 * 1024 * 1024; // 100 MB
    const data = new Uint8Array(downloadSize).fill(0);
    return new Response(data, {
        headers: {
            "Content-Type": "application/octet-stream",
            "Cache-Control": "no-store",
        },
    });
}
