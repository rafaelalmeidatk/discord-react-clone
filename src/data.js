/*
 * In a real world app this would come from an external database
 * and be stored in a decent state manager, like Redux or MobX
 */

let nextMessageId = 900;
const randomMessages = [
  'Quisque eget sapien scelerisque, sagittis neque sed, rhoncus lacus.',
  'nam elementum',
  'cursus viverra hendrerit',
  'Aliquam sagittis, velit finibus consequat hendrerit, eros',
  'Donec ipsum nisi, fermentum ac velit eget, lacinia aliquet eros',
  'oin vestibulum luctus nunc vel consectetu',
  'porttitor',
  'sque fermentum magna non ex rutru',
  'accumsan elit ac',
  'elementum erat',
  'nullam ultrices ornare lobortis',
  'proin quis erat at orci tempor lacinia',
  'Quisque semper odio arcu',
  'suspendisse iaculis gravida venenatis',
  'nunc lacinia orci sapien',
  'posuere',
  'dignissim vitae magna',
  'vitae nibh',
  'maecenas et imperdiet lectus',
  'et pulvinar lacus vehicula nec'
]

const generateRandomMessagesFromRandomUsers = numOfMessages => {
  const messages = [];

  for (var i = 0; i < numOfMessages; i++) {
    const userId = 1 + Math.floor(Math.random() * 6);
    const rows = 1 + Math.floor(Math.random() * 3);
    for (var j = 0; j < rows; j++) {
      messages.push({
        id: nextMessageId++,
        userId,
        content: randomMessages[Math.floor(Math.random() * randomMessages.length)],
        time: 'Today at 5:17 PM'
      });
    }
  }

  return messages;
};

const generateRandomMessagesFromGivenUsers = (numOfMessages, users) => {
  const messages = [];

  for (var i = 0; i < numOfMessages; i++) {
    const userId = users[Math.floor(Math.random() * users.length)];
    const rows = 1 + Math.floor(Math.random() * 3);
    for (var j = 0; j < rows; j++) {
      messages.push({
        id: nextMessageId++,
        userId,
        content: randomMessages[Math.floor(Math.random() * randomMessages.length)],
        time: 'Today at 5:17 PM'
      });
    }
  }

  return messages;
}

export default {
  userId: 1,
  friendsOnlineCount: 2,
  directMessages: [
    {
      id: 333,
      userId: 2,
      messages: [...generateRandomMessagesFromGivenUsers(20, [1, 2])]
    },
    {
      id: 334,
      userId: 3,
      messages: [...generateRandomMessagesFromGivenUsers(20, [1, 3])]
    },
    {
      id: 335,
      userId: 4,
      messages: [...generateRandomMessagesFromGivenUsers(20, [1, 4])]
    },
    {
      id: 336,
      userId: 6,
      messages: [...generateRandomMessagesFromGivenUsers(20, [1, 6])]
    },
  ],
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
              name: 'welcome',
              messages: [...generateRandomMessagesFromRandomUsers(3)]
            },
            {
              id: 111124,
              name: 'general',
              messages: [...generateRandomMessagesFromRandomUsers(50)]
            },
            {
              id: 111125,
              name: 'need-help',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            }
          ]
        }
      ],
      roles: {
        11: {
          id: 11,
          name: 'Admin',
          color: 'rgb(231, 76, 60)',
          isSeparated: true
        },
        12: {
          id: 12,
          name: 'Moderator',
          color: 'rgb(230, 126, 34)',
          isSeparated: true
        },
        13: {
          id: 13,
          name: 'MVP',
          color: 'rgb(155, 89, 182)',
          isSeparated: true
        }
      },
      members: [
        { userId: 1, roles: [11, 12] },
        { userId: 2, roles: [11] },
        { userId: 3, roles: [12] },
        { userId: 6, roles: [] },
        { userId: 7, roles: [] }
      ]
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
              name: 'rules',
              messages: [...generateRandomMessagesFromRandomUsers(1)]
            },
            {
              id: 222224,
              name: 'announcements',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 222225,
              name: 'showcase',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            }
          ]
        },
        {
          id: 22223,
          name: 'general',
          channels: [
            {
              id: 222233,
              name: 'general',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 222234,
              name: 'c-sharp',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 222235,
              name: 'libraries',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            }
          ]
        }
      ],
      roles: {
        11: {
          id: 11,
          name: 'Admin',
          color: 'red'
        }
      },
      members: [
        { userId: 1, roles: [11] },
        { userId: 3, roles: [] },
        { userId: 4, roles: [] },
        { userId: 5, roles: [] }
      ]
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
