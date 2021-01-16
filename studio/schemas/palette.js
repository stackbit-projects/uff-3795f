export default {
    "type": "object",
    "name": "palette",
    "title": "Palette",
    "fields": [
        {
            "type": "object",
            "name": "sass",
            "title": "SASS",
            "validation": null,
            "fields": [
                {
                    "type": "string",
                    "name": "default",
                    "title": "Default light",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "light",
                    "title": "Light",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "medium",
                    "title": "Medium",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "dark",
                    "title": "Dark",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "active",
                    "title": "Active",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "active_light",
                    "title": "Active light",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "active_medium",
                    "title": "Active medium",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "active_dark",
                    "title": "Active dark",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "dark_grey",
                    "title": "Dark grey",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "light_grey",
                    "title": "Light grey",
                    "validation": null
                },
                {
                    "type": "image",
                    "name": "bg_image_cart",
                    "title": "Cart Backround Image",
                    "description": "Cart Backround Image (JPG or PNG)",
                    "validation": null
                }
            ]
        },
        {
            "type": "string",
            "name": "type",
            "title": "Object Type",
            "description": "The type of the object",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "palette"
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
                    "object"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "type"
        }
    }
}