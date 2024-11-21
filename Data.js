const destinations = [
    {
        title: 'Beaches',
        icon: 'sun',
        bgcolor: 'palevioletred',
        data: [
            {
                id: '1',
                name: 'Bora Bora',
                image: require('./borabora.jpg'),
                description: 'Bora Bora is a small island in French Polynesia, known for its turquoise waters and luxury resorts.'
            },
            {
                id: '2',
                name: 'Maldives',
                image: require('./maldives.jpg'),
                description: 'The Maldives is a tropical paradise in the Indian Ocean, famous for its white sandy beaches and clear waters.'
            },
        ],
    },
    {
        title: 'Mountains',
        icon: 'mountain',
        bgcolor: 'royalblue',
        data: [
            {
                id: '1',
                name: 'Mount Everest',
                image: require('./everest.jpg'),
                description: 'Mount Everest is the tallest mountain in the world, located in the Himalayas on the border between Nepal and China.'
            },
            {
                id: '2',
                name: 'Rocky Mountains',
                image: require('./rockymountain.jpg'),
                description: 'The Rocky Mountains are a major mountain range in North America, known for their breathtaking landscapes and wildlife.'
            },
        ],
    },
];

export {destinations};
