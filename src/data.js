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
  'et pulvinar lacus vehicula nec',
  'maecenas placerat in ex eget maximus',
  'donec rutrum elit eget erat gravida, id accumsan nisl commodo',
  'mauris vitae consectetur erat, non faucibus velit',
  'quisque risus justo, pretium elementum efficitur ut',
  'vivamus eleifend, ante id iaculis consequat, sem lectus commodo'
];

const generateRandomMessagesFromRandomUsers = numOfMessages => {
  const messages = [];

  for (var i = 0; i < numOfMessages; i++) {
    const userId = 1 + Math.floor(Math.random() * 20);
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
};

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
    {
      id: 337,
      userId: 12,
      messages: [...generateRandomMessagesFromGivenUsers(20, [1, 12])]
    },
    {
      id: 338,
      userId: 15,
      messages: [...generateRandomMessagesFromGivenUsers(20, [1, 15])]
    },
    {
      id: 339,
      userId: 9,
      messages: [...generateRandomMessagesFromGivenUsers(20, [1, 9])]
    },
    {
      id: 340,
      userId: 16,
      messages: [...generateRandomMessagesFromGivenUsers(20, [1, 16])]
    },
    {
      id: 341,
      userId: 14,
      messages: [...generateRandomMessagesFromGivenUsers(20, [1, 14])]
    }
  ],
  guilds: [
    {
      id: 1111,
      name: 'Reactiflux',
      initials: 'R',
      icon: 'https://i.imgur.com/EOASYoR.png',
      welcomeChannelId: 111124,
      categories: [
        {
          id: 11112,
          name: 'general',
          channels: [
            {
              id: 111123,
              name: 'welcome',
              messages: [...generateRandomMessagesFromGivenUsers(3, [13])]
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
            },
            {
              id: 111126,
              name: 'introductions',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 111127,
              name: 'resources',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 111128,
              name: 'news-and-links',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            }
          ]
        },
        {
          id: 11113,
          name: 'community',
          channels: [
            {
              id: 111133,
              name: 'q-and-a',
              messages: [...generateRandomMessagesFromRandomUsers(3)]
            },
            {
              id: 111134,
              name: 'conferences',
              messages: [...generateRandomMessagesFromRandomUsers(50)]
            },
            {
              id: 111135,
              name: 'jobs-advice',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 111136,
              name: 'code-review',
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
        { userId: 2, roles: [] },
        { userId: 3, roles: [12] },
        { userId: 4, roles: [] },
        { userId: 5, roles: [] },
        { userId: 6, roles: [] },
        { userId: 7, roles: [] },
        { userId: 8, roles: [] },
        { userId: 9, roles: [] },
        { userId: 10, roles: [] },
        { userId: 11, roles: [] },
        { userId: 12, roles: [] },
        { userId: 13, roles: [11] },
        { userId: 14, roles: [] },
        { userId: 15, roles: [] },
        { userId: 16, roles: [13] },
        { userId: 17, roles: [13] },
        { userId: 18, roles: [] },
        { userId: 19, roles: [] },
        { userId: 20, roles: [] }
      ]
    },
    {
      id: 2222,
      name: 'MonoGame Discord',
      initials: 'MD',
      icon: 'https://i.imgur.com/13MolaQ.png',
      welcomeChannelId: 222224,
      categories: [
        {
          id: 22222,
          name: 'announcements',
          channels: [
            {
              id: 222223,
              name: 'rules',
              messages: [...generateRandomMessagesFromGivenUsers(5, [4])]
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
            },
            {
              id: 222236,
              name: 'questions',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 222237,
              name: 'non-programming',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            }
          ]
        }
      ],
      roles: {
        11: {
          id: 11,
          name: 'MonoGame Maintainer',
          color: 'rgb(46, 204, 113)',
          isSeparated: true
        },
        12: {
          id: 21,
          name: 'Server Admin',
          color: 'rgb(233, 30, 99)',
          isSeparated: true
        },
        13: {
          id: 13,
          name: 'Server Moderator',
          color: 'rgb(52, 152, 219)',
          isSeparated: true
        }
      },
      members: [
        { userId: 1, roles: [] },
        { userId: 3, roles: [] },
        { userId: 4, roles: [12] },
        { userId: 5, roles: [12] },
        { userId: 6, roles: [13] },
        { userId: 7, roles: [] },
        { userId: 8, roles: [] },
        { userId: 9, roles: [] },
        { userId: 10, roles: [11] },
        { userId: 11, roles: [] },
        { userId: 12, roles: [] },
        { userId: 13, roles: [] },
        { userId: 14, roles: [] },
        { userId: 15, roles: [] },
        { userId: 18, roles: [11] }
      ]
    },
    {
      id: 3333,
      name: 'Terraria',
      initials: 'T',
      icon: 'https://i.imgur.com/w0qLXk7.png',
      welcomeChannelId: 333323,
      categories: [
        {
          id: 33332,
          name: 'announcements',
          channels: [
            {
              id: 333323,
              name: 'rules',
              messages: [...generateRandomMessagesFromGivenUsers(5, [5])]
            },
            {
              id: 333324,
              name: 'announcements',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            }
          ]
        },
        {
          id: 33333,
          name: 'general',
          channels: [
            {
              id: 333333,
              name: 'general',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 333334,
              name: 'questions',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 333335,
              name: 'offtopic',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            }
          ]
        }
      ],
      roles: {
        11: {
          id: 11,
          name: 'Admin',
          color: 'rgb(253, 81, 81)',
          isSeparated: true
        },
        12: {
          id: 21,
          name: 'Moderator',
          color: 'rgb(117, 238, 238)',
          isSeparated: true
        }
      },
      members: [
        { userId: 1, roles: [] },
        { userId: 3, roles: [] },
        { userId: 4, roles: [] },
        { userId: 5, roles: [11] },
        { userId: 6, roles: [] },
        { userId: 7, roles: [] },
        { userId: 8, roles: [12] },
        { userId: 9, roles: [11] },
        { userId: 10, roles: [] },
        { userId: 11, roles: [] },
        { userId: 12, roles: [] },
        { userId: 13, roles: [11] },
        { userId: 14, roles: [] },
        { userId: 15, roles: [] },
        { userId: 16, roles: [] },
        { userId: 17, roles: [] },
        { userId: 18, roles: [] },
        { userId: 19, roles: [] },
        { userId: 20, roles: [] }
      ]
    },
    {
      id: 4444,
      name: 'Rocket League',
      initials: 'RL',
      icon: 'https://i.imgur.com/WiifV40.png',
      welcomeChannelId: 444423,
      categories: [
        {
          id: 44442,
          name: 'announcements',
          channels: [
            {
              id: 444423,
              name: 'rules',
              messages: [...generateRandomMessagesFromGivenUsers(5, [5])]
            },
            {
              id: 444424,
              name: 'announcements',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            }
          ]
        },
        {
          id: 44443,
          name: 'general',
          channels: [
            {
              id: 444433,
              name: 'general',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 444434,
              name: 'questions',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 444435,
              name: 'offtopic',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            }
          ]
        }
      ],
      roles: {
        11: {
          id: 11,
          name: 'Admin',
          color: 'rgb(253, 81, 81)',
          isSeparated: true
        },
        12: {
          id: 21,
          name: 'Moderator',
          color: 'rgb(117, 238, 238)',
          isSeparated: true
        }
      },
      members: [
        { userId: 1, roles: [] },
        { userId: 3, roles: [12] },
        { userId: 4, roles: [12] },
        { userId: 5, roles: [11] },
        { userId: 6, roles: [] },
        { userId: 7, roles: [] },
        { userId: 8, roles: [] },
        { userId: 9, roles: [] },
        { userId: 10, roles: [] },
        { userId: 11, roles: [] },
        { userId: 12, roles: [] },
        { userId: 13, roles: [] },
        { userId: 14, roles: [] },
        { userId: 15, roles: [] },
        { userId: 16, roles: [] },
        { userId: 17, roles: [] },
        { userId: 18, roles: [] }
      ]
    },
    {
      id: 5555,
      name: 'Apex Legends',
      initials: 'AL',
      icon: 'https://i.imgur.com/X4ypv4K.png',
      welcomeChannelId: 555523,
      categories: [
        {
          id: 55552,
          name: 'announcements',
          channels: [
            {
              id: 555523,
              name: 'rules',
              messages: [...generateRandomMessagesFromGivenUsers(5, [7])]
            },
            {
              id: 555524,
              name: 'announcements',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            }
          ]
        },
        {
          id: 55553,
          name: 'general',
          channels: [
            {
              id: 555533,
              name: 'general',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 555534,
              name: 'questions',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 555535,
              name: 'offtopic',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            }
          ]
        }
      ],
      roles: {
        11: {
          id: 11,
          name: 'Admin',
          color: 'rgb(253, 81, 81)',
          isSeparated: true
        },
        12: {
          id: 21,
          name: 'Moderator',
          color: 'rgb(117, 238, 238)',
          isSeparated: true
        }
      },
      members: [
        { userId: 1, roles: [] },
        { userId: 3, roles: [] },
        { userId: 4, roles: [] },
        { userId: 5, roles: [] },
        { userId: 6, roles: [] },
        { userId: 7, roles: [11] },
        { userId: 8, roles: [] },
        { userId: 9, roles: [] },
        { userId: 10, roles: [12] },
        { userId: 11, roles: [12] },
        { userId: 12, roles: [12] },
        { userId: 13, roles: [] },
        { userId: 14, roles: [] },
        { userId: 15, roles: [] },
        { userId: 16, roles: [] },
        { userId: 17, roles: [11] },
        { userId: 18, roles: [] },
        { userId: 19, roles: [11] },
        { userId: 20, roles: [] }
      ]
    },
    {
      id: 6666,
      name: 'Cats Nation',
      initials: 'CN',
      icon: 'https://i.imgur.com/yuJR8BC.jpg',
      welcomeChannelId: 666623,
      categories: [
        {
          id: 66662,
          name: 'announcements',
          channels: [
            {
              id: 666623,
              name: 'rules',
              messages: [...generateRandomMessagesFromGivenUsers(5, [1])]
            },
            {
              id: 666624,
              name: 'announcements',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            }
          ]
        },
        {
          id: 66663,
          name: 'general',
          channels: [
            {
              id: 666633,
              name: 'general',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 666634,
              name: 'questions',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 666635,
              name: 'offtopic',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            }
          ]
        }
      ],
      roles: {
        11: {
          id: 11,
          name: 'Admin',
          color: 'rgb(253, 81, 81)',
          isSeparated: true
        },
        12: {
          id: 12,
          name: 'Moderator',
          color: 'rgb(117, 238, 238)',
          isSeparated: true
        },
        13: {
          id: 13,
          name: 'Fox',
          color: 'rgb(230, 126, 34)',
          isSeparated: true
        }
      },
      members: [
        { userId: 1, roles: [11] },
        { userId: 3, roles: [] },
        { userId: 4, roles: [] },
        { userId: 5, roles: [11] },
        { userId: 6, roles: [] },
        { userId: 7, roles: [12] },
        { userId: 8, roles: [] },
        { userId: 9, roles: [] },
        { userId: 10, roles: [] },
        { userId: 11, roles: [12] },
        { userId: 12, roles: [12] },
        { userId: 13, roles: [12] },
        { userId: 14, roles: [] },
        { userId: 15, roles: [] },
        { userId: 16, roles: [] },
        { userId: 17, roles: [] },
        { userId: 18, roles: [] },
        { userId: 19, roles: [13] },
        { userId: 20, roles: [] }
      ]
    }
  ],
  users: {
    1: {
      id: 1,
      username: 'rafaelalmeidatk',
      tag: 7126,
      avatar: 'https://i.imgur.com/cnAtbiX.png',
      activity: {
        type: 'game',
        name: 'Apex Legends',
        duration: 'for 2 hours'
      }
    },
    2: {
      id: 2,
      username: 'dodge',
      tag: 3948,
      avatar: 'https://i.imgur.com/29b0eSO.jpg',
      activity: {
        type: 'game',
        name: 'Overwatch',
        duration: 'for 3 hours'
      }
    },
    3: {
      id: 3,
      username: 'moustache',
      tag: 5249,
      avatar: 'https://i.imgur.com/rIarYNI.jpg',
      activity: {
        type: 'game',
        name: 'Overwatch',
        duration: 'for 3 hours'
      }
    },
    4: {
      id: 4,
      username: 'dice',
      tag: 2183,
      avatar: 'https://i.imgur.com/nmnMYRm.jpg',
      activity: {
        type: 'game',
        name: 'RuneScape',
        duration: 'for 43 minutes'
      }
    },
    5: {
      id: 5,
      username: 'blender',
      tag: 8613,
      avatar: 'https://i.imgur.com/a0Nh9zW.jpg',
      activity: {
        type: 'game',
        name: 'MapleStory',
        duration: 'for 5 hours'
      }
    },
    6: {
      id: 6,
      username: 'freefall',
      tag: 5485,
      avatar: 'https://i.imgur.com/oUpVX6P.jpg',
      activity: {
        type: 'game',
        name: 'Dota 2',
        duration: 'for 17 minutes'
      }
    },
    7: {
      id: 7,
      username: 'moist',
      tag: 8007,
      avatar: 'https://i.imgur.com/znHDeHS.jpg',
      activity: {
        type: 'game',
        name: 'FINAL FANTASY XIV',
        duration: 'for 6 hours'
      }
    },

    8: {
      id: 8,
      username: 'lucy',
      tag: 4521,
      avatar: 'https://i.imgur.com/GB01AQ3.jpg',
      activity: {
        type: 'game',
        name: 'League of Legends',
        duration: 'for 49 minutes'
      }
    },
    9: {
      id: 9,
      username: 'bind',
      tag: 8745,
      avatar: 'https://i.imgur.com/xLCqPHl.jpg',
      activity: {
        type: 'game',
        name: 'Dead Cells',
        duration: 'for 31 minutes'
      }
    },
    10: {
      id: 10,
      username: 'ruth',
      tag: 6547,
      avatar: 'https://i.imgur.com/RBodTfR.jpg',
      activity: {
        type: 'game',
        name: 'Fortnite',
        duration: 'for 2 hours'
      }
    },
    11: {
      id: 11,
      username: 'classic',
      tag: 2147,
      avatar: 'https://i.imgur.com/rEpierV.jpg'
    },
    12: {
      id: 12,
      username: 'nadir',
      tag: 1427,
      avatar: 'https://i.imgur.com/UUIfwTJ.jpg'
    },
    13: {
      id: 13,
      username: 'socks',
      tag: 1235,
      avatar: 'https://i.imgur.com/pSNBDMS.jpg'
    },
    14: {
      id: 14,
      username: 'wilson',
      tag: 8524,
      avatar: 'https://i.imgur.com/Eca88PY.jpg'
    },
    15: {
      id: 15,
      username: 'board',
      tag: 7412,
      avatar: 'https://i.imgur.com/JQQ8YAp.jpg'
    },
    16: {
      id: 16,
      username: 'jolt',
      tag: 9635,
      avatar: 'https://i.imgur.com/L4FgyKp.jpg'
    },
    17: {
      id: 17,
      username: 'quark',
      tag: 8542,
      avatar: 'https://i.imgur.com/qyu0m3J.jpg'
    },
    18: {
      id: 18,
      username: 'invent',
      tag: 7856,
      avatar: 'https://i.imgur.com/RXBqm4G.jpg'
    },
    19: {
      id: 19,
      username: 'fox',
      tag: 7894,
      avatar: 'https://i.imgur.com/DH3GF6U.png'
    },
    20: {
      id: 20,
      username: 'stylus',
      tag: 6392,
      avatar: 'https://i.imgur.com/TnLdsV4.jpg'
    }
  }
};
