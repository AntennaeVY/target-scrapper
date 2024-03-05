import crypto from "crypto";
import { KeyValueStore } from "crawlee";

interface InputSchema {
  keywords: string[];
  pricing_store_id: string;
  zip: string;
}

const TARGET_API_ENDPOINT_URL =
  "http://redsky.target.com/redsky_aggregations/v1/web/plp_search_v2";
const TARGET_API_KEY = "9f36aeafbe60771e321a7cc95a78140772ab3e96";
const TARGET_API_CHANNEL = "WEB";
const TARGET_API_STARTING_OFFSET = "0";
const TARGET_API_MAX_COUNT = "28";

const {
  keywords = [],
  pricing_store_id = "3991",
  zip = "33010",
} = (await KeyValueStore.getInput<InputSchema>()) ?? {};

export default function generateApiUrls(): string[] {
  const urls: string[] = [];

  for (const keyword of keywords) {
    const url = new URL(TARGET_API_ENDPOINT_URL);

    const randomVisitorId = crypto.randomBytes(16).toString("hex");

    url.searchParams.append("key", TARGET_API_KEY);
    url.searchParams.append("channel", TARGET_API_CHANNEL);
    url.searchParams.append("offset", TARGET_API_STARTING_OFFSET);
    url.searchParams.append("count", TARGET_API_MAX_COUNT);
    url.searchParams.append("visitor_id", randomVisitorId);
    url.searchParams.append("pricing_store_id", pricing_store_id);
    url.searchParams.append("keyword", keyword);
    url.searchParams.append("page", `/s/${keyword}`);
    url.searchParams.append("zip", zip);

    urls.push(url.toString());
  }
  return urls;
}
