/*
 * In a real world app this would come from an external database
 * and be stored in a decent state manager, like Redux or MobX
 */

export default {
  userId: 1,
  friendsOnlineCount: 2,
  guilds: [
    {
      id: 1111,
      name: 'Reactiflux',
      initials: 'R',
      icon:
        'https://cdn.discordapp.com/icons/102860784329052160/109fd014c718f40110c4a182f105ca71.webp',
      welcomeChannelId: 111124,
      categories: [
        {
          id: 11112,
          name: 'general',
          channels: [
            {
              id: 111123,
              name: 'welcome'
            },
            {
              id: 111124,
              name: 'general',
              messages: [
                {
                  id: 901,
                  userId: 1,
                  content: 'Cras enim dolor, vulputate in dui quis, imperdiet feugiat magna',
                  time: 'Today at 5:17 PM'
                },
                {
                  id: 902,
                  userId: 1,
                  content: 'cursus viverra hendrerit',
                  time: 'Today at 5:17 PM'
                },
                {
                  id: 903,
                  userId: 2,
                  content: 'Aliquam sagittis, velit finibus consequat hendrerit, eros',
                  time: 'Today at 5:18 PM'
                },
                {
                  id: 904,
                  userId: 1,
                  content: 'hasellus odio massa, consequat consequat lec',
                  time: 'Today at 5:17 PM'
                },
                {
                  id: 905,
                  userId: 1,
                  content: 'Donec ipsum nisi, fermentum ac velit eget, lacinia aliquet eros',
                  time: 'Today at 5:17 PM'
                },
                {
                  id: 906,
                  userId: 1,
                  content: 'oin vestibulum luctus nunc vel consectetu',
                  time: 'Today at 5:17 PM'
                },
                {
                  id: 907,
                  userId: 2,
                  content: 'porttitor',
                  time: 'Today at 5:18 PM'
                },

                {
                  id: 908,
                  userId: 2,
                  content: 'sque fermentum magna non ex rutru',
                  time: 'Today at 5:18 PM'
                },
                {
                  id: 909,
                  userId: 2,
                  content: 'accumsan elit ac',
                  time: 'Today at 5:18 PM'
                },
                {
                  id: 910,
                  userId: 2,
                  content: 'elementum erat',
                  time: 'Today at 5:18 PM'
                },
                {
                  id: 911,
                  userId: 3,
                  content: 'nullam ultrices ornare lobortis',
                  time: 'Today at 5:18 PM'
                },
              ]
            },
            {
              id: 111125,
              name: 'need-help'
            }
          ]
        }
      ],
      members: [1, 2, 3, 6, 7]
    },
    {
      id: 2222,
      name: 'MonoGame Discord',
      initials: 'MD',
      icon:
        'https://cdn.discordapp.com/icons/355231098122272778/38071c8ba123ca294d769e5e4f7e1318.webp',
      welcomeChannelId: 222224,
      categories: [
        {
          id: 22222,
          name: 'announcements',
          channels: [
            {
              id: 222223,
              name: 'rules'
            },
            {
              id: 222224,
              name: 'announcements'
            },
            {
              id: 222225,
              name: 'showcase'
            }
          ]
        },
        {
          id: 22223,
          name: 'general',
          channels: [
            {
              id: 222233,
              name: 'general'
            },
            {
              id: 222234,
              name: 'c-sharp'
            },
            {
              id: 222235,
              name: 'libraries'
            }
          ]
        }
      ],
      members: [1, 3, 4, 5]
    }
  ],
  users: {
    1: {
      id: 1,
      username: 'rafaelalmeidatk',
      tag: 7126
    },
    2: {
      id: 2,
      username: 'dodge',
      tag: 3948
    },
    3: {
      id: 3,
      username: 'moustache',
      tag: 5249
    },
    4: {
      id: 4,
      username: 'dice',
      tag: 2183
    },
    5: {
      id: 5,
      username: 'blender',
      tag: 8613
    },
    6: {
      id: 6,
      username: 'freefall',
      tag: 5485
    },
    7: {
      id: 7,
      username: 'moist',
      tag: 8007
    }
  }
};
