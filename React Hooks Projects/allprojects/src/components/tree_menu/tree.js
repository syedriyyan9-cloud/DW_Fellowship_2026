const tree = 
[
    {
        "id": "1",
        "name": "Home",
        "icon": "home",
        "path": "/"
    },
    {
        "id": "2",
        "name": "Products",
        "icon": "box",
        "children": [
        {
            "id": "2-1",
            "name": "Electronics",
            "path": "/products/electronics"
        },
        {
            "id": "2-2",
            "name": "Apparel",
            "path": "/products/apparel"
        }
        ]
    },
    {
        "id": "3",
        "name": "Settings",
        "icon": "settings",
        "children": [
        {
            "id": "3-1",
            "name": "Profile",
            "path": "/settings/profile"
        },
        {
            "id": "3-2",
            "name": "Security",
            "path": "/settings/security"
        }
        ]
    }
]

export default tree