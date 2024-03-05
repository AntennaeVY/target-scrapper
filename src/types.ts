export interface TargetListingResponseBody {
  data: Data;
}

export interface Data {
  search: Search;
}

export interface Search {
  search_suggestions: string[];
  search_recommendations: SearchRecommendations;
  search_response: SearchResponse;
  products: Product[];
}

export interface Product {
  __typename: Typename;
  tcin: string;
  original_tcin: string;
  item: Item;
  promotions: Promotion[];
  price: Price;
  ratings_and_reviews: RatingsAndReviews;
}

export type Typename = "ProductSummary";

export interface Item {
  is_limited_time_offer?: boolean;
  relationship_type: RelationshipType;
  relationship_type_code: RelationshipTypeCode;
  merchandise_classification: MerchandiseClassification;
  eligibility_rules: EligibilityRules;
  enrichment: Enrichment;
  compliance: Compliance;
  dpci: string;
  cart_add_on_threshold: number;
  product_description: ProductDescription;
  product_classification: ProductClassification;
  product_vendors: ProductVendor[];
  fulfillment: SearchRecommendations;
  primary_brand: PrimaryBrand;
  ribbons?: string[];
}

export interface Compliance {
  is_snap_eligible: boolean;
}

export interface EligibilityRules {
  add_on: AddOn;
  scheduled_delivery: AddOn;
}

export interface AddOn {
  is_active: boolean;
}

export interface Enrichment {
  buy_url: string;
  images: Images;
  videos?: Video[];
}

export interface Images {
  primary_image_url: string;
  alternate_image_urls: string[];
}

export interface Video {
  is_list_page_eligible: boolean;
  video_files: VideoFile[];
}

export interface VideoFile {
  mime_type: MIMEType;
  video_url: string;
}

export type MIMEType = "video/mp4";

export interface SearchRecommendations {}

export interface MerchandiseClassification {
  class_id: number;
  department_id: number;
}

export interface PrimaryBrand {
  canonical_url: string;
  linking_id: string;
  name: string;
}

export interface ProductClassification {
  item_type: ItemType;
}

export interface ItemType {
  name: Name;
  type: string;
}

export type Name = "Chocolates";

export interface ProductDescription {
  title: string;
  bullet_descriptions: string[];
  soft_bullets: SoftBullets;
}

export interface SoftBullets {
  bullets: string[];
}

export interface ProductVendor {
  vendor_name: string;
  id: string;
}

export type RelationshipType = "Stand Alone" | "Collection Child";

export type RelationshipTypeCode = "SA" | "CC";

export interface Price {
  current_retail: number;
  formatted_current_price: string;
  formatted_current_price_type: FormattedCurrentPriceType;
  reg_retail: number;
  formatted_unit_price: string;
  formatted_unit_price_suffix: FormattedUnitPriceSuffix;
  location_id: number;
}

export type FormattedCurrentPriceType = "reg";

export type FormattedUnitPriceSuffix = "/ounce";

export interface Promotion {
  plp_message: string;
  promotion_id: string;
  promotion_class: string;
  ship_method: string[];
  subscription_type: string;
  threshold_type: string;
  reward_type: string;
  reward_value: number;
  external_promotion_alternate_id: string;
  circle_offer: boolean;
}

export interface RatingsAndReviews {
  statistics: Statistics;
}

export interface Statistics {
  rating: Rating;
}

export interface Rating {
  average: number;
  count: number;
  secondary_averages?: SecondaryAverage[];
}

export interface SecondaryAverage {
  id: ID;
  label: Label;
  value: number;
}

export type ID = "Value" | "Quality" | "Taste";

export type Label = "value" | "quality" | "taste";

export interface SearchResponse {
  facet_list: FacetList[];
  visual_facet_list: VisualFacetList[];
  metadata: Metadata;
  sort_options: SortOption[];
}

export interface FacetList {
  facet_id: string;
  type: string;
  display_name: string;
  expand: boolean;
  options: FacetListOption[];
}

export interface FacetListOption {
  display_name: string;
  id?: string;
  url: string;
  value: string;
}

export interface Metadata {
  response_ids: string[];
  count: number;
  current_page: number;
  keyword: string;
  offset: number;
  sort_by: string;
  total_pages: number;
  total_results: number;
}

export interface SortOption {
  name: string;
  value: string;
}

export interface VisualFacetList {
  facet_id: string;
  type: string;
  display_name: string;
  expand: boolean;
  options: VisualFacetListOption[];
}

export interface VisualFacetListOption {
  display_name: string;
  canonical_name: string;
  id: string;
  source: string;
  image_url: string;
  url: string;
  value: string;
}
