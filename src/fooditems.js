import {logos,foodimages} from './assets/assets'

const foodItems = [
    {
        name: 'Butter Chicken',
        location: 'Mumbai',
        deliveryApps: [
        { name: 'Swiggy', price: 250, rating: 4.2, reviews: 100, logoimg:logos.swiggy  },
        { name: 'Zomato', price: 240, rating: 3.8, reviews: 85, logoimg: logos.zomato },
        { name: 'Eatsure', price: 230, rating: 4.5, reviews: 120, logoimg: logos.eatsure },
        ],
        img: foodimages.butterchicken,
        },
        {
        name: 'Vada Pav',
        location: 'Mumbai',
        deliveryApps: [
        { name: 'Swiggy', price: 20, rating: 4.0, reviews: 150, logoimg: logos.swiggy },
        { name: 'Zomato', price: 18, rating: 3.5, reviews: 120, logoimg: logos.zomato },
        { name: 'Eatsure', price: 22, rating: 4.2, reviews: 170, logoimg: logos.eatsure },
        ],
        img:foodimages.vadapav,
        },
        {
        name: 'Pav Bhaji',
        location: 'Mumbai',
        deliveryApps: [
        { name: 'Swiggy', price: 80, rating: 4.1, reviews: 90, logoimg: logos.swiggy },
        { name: 'Zomato', price: 75, rating: 3.9, reviews: 80, logoimg: logos.zomato },
        { name: 'Eatsure', price: 85, rating: 4.3, reviews: 100, logoimg: logos.eatsure },
        ],
        img: foodimages.pavbhaji,
        },
        {
        name: 'Biryani',
        location: 'Mumbai',
        deliveryApps: [
        { name: 'Swiggy', price: 200, rating: 4.4, reviews: 120, logoimg: logos.swiggy },
        { name: 'Zomato', price: 190, rating: 4.0, reviews: 100, logoimg: logos.zomato },
        { name: 'Eatsure', price: 210, rating: 4.5, reviews: 130, logoimg: logos.eatsure },
        ],
        img: foodimages.biryani,
        },
        {
        name: 'Pani Puri',
        location: 'Mumbai',
        deliveryApps: [
        { name: 'Swiggy', price: 30, rating: 4.2, reviews: 110, logoimg: logos.swiggy },
        { name: 'Zomato', price: 25, rating: 3.8, reviews: 90, logoimg: logos.zomato },
        { name: 'Eatsure', price: 35, rating: 4.5, reviews: 150, logoimg: logos.eatsure },
        ],
        img: foodimages.panipuri,
        },
          {
            name: 'Chhole Bhature',
            location: 'Delhi',
            img: foodimages.chholebhature,
            deliveryApps: [
              { name: 'Swiggy', logoimg: logos.swiggy, price: 80, rating: 4.1, reviews: 200 },
              { name: 'Zomato', logoimg: logos.zomato, price: 75, rating: 4.0, reviews: 185 },
              { name: 'Eatsure', logoimg: logos.eatsure, price: 85, rating: 4.3, reviews: 225 },
            ],
          },
          {
            name: 'Paranthe',
            location: 'Delhi',
            img: foodimages.paranthe,
            deliveryApps: [
              { name: 'Swiggy', logoimg: logos.swiggy, price: 50, rating: 4.2, reviews: 150 },
              { name: 'Zomato', logoimg: logos.zomato, price: 45, rating: 3.9, reviews: 135 },
              { name: 'Eatsure', logoimg: logos.eatsure, price: 55, rating: 4.4, reviews: 170 },
            ],
          },
          {
            name: 'Momos',
            location: 'Delhi',
            img: foodimages.momos,
            deliveryApps: [
              { name: 'Swiggy', logoimg: logos.swiggy, price: 90, rating: 4.0, reviews: 175 },
              { name: 'Zomato', logoimg: logos.zomato, price: 85, rating: 3.8, reviews: 160 },
              { name: 'Eatsure', logoimg: logos.eatsure, price: 100, rating: 4.2, reviews: 195 },
            ],
          },
          {
            name: 'Biryani',
            location: 'Bangalore',
            deliveryApps: [
              { name: 'Swiggy', price: 200, rating: 4.3, reviews: 150, logoimg: logos.swiggy },
              { name: 'Zomato', price: 190, rating: 4.1, reviews: 120, logoimg: logos.zomato },
              { name: 'Eatsure', price: 210, rating: 4.5, reviews: 180, logoimg: logos.eatsure },
            ],
            img: foodimages.biryani,
          },
          {
            name: 'Masala Dosa',
            location: 'Bangalore',
            deliveryApps: [
              { name: 'Swiggy', price: 60, rating: 4.2, reviews: 200, logoimg: logos.swiggy },
              { name: 'Zomato', price: 55, rating: 4.0, reviews: 175, logoimg: logos.zomato },
              { name: 'Eatsure', price: 70, rating: 4.4, reviews: 225, logoimg: logos.eatsure },
            ],
            img: foodimages.masaladosa,
          },
          {
            name: 'Pizza',
            location: 'Bangalore',
            deliveryApps: [
              { name: 'Swiggy', price: 300, rating: 4.1, reviews: 250, logoimg: logos.swiggy },
              { name: 'Zomato', price: 290, rating: 3.8, reviews: 200, logoimg: logos.zomato },
              { name: 'Eatsure', price: 310, rating: 4.5, reviews: 300, logoimg: logos.eatsure },
            ],
            img: foodimages.pizza,
          },
          {
            name: 'Bisi Bele Bath',
            location: 'Bangalore',
            deliveryApps: [
              { name: 'Swiggy', price: 80, rating: 4.3, reviews: 175, logoimg: logos.swiggy },
              { name: 'Zomato', price: 75, rating: 4.0, reviews: 150, logoimg: logos.zomato },
              { name: 'Eatsure', price: 90, rating: 4.5, reviews: 200, logoimg: logos.eatsure },
            ],
            img: foodimages.bisibelebath,
          },
          {
            name: 'Ice Cream',
            location: 'Bangalore',
            deliveryApps: [
              { name: 'Swiggy', price: 50, rating: 4.4, reviews: 300, logoimg: logos.swiggy },
              { name: 'Zomato', price: 45, rating: 4.2, reviews: 250, logoimg: logos.zomato },
              { name: 'Eatsure', price: 60, rating: 4.6, reviews: 350, logoimg: logos.eatsure },
            ],
            img: foodimages.icecream,
          },
          {
            name: 'Hyderabadi Biryani',
            location: 'Hyderabad',
            img: foodimages.biryani,
            deliveryApps: [
              { name: 'Swiggy', price: 250, rating: 4.1, reviews: 80, logoimg: logos.swiggy },
              { name: 'Zomato', price: 240, rating: 3.9, reviews: 75, logoimg: logos.zomato },
              { name: 'Eatsure', price: 260, rating: 4.3, reviews: 90, logoimg: logos.eatsure }
            ]
          },
          {
            name: 'Haleem',
            location: 'Hyderabad',
            img: foodimages.haleem,
            deliveryApps: [
              { name: 'Swiggy', price: 120, rating: 4.2, reviews: 70, logoimg: logos.swiggy },
              { name: 'Zomato', price: 110, rating: 4.0, reviews: 65, logoimg: logos.zomato },
              { name: 'Eatsure', price: 130, rating: 4.4, reviews: 80, logoimg: logos.eatsure }
            ]
          },
          {
            name: 'Irani Chai',
            location: 'Hyderabad',
            img: foodimages.iranichai,
            deliveryApps: [
              { name: 'Swiggy', price: 40, rating: 4.0, reviews: 60, logoimg: logos.swiggy },
              { name: 'Zomato', price: 35, rating: 3.8, reviews: 55, logoimg: logos.zomato },
              { name: 'Eatsure', price: 45, rating: 4.2, reviews: 70, logoimg: logos.eatsure }
            ]
          },
          {
            name: 'Osmania Biscuit',
            location: 'Hyderabad',
            img: foodimages.osmaniabiscuits,
            deliveryApps: [
              { name: 'Swiggy', price: 20, rating: 3.9, reviews: 50, logoimg: logos.swiggy },
              { name: 'Zomato', price: 15, rating: 3.6, reviews: 45, logoimg: logos.zomato },
              { name: 'Eatsure', price: 25, rating: 4.0, reviews: 60, logoimg: logos.eatsure }
            ]
          },
          {
            name: 'Dhokla',
            location: 'Ahmedabad',
            img: foodimages.dhokla,
            deliveryApps: [
              { name: 'Swiggy', price: 30, rating: 4.1, reviews: 80, logoimg: logos.swiggy },
              { name: 'Zomato', price: 35, rating: 3.8, reviews: 65, logoimg: logos.zomato },
              { name: 'Eatsure', price: 40, rating: 4.3, reviews: 95, logoimg: logos.eatsure }
            ]
          },
          {
            name: 'Khaman',
            location: 'Ahmedabad',
            img: foodimages.khaman,
            deliveryApps: [
              { name: 'Swiggy', price: 35, rating: 4.2, reviews: 90, logoimg: logos.swiggy },
              { name: 'Zomato', price: 40, rating: 3.9, reviews: 75, logoimg: logos.zomato },
              { name: 'Eatsure', price: 45, rating: 4.4, reviews: 105, logoimg: logos.eatsure }
            ]
          },
          {
            name: 'Handvo',
            location: 'Ahmedabad',
            img: foodimages.handvo,
            deliveryApps: [
              { name: 'Swiggy', price: 60, rating: 4.3, reviews: 110, logoimg: logos.swiggy },
              { name: 'Zomato', price: 55, rating: 4.0, reviews: 90, logoimg: logos.zomato },
              { name: 'Eatsure', price: 70, rating: 4.5, reviews: 125, logoimg: logos.eatsure }
            ]
          },
          {
            name: 'Fafda',
            location: 'Ahmedabad',
            img: foodimages.fafda,
            deliveryApps: [
              { name: 'Swiggy', price: 50, rating: 4.1, reviews: 85, logoimg: logos.swiggy },
              { name: 'Zomato', price: 45, rating: 3.8, reviews: 70, logoimg: logos.zomato },
              { name: 'Eatsure', price: 60, rating: 4.2, reviews: 100, logoimg: logos.eatsure }
            ]
          },
          {
            name: 'Idli',
            location: 'Chennai',
            deliveryApps: [
              { name: 'Swiggy', price: 30, rating: 4.1, reviews: 125, logoimg: logos.swiggy },
              { name: 'Zomato', price: 25, rating: 3.9, reviews: 110, logoimg: logos.zomato },
              { name: 'Eatsure', price: 35, rating: 4.3, reviews: 145, logoimg: logos.eatsure }
            ],
            img: foodimages.idli
          },
          {
            name: 'Dosa',
            location: 'Chennai',
            deliveryApps: [
              { name: 'Swiggy', price: 40, rating: 4.2, reviews: 140, logoimg: logos.swiggy },
              { name: 'Zomato', price: 35, rating: 3.8, reviews: 115, logoimg: logos.zomato },
              { name: 'Eatsure', price: 45, rating: 4.4, reviews: 155, logoimg: logos.eatsure }
            ],
            img: foodimages.masaladosa,
          },
          {
            name: 'Biryani',
            location: 'Chennai',
            deliveryApps: [
              { name: 'Swiggy', price: 200, rating: 4.3, reviews: 170, logoimg: logos.swiggy },
              { name: 'Zomato', price: 195, rating: 4.1, reviews: 150, logoimg: logos.zomato },
              { name: 'Eatsure', price: 210, rating: 4.5, reviews: 190, logoimg: logos.eatsure }
            ],
            img: foodimages.biryani
          },
          {
            name: 'Filter Coffee',
            location: 'Chennai',
            deliveryApps: [
              { name: 'Swiggy', price: 25, rating: 4.0, reviews: 95, logoimg: logos.swiggy },
              { name: 'Zomato', price: 20, rating: 3.7, reviews: 80, logoimg: logos.zomato },
              { name: 'Eatsure', price: 30, rating: 4.2, reviews: 110, logoimg: logos.eatsure }
            ],
            img: foodimages.coffee
          },
          {
            name: 'Mysore Pak',
            location: 'Chennai',
            deliveryApps: [
              { name: 'Swiggy', price: 30, rating: 4.0, reviews: 100, logoimg: logos.swiggy },
              { name: 'Zomato', price: 25, rating: 3.8, reviews: 85, logoimg: logos.zomato },
              { name: 'Eatsure', price: 35, rating: 4.1, reviews: 120, logoimg: logos.eatsure }
            ],
            img: foodimages.mysorepak
          },
          {
            name: 'Kathi Roll',
            location: 'Kolkata',
            deliveryApps: [
              { name: 'Swiggy', price: 100, rating: 4.2, reviews: 200, logoimg: logos.swiggy },
              { name: 'Zomato', price: 95, rating: 4.0, reviews: 175, logoimg: logos.zomato },
              { name: 'Eatsure', price: 110, rating: 4.5, reviews: 225, logoimg: logos.eatsure },
            ],
            img: foodimages.kathiroll
          },
          {
            name: 'Rosogolla',
            location: 'Kolkata',
            deliveryApps: [
              { name: 'Swiggy', price: 30, rating: 4.3, reviews: 150, logoimg: logos.swiggy },
              { name: 'Zomato', price: 25, rating: 4.1, reviews: 125, logoimg: logos.zomato },
              { name: 'Eatsure', price: 35, rating: 4.6, reviews: 200, logoimg: logos.eatsure },
            ],
            img: foodimages.rosogolla
          },
          {
            name: 'Biriyani',
            location: 'Kolkata',
            deliveryApps: [
              { name: 'Swiggy', price: 150, rating: 4.2, reviews: 250, logoimg: logos.swiggy },
              { name: 'Zomato', price: 145, rating: 4.0, reviews: 225, logoimg: logos.zomato },
              { name: 'Eatsure', price: 160, rating: 4.5, reviews: 275, logoimg: logos.eatsure },
            ],
            img: foodimages.biryani
          },
          {
            name: 'Phuchka',
            location: 'Kolkata',
            deliveryApps: [
              { name: 'Swiggy', price: 30, rating: 4.4, reviews: 175, logoimg: logos.swiggy },
              { name: 'Zomato', price: 25, rating: 4.2, reviews: 150, logoimg: logos.zomato },
              { name: 'Eatsure', price: 35, rating: 4.7, reviews: 200, logoimg: logos.eatsure },
            ],
            img: foodimages.panipuri
          },
          {
            name: 'Misti Doi',
            location: 'Kolkata',
            deliveryApps: [
              { name: 'Swiggy', price: 40, rating: 4.3, reviews: 200, logoimg: logos.swiggy },
              { name: 'Zomato', price: 35, rating: 4.1, reviews: 175, logoimg: logos.zomato },
              { name: 'Eatsure', price: 45, rating: 4.6, reviews: 225, logoimg: logos.eatsure },
            ],
            img: foodimages.mistidoi
          },
          {
            name: 'Misal Pav',
            location: 'Pune',
            deliveryApps: [
              { name: 'Swiggy', price: 70, rating: 4.2, reviews: 120, logoimg: logos.swiggy },
              { name: 'Zomato', price: 65, rating: 3.8, reviews: 100, logoimg: logos.zomato },
              { name: 'Eatsure', price: 80, rating: 4.5, reviews: 150, logoimg: logos.eatsure },
            ],
            img: foodimages.misalpav,
          },
          {
            name: 'Vada Pav',
            location: 'Pune',
            deliveryApps: [
              { name: 'Swiggy', price: 30, rating: 4.0, reviews: 90, logoimg: logos.swiggy },
              { name: 'Zomato', price: 25, rating: 3.5, reviews: 75, logoimg: logos.zomato },
              { name: 'Eatsure', price: 35, rating: 4.2, reviews: 110, logoimg: logos.eatsure },
            ],
            img: foodimages.vadapav,
          },
          {
            name: 'Biryani',
            location: 'Pune',
            deliveryApps: [
              { name: 'Swiggy', price: 200, rating: 4.3, reviews: 140, logoimg: logos.swiggy },
              { name: 'Zomato', price: 195, rating: 4.0, reviews: 120, logoimg: logos.zomato },
              { name: 'Eatsure', price: 210, rating: 4.5, reviews: 160, logoimg: logos.eatsure },
            ],
            img: foodimages.biryani,
          },
          {
            name: 'Pav Bhaji',
            location: 'Pune',
            deliveryApps: [
              { name: 'Swiggy', price: 80, rating: 4.1, reviews: 100, logoimg: logos.swiggy },
              { name: 'Zomato', price: 75, rating: 3.8, reviews: 85, logoimg: logos.zomato },
              { name: 'Eatsure', price: 85, rating: 4.3, reviews: 120, logoimg: logos.eatsure },
            ],
            img: foodimages.pavbhaji,
          },
          {
            name: 'Lal Maas',
            location: 'Jaipur',
            deliveryApps: [
              { name: 'Swiggy', price: 300, rating: 4.2, reviews: 80, logoimg: logos.swiggy },
              { name: 'Zomato', price: 290, rating: 4.1, reviews: 75, logoimg: logos.zomato },
              { name: 'Eatsure', price: 310, rating: 4.3, reviews: 85, logoimg: logos.eatsure },
            ],
            img: foodimages.lalmass,
          },
          {
            name: 'Dal Baati Churma',
            location: 'Jaipur',
            deliveryApps: [
              { name: 'Swiggy', price: 180, rating: 4.0, reviews: 60, logoimg: logos.swiggy },
              { name: 'Zomato', price: 175, rating: 3.9, reviews: 55, logoimg: logos.zomato },
              { name: 'Eatsure', price: 190, rating: 4.2, reviews: 65, logoimg: logos.eatsure },
            ],
            img: foodimages.dalbatichurma,
          },
          {
            name: 'Kachori',
            location: 'Jaipur',
            deliveryApps: [
              { name: 'Swiggy', price: 25, rating: 4.1, reviews: 80, logoimg: logos.swiggy },
              { name: 'Zomato', price: 20, rating: 3.8, reviews: 65, logoimg: logos.zomato },
              { name: 'Eatsure', price: 30, rating: 4.3, reviews: 95, logoimg: logos.eatsure },
            ],
            img: foodimages.kachori,
          },
          {
            name: 'Ghevar',
            location: 'Jaipur',
            deliveryApps: [
              { name: 'Swiggy', price: 60, rating: 4.0, reviews: 70, logoimg: logos.swiggy },
              { name: 'Zomato', price: 55, rating: 3.7, reviews: 60, logoimg: logos.zomato },
              { name: 'Eatsure', price: 70, rating: 4.2, reviews: 80, logoimg: logos.eatsure },
            ],
            img: foodimages.ghevar,
          },
          {
            name: 'Pyaz Kachori',
            location: 'Jaipur',
            deliveryApps: [
              { name: 'Swiggy', price: 30, rating: 4.2, reviews: 85, logoimg: logos.swiggy },
              { name: 'Zomato', price: 25, rating: 3.9, reviews: 70, logoimg: logos.zomato },
              { name: 'Eatsure', price: 35, rating: 4.3, reviews: 95, logoimg: logos.eatsure },
            ],
            img: foodimages.pyazkachori,
          },
          {
            name: 'Kebabs',
            location: 'Lucknow',
            deliveryApps: [
              { name: 'Swiggy', price: 200, rating: 4.3, reviews: 150, logoimg: logos.swiggy },
              { name: 'Zomato', price: 180, rating: 4.1, reviews: 125, logoimg: logos.zomato },
              { name: 'Eatsure', price: 210, rating: 4.5, reviews: 170, logoimg: logos.eatsure   },
            ],
            img: foodimages.kebabs,
          },
          {
            name: 'Biryani',
            location: 'Lucknow',
            deliveryApps: [
              { name: 'Swiggy', price: 250, rating: 4.2, reviews: 180, logoimg: logos.swiggy },
              { name: 'Zomato', price: 240, rating: 4.0, reviews: 150, logoimg: logos.zomato },
              { name: 'Eatsure', price: 260, rating: 4.3, reviews: 200, logoimg: logos.eatsure   },
            ],
            img: foodimages.biryani,
          },
          {
            name: 'Tunday Kebab',
            location: 'Lucknow',
            deliveryApps: [
              { name: 'Swiggy', price: 180, rating: 4.5, reviews: 200, logoimg: logos.swiggy },
              { name: 'Zomato', price: 160, rating: 4.3, reviews: 175, logoimg: logos.zomato },
              { name: 'Eatsure', price: 200, rating: 4.7, reviews: 220, logoimg: logos.eatsure   },
            ],
            img:foodimages.tundeykabab,
          },
          {
            name: 'Galouti Kebab',
            location: 'Lucknow',
            deliveryApps: [
              { name: 'Swiggy', price: 250, rating: 4.1, reviews: 170, logoimg: logos.swiggy },
              { name: 'Zomato', price: 240, rating: 3.9, reviews: 145, logoimg: logos.zomato },
              { name: 'Eatsure', price: 260, rating: 4.4, reviews: 195, logoimg: logos.eatsure   },
            ],
            img: foodimages.kebabs,
          },
          {
            name: 'Basket Chaat',
            location: 'Lucknow',
            deliveryApps: [
              { name: 'Swiggy', price: 60, rating: 4.1, reviews: 80, logoimg: logos.swiggy },
              { name: 'Zomato', price: 55, rating: 3.8, reviews: 65, logoimg: logos.zomato },
              { name: 'Eatsure', price: 65, rating: 4.3, reviews: 95, logoimg: logos.eatsure },
            ],
            img: foodimages.basketchaat,
          },
          {
            name: 'Sheermal',
            location: 'Lucknow',
            deliveryApps: [
              { name: 'Swiggy', price: 40, rating: 4.0, reviews: 70, logoimg: logos.swiggy },
              { name: 'Zomato', price: 35, rating: 3.7, reviews: 55, logoimg: logos.zomato },
              { name: 'Eatsure', price: 45, rating: 4.2, reviews: 90, logoimg: logos.eatsure },
            ],
            img: foodimages.sheermal,
          }

        
  ];
  
  export default foodItems;
  