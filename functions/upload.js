export async function onRequest(context) {
    const size = (await context.request.arrayBuffer()).byteLength;
    return new Response("OK", {
        headers: { "Content-Type": "text/plain" },
    });
}
