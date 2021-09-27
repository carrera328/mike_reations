import {v4 as uniqueId } from 'uuid';
export const data = [
    {
            "id" : 0,
            "name" : "Moonpies",
        "price" : 15.00,
        "description": "Dolor reprehenderit dolor elit sint ipsum.",
        "picklistValues": [
            {"name":"Cheese", "chosen": false, "id" : 0},
            {"name":"Bacon", "chosen": false, "id" : 1},
            {"name":"Lettuce", "chosen": false, "id" : 2},
            {"name":"Tomato", "chosen": false, "id" : 3},
            {"name":"Onions", "chosen": false, "id" : 4}
        ]
        
    },
    {   "id" : 1,
        "name" : "Candy Apple Tart",
        "price" : 50.00,
        "description": "Veniam elit commodo deserunt ex laborum proident nisi minim elit sit.",
        "picklistValues": [
            {"name":"Cheese", "chosen": false, "id" : 0},
            {"name":"Bacon", "chosen": false, "id" : 1},
            {"name":"Lettuce", "chosen": false, "id" : 2},
            {"name":"Tomato", "chosen": false, "id" : 3},
            {"name":"Onions", "chosen": false, "id" : 4}
        ]

    },
    {
        "id" : 2,
        "name" : "Georgia",
        "price" : 160.00,
        "description": "Est sit reprehenderit ea aliqua.",
        "picklistValues": [
            {"name":"Cheese", "chosen": false, "id" : 0},
            {"name":"Bacon", "chosen": false, "id" : 1},
            {"name":"Lettuce", "chosen": false, "id" : 2},
            {"name":"Tomato", "chosen": false, "id" : 3},
            {"name":"Onions", "chosen": false, "id" : 4}
        ]
        
    },
    {
        "id" : 3,
        "name" : "Suzie Q",
        "price" : 150.00,
        "description": "Dolore aliquip nisi minim mollit irure aliquip qui.",
        "picklistValues": [
            {"name":"Cheese", "chosen": false, "id" : 0},
            {"name":"Bacon", "chosen": false, "id" : 1},
            {"name":"Lettuce", "chosen": false, "id" : 2},
            {"name":"Tomato", "chosen": false, "id" : 3},
            {"name":"Onions", "chosen": false, "id" : 4}
        ]
        
    },
    {
        "id" : 4,
        "name" : "AK-47",
        "price" : 867.,
        "description": "Occaecat mollit et culpa excepteur fugiat consequat reprehenderit in labore in ut eu esse quis.",
        "picklistValues": [
            {"name":"Cheese", "chosen": false, "id" : 0},
            {"name":"Bacon", "chosen": false, "id" : 1},
            {"name":"Lettuce", "chosen": false, "id" : 2},
            {"name":"Tomato", "chosen": false, "id" : 3},
            {"name":"Onions", "chosen": false, "id" : 4}
        ]
        
    },
    {
        "id" : 5,
        "name" : "Chicken Fingers",
        "price" : 5.00,
        "description": "Voluptate do qui incididunt duis aliquip enim cupidatat sit.",
        "picklistValues": [
            {"name":"Cheese", "chosen": false, "id" : 0},
            {"name":"Bacon", "chosen": false, "id" : 1},
            {"name":"Lettuce", "chosen": false, "id" : 2},
            {"name":"Tomato", "chosen": false, "id" : 3},
            {"name":"Onions", "chosen": false, "id" : 4},
            {"name":"Cheese", "chosen": false, "id" : 5},
            {"name":"Bacon", "chosen": false, "id" : 6},
            {"name":"Lettuce", "chosen": false, "id" : 7},
            {"name":"Tomato", "chosen": false, "id" : 8},
            {"name":"Onions", "chosen": false, "id" : 9}
        ]
        
    }
];

export const addresses = [
    {
        id: uniqueId(),
        street: '2541 W. 47th St',
        city: 'Chicago',
        state_province: 'IL',
        zip: '60631'
    },
    {
        id: uniqueId(),
        street: '2251 W. Washington St',
        city: 'Indianapolis',
        state_province: 'IN',
        zip: '46222'
    },
    {
        id: uniqueId(),
        street: '2380 Jefferson Terrace',
        city: 'East Point',
        state_province: 'GA',
        zip: '30433'
    }
]
