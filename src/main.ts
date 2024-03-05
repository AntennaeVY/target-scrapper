import { BasicCrawler } from "crawlee";
import { TargetListingResponseBody } from "./types.js";
import generateApiUrls from "./generator.js";

const crawler = new BasicCrawler({
  async requestHandler({ request, sendRequest, enqueueLinks, pushData }) {
    const res = await sendRequest();
    const body = JSON.parse(res.body) as TargetListingResponseBody;

    const metadata = body.data.search.search_response.metadata;
    const products = body.data.search.products;

    const count = +metadata.count;
    const offset = +metadata.offset;

    const nextUrl = new URL(request.url);
    nextUrl.searchParams.set("offset", `${offset + count}`);

    for(const product of products) {
        await pushData(product);
    }

    const current_page = +metadata.current_page;
    const total_pages = +metadata.total_pages;
    
    if (current_page < total_pages)
      await enqueueLinks({
        urls: [nextUrl.toString()],
      });
  },
  maxRequestsPerMinute: 10,
});

const urls = generateApiUrls();

await crawler.run(urls);
