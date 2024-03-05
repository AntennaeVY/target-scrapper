
# Target Scrapper

This is a web scraping tool developed in TypeScript on top of the Crawlee library. It allows users to extract the data points of products on target.com given a keyword. 

## Installation

**Clone the repository**

 `git clone https://github.com/AntennaeVY/target-scrapper.git`
 `cd target-scrapper`

**Install dependencies**

`npm install`

## Usage

The input for the scraper is a JSON file named `INPUT.json`, which should be located in the following directory: `project_folder\storage\key_value_stores\default\`. The `INPUT.json` file should contain the following fields:

```json
{
	// A list of keywords to scrape from
	"keywords": [""],
	// The store id where prices are going to be retrieved from (Optional)
	"pricing_store_id": "",
	// Zip code (Optional)
	"zip": ""
}
```

To run the scraper, navigate to the project directory in your terminal and run the following command:
`npm start` 


## Output
The output of the scraper will be a series of JSON files, one per product scraped, and will be located in the following directory: `project_folder\storage\datasets\default`.

Example of a product scrapped with the "chocolate" keyword:

```json
{
    "__typename": "ProductSummary",
    "tcin": "51591379",
    "original_tcin": "51591379",
    "item": {
        "relationship_type": "Collection Child",
        "relationship_type_code": "CC",
        "merchandise_classification": {
            "class_id": 2,
            "department_id": 55
        },
        "eligibility_rules": {
            "add_on": {
                "is_active": true
            },
            "scheduled_delivery": {
                "is_active": true
            }
        },
        "enrichment": {
            "buy_url": "https://www.target.com/p/m-38-m-39-s-peanut-family-size-chocolate-candy-18-08oz/-/A-51591379",
            "images": {
                "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_b07c29a9-8fc0-4df6-9074-b97e64ed8910",
                "alternate_image_urls": [
                    "https://target.scene7.com/is/image/Target/GUEST_46ff18c2-7c15-4c71-b913-97309351000b",
                    "https://target.scene7.com/is/image/Target/GUEST_d2c245c1-9f69-4904-9656-0fc6d0026697",
                    "https://target.scene7.com/is/image/Target/GUEST_a989852f-ce73-4ee3-bd8e-eeb8eeb0807e",
                    "https://target.scene7.com/is/image/Target/GUEST_b34449c0-9a4a-4af7-9e2a-0b430bf9a325",
                    "https://target.scene7.com/is/image/Target/GUEST_dd88eefb-50c0-4025-ad45-e816749eff4c",
                    "https://target.scene7.com/is/image/Target/GUEST_1059ddd6-9489-49b4-b395-a32c16ac7bbe",
                    "https://target.scene7.com/is/image/Target/GUEST_4bd282e4-4a7f-4c45-87b5-3ecbefa4a454",
                    "https://target.scene7.com/is/image/Target/GUEST_abf020c5-0329-4d44-9fe4-6befdb8f2293"
                ]
            },
            "videos": [
                {
                    "is_list_page_eligible": false,
                    "video_files": [
                        {
                            "mime_type": "video/mp4",
                            "video_url": "https://target.scene7.com/is/content/Target/GUEST_3c054ffb-5c3a-4c12-b5eb-202c59878b57_Flash9_Autox720p_2600k"
                        }
                    ]
                }
            ]
        },
        "compliance": {
            "is_snap_eligible": true
        },
        "dpci": "055-02-1828",
        "cart_add_on_threshold": 35,
        "product_description": {
            "title": "M&#38;M&#39;s Peanut Family Size Chocolate Candy - 18.08oz",
            "bullet_descriptions": [
                "<B>Contains:</B> Milk, Peanuts, Soy",
                "<B>May Contain:</B> Tree Nuts",
                "<B>State of Readiness:</B> Ready to Eat",
                "<B>Form:</B> Pieces",
                "<B>Dietary Needs:</B> Kosher, Halal",
                "<B>Package Quantity:</B> 1",
                "<B>Net weight:</B> 18.08 Ounces",
                "<B>Chocolate types:</B> Milk Chocolate"
            ],
            "soft_bullets": {
                "bullets": [
                    "Share some big game sweetness by adding the chocolatey and peanuty taste of M&M's Peanut Chocolate Candies to your spread with this 18.08-ounce family size pack",
                    "Enjoy real milk chocolate, roasted peanuts and colorful candy shells",
                    "Great for fall tailgating moments when you'd like a colorful candy treat",
                    "Perfect for Super Bowl fans looking for resealable candy packs to stock the party",
                    "Don't make a rookie mistake, add a taste of sweetness to your Super Bowl spread of salty snacks, apps, and football game grub, because everyone loves a sweet victory"
                ]
            }
        },
        "product_classification": {
            "item_type": {
                "name": "Chocolates",
                "type": "428808"
            }
        },
        "product_vendors": [
            {
                "vendor_name": "M & M MARS",
                "id": "3187959"
            },
            {
                "vendor_name": "C & S HAWAII",
                "id": "1256646"
            },
            {
                "vendor_name": "STORE ONLY DUMMY VENDOR",
                "id": "1213676"
            },
            {
                "vendor_name": "C & S WHOLESALE GROCERS",
                "id": "1142161"
            },
            {
                "vendor_name": "MCLANE COMPANY INC",
                "id": "1125528"
            }
        ],
        "fulfillment": {},
        "primary_brand": {
            "canonical_url": "/b/m-s/-/N-560n4",
            "linking_id": "560n4",
            "name": "M&M's"
        }
    },
    "promotions": [
        {
            "plp_message": "20% off M&M's family size SUP",
            "promotion_id": "244294423",
            "promotion_class": "Buy and Save",
            "ship_method": [
                "PickupInStore",
                "SCHEDULED_DELIVERY_PPO",
                "BuyInStore",
                "SCHEDULED_DELIVERY"
            ],
            "subscription_type": "ALL",
            "threshold_type": "quantity",
            "reward_type": "PercentageOff",
            "reward_value": 20,
            "external_promotion_alternate_id": "244294423",
            "circle_offer": true
        }
    ],
    "price": {
        "current_retail": 7.79,
        "formatted_current_price": "$7.79",
        "formatted_current_price_type": "reg",
        "reg_retail": 7.79,
        "formatted_unit_price": "$0.43",
        "formatted_unit_price_suffix": "/ounce",
        "location_id": 3991
    },
    "ratings_and_reviews": {
        "statistics": {
            "rating": {
                "average": 4.78,
                "count": 5776,
                "secondary_averages": [
                    {
                        "id": "Taste",
                        "label": "taste",
                        "value": 4.55
                    },
                    {
                        "id": "Quality",
                        "label": "quality",
                        "value": 4.56
                    },
                    {
                        "id": "Value",
                        "label": "value",
                        "value": 4.54
                    }
                ]
            }
        }
    }
}
```

