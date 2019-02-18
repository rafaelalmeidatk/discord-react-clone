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
      welcomeChannelId: 111123,
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
              name: 'general'
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
  users: [
    {
      id: 1,
      username: 'rafaelameidatk',
      tag: 7126
    },
    {
      id: 2,
      username: 'dodge',
      tag: 3948
    },
    {
      id: 3,
      username: 'moustache',
      tag: 5249
    },
    {
      id: 4,
      username: 'dice',
      tag: 2183
    },
    {
      id: 5,
      username: 'blender',
      tag: 8613
    },
    {
      id: 6,
      username: 'freefall',
      tag: 5485
    },
    {
      id: 7,
      username: 'moist',
      tag: 8007
    }
  ]
};
