export default {
    "type": "document",
    "name": "config",
    "title": "Global site config",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "Site title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "baseURL",
            "title": "Base URL",
            "description": "Hostname (and path) to the root",
            "hidden": true,
            "validation": null
        },
        {
            "type": "object",
            "name": "params",
            "title": "Params",
            "description": "Site parameters",
            "validation": Rule => Rule.required(),
            "fields": [
                {
                    "type": "string",
                    "name": "snipcart_api_key",
                    "title": "Snipcart public API key",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "footer_text",
                    "title": "Footer Text",
                    "validation": null
                },
                {
                    "type": "image",
                    "name": "logo_light",
                    "title": "Logo Light",
                    "validation": null
                },
                {
                    "type": "image",
                    "name": "logo_dark",
                    "title": "Logo Dark",
                    "validation": null
                },
                {
                    "type": "image",
                    "name": "favicon",
                    "title": "favicon",
                    "validation": null
                },
                {
                    "type": "image",
                    "name": "hamburger_background_image",
                    "title": "Hamburger menu background image",
                    "validation": null
                },
                {
                    "type": "image",
                    "name": "bg_image_primary",
                    "title": "Primary Backround Image",
                    "description": "Primary Backround Image (JPG or PNG)",
                    "validation": null
                },
                {
                    "type": "image",
                    "name": "bg_image_secondary",
                    "title": "Secondary Backround Image",
                    "description": "Secondary Backround Image (JPG or PNG)",
                    "validation": null
                },
                {
                    "type": "image",
                    "name": "bg_image_product",
                    "title": "Product Backround Image",
                    "description": "Product Backround Image (JPG or PNG)",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "palette",
                    "title": "Color Palette",
                    "validation": null,
                    "options": {
                        "list": [
                            "default"
                        ]
                    }
                },
                {
                    "type": "object",
                    "name": "palettes",
                    "title": "Palettes",
                    "hidden": true,
                    "validation": null,
                    "fields": [
                        {
                            "type": "palette",
                            "name": "default",
                            "title": "Default",
                            "validation": null
                        }
                    ]
                },
                {
                    "type": "array",
                    "name": "main_menu",
                    "title": "Navigation Links",
                    "description": "List of navigation links.",
                    "validation": null,
                    "of": [
                        {
                            "type": "action"
                        }
                    ]
                }
            ]
        },
        {
            "type": "object",
            "name": "taxonomies",
            "title": "Taxonomies",
            "hidden": true,
            "validation": null,
            "fields": [
                {
                    "type": "string",
                    "name": "stub",
                    "title": "Stub",
                    "hidden": false,
                    "validation": Rule => Rule.required(),
                    "options": {
                        "list": [
                            "stub"
                        ]
                    }
                }
            ]
        },
        {
            "type": "array",
            "name": "disableKinds",
            "title": "Disable Kinds",
            "description": "Enable disabling of all pages of the specified Kinds.",
            "hidden": true,
            "validation": null,
            "of": [
                {
                    "type": "string"
                }
            ],
            "options": {
                "list": [
                    "page",
                    "home",
                    "section",
                    "taxonomy",
                    "taxonomyTerm",
                    "RSS",
                    "sitemap",
                    "robotsTXT",
                    "404"
                ]
            }
        },
        {
            "type": "boolean",
            "name": "uglyURLs",
            "title": "Ugly URLs",
            "description": "When enabled, creates URL of the form /filename.html instead of /filename/.",
            "hidden": true,
            "validation": null
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Config File Path",
            "description": "The file path of the configuration file",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "config.yaml"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "config"
                ]
            }
        }
    ],
    "singleInstance": true,
    "preview": {
        "select": {
            "title": "title"
        }
    }
}