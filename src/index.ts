export default {
  async fetch(req: Request): Promise<Response> {
    const url = new URL(req.url);
    url.hostname = 'www.eaimty.com';
    return Response.redirect(url, 301);
  },
};
