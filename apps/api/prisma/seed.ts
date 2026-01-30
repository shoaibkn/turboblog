import 'dotenv/config';
import { faker } from '@faker-js/faker';
import { PrismaClient, Prisma } from './generated/client';
import { PrismaPg } from '@prisma/adapter-pg';

const pool = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter: pool });

async function main() {
  const users = Array.from({ length: 10 }).map(() => ({
    username: faker.internet.username(),
    email: faker.internet.email(),
    isAdmin: faker.datatype.boolean(),
  }));

  // await prisma.user.createMany({ data: users });

  const boards = [
    {
      name: 'Politically Incorrect',
      slug: 'POL',
      description: faker.lorem.sentence(),
    },
    {
      name: 'Literature',
      slug: 'LIT',
      description: faker.lorem.sentence(),
    },
    {
      name: 'Technology',
      slug: 'TECH',
      description: faker.lorem.sentence(),
    },
  ];

  // await prisma.board.createMany({
  //   data: boards,
  // });

  const usersData = [
    'cmkz9gnsz0000g9u98jven8c7',
    'cmkz9gnt00001g9u9hhsbs0nn',
    'cmkz9gnt00002g9u9oow9iqdm',
    'cmkz9gnt00003g9u9txv9mq8i',
    'cmkz9gnt00004g9u94nyxrxlk',
    'cmkz9gnt00005g9u9g10d7yxs',
    'cmkz9gnt00006g9u9bevalhip',
    'cmkz9gnt00007g9u9zwqmwfee',
    'cmkz9gnt10008g9u9mbl0nv54',
    'cmkz9gnt10009g9u90czocxb0',
  ];

  const boardsData = [
    'cmkz9go17000ag9u9avglwiel',
    'cmkz9go18000bg9u9zwxgd9vh',
    'cmkz9go18000cg9u996mx1eoz',
  ];

  const posts = Array.from({ length: 100 }).map(() => {
    const authType: 'ANONYMOUS' | 'REGISTERED' = faker.datatype.boolean()
      ? 'ANONYMOUS'
      : 'REGISTERED';
    const userId =
      authType === 'ANONYMOUS'
        ? null
        : usersData[faker.number.int({ min: 1, max: 10 }) - 1];
    return {
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs(3),
      image: faker.image.url(),
      authorType: authType,
      //USE UID from Users Table
      authorId: authType === 'ANONYMOUS' ? null : userId,
      authorIp: faker.internet.ip(),
      boardId: boardsData[faker.number.int({ min: 1, max: 3 }) - 1],
      userId: authType === 'ANONYMOUS' ? null : userId,
    };
  });

  // await prisma.post.createMany({
  //   data: posts,
  // });
  //
  //
  //
  const postData = ["cmkzd0jdm0000itu9uvxzktqw", "cmkzd0jdp0001itu9xz2r0r7a", "cmkzd0jdp0002itu9z1wseloz", "cmkzd0jdp0003itu9wermtice", "cmkzd0jdp0004itu9ag8npkio", "cmkzd0jdp0005itu9e02mel84", "cmkzd0jdp0006itu9zricmtkw", "cmkzd0jdp0007itu9cldoe3sg", "cmkzd0jdp0008itu9ywqdrwqj", "cmkzd0jdp0009itu9494j0wfl", "cmkzd0jdp000aitu9n9wqyy4k", "cmkzd0jdp000bitu9ywmprams", "cmkzd0jdp000citu95dxd8dhm", "cmkzd0jdp000ditu91l68hwok", "cmkzd0jdp000eitu9gmbrwtrk", "cmkzd0jdp000fitu9barxcv4h", "cmkzd0jdq000gitu97gzd1pa9", "cmkzd0jdq000hitu95ebqii7v", "cmkzd0jdq000iitu9ih6v2hxp", "cmkzd0jdq000jitu91ie64rh8", "cmkzd0jdq000kitu9neqecrv4", "cmkzd0jdq000litu9601vya0e", "cmkzd0jdq000mitu9qc22t4fx", "cmkzd0jdq000nitu97qk63eez", "cmkzd0jdq000oitu917p0t3nq", "cmkzd0jdq000pitu9yguc8tfv", "cmkzd0jdq000qitu958ulphz7", "cmkzd0jdq000ritu93tik0o3o", "cmkzd0jdq000situ9b180yxqy", "cmkzd0jdq000titu9cqr9l843", "cmkzd0jdq000uitu9qfz4mrjf", "cmkzd0jdq000vitu9d81v4894", "cmkzd0jdq000witu9hh4aa4ky", "cmkzd0jdq000xitu9qb5ue7gi", "cmkzd0jdq000yitu9u2y2ggrv", "cmkzd0jdq000zitu9833nraib", "cmkzd0jdq0010itu9k3co4ubm", "cmkzd0jdq0011itu9ie4g9dps", "cmkzd0jdq0012itu92n1ky9fh", "cmkzd0jdq0013itu93s0qmwak", "cmkzd0jdq0014itu9jhp6oktf", "cmkzd0jdq0015itu9pwmgmzbg", "cmkzd0jdq0016itu9ywqt0fe9", "cmkzd0jdq0017itu9vi6ffw69", "cmkzd0jdq0018itu9ezq0c53d", "cmkzd0jdq0019itu964c970jp", "cmkzd0jdq001aitu9ysrbw1iw", "cmkzd0jdq001bitu9ba10jnx0", "cmkzd0jdq001citu97c4xu04f", "cmkzd0jdq001ditu9p97cza23", "cmkzd0jdq001eitu9nyl4j3pm", "cmkzd0jdq001fitu9xxdzw8nj", "cmkzd0jdq001gitu969p4dun5", "cmkzd0jdq001hitu9dbd30cuz", "cmkzd0jdq001iitu9i06d3k7w", "cmkzd0jdq001jitu9a5pa9z7t", "cmkzd0jdq001kitu9ps3nxbhe", "cmkzd0jdq001litu94nlxivsq", "cmkzd0jdq001mitu9u4fhhv4c", "cmkzd0jdq001nitu9m822335a", "cmkzd0jdq001oitu92m24sgfj", "cmkzd0jdq001pitu92ni22hsc", "cmkzd0jdq001qitu91uiteyhj", "cmkzd0jdq001ritu9t3f4yo1n", "cmkzd0jdq001situ95e48xtzs", "cmkzd0jdq001titu9gfnditdc", "cmkzd0jdq001uitu92d5fqfml", "cmkzd0jdq001vitu9fvh9oyxc", "cmkzd0jdq001witu9l02pnehm", "cmkzd0jdq001xitu9kcu8e5i7", "cmkzd0jdq001yitu95wj2j7kr", "cmkzd0jdq001zitu9330rlmwd", "cmkzd0jdq0020itu9cwz4dxr9", "cmkzd0jdr0021itu99bpbq67c", "cmkzd0jdr0022itu9cuwuny06", "cmkzd0jdr0023itu9kmoj23js", "cmkzd0jdr0024itu9s2zfqh8b", "cmkzd0jdr0025itu9q27gtdt0", "cmkzd0jdr0026itu936j5mbd1", "cmkzd0jdr0027itu9cvidctbh", "cmkzd0jdr0028itu9rwubd8o6", "cmkzd0jdr0029itu9fuztkcg0", "cmkzd0jdr002aitu9b66ea7fn", "cmkzd0jdr002bitu97q7civab", "cmkzd0jdr002citu93i1aisot", "cmkzd0jdr002ditu9ca7ye23v", "cmkzd0jdr002eitu9ng8cn278", "cmkzd0jdr002fitu95ya3jl47", "cmkzd0jdr002gitu9qhxctvxw", "cmkzd0jdr002hitu9mchifmgg", "cmkzd0jdr002iitu9740bkvdu", "cmkzd0jdr002jitu9gm6j60sj", "cmkzd0jdr002kitu9czysm3rf", "cmkzd0jdr002litu9vfwc9nn5", "cmkzd0jdr002mitu9ee2pq6we", "cmkzd0jdr002nitu9trapzfji", "cmkzd0jdr002oitu95kf4ym6e", "cmkzd0jdr002pitu90duity25", "cmkzd0jdr002qitu98bxz6uxl", "cmkzd0jdr002ritu9e9aun2sd"]
  const comments = Array.from({ length: 100 }).map(() => {
    const authType: 'ANONYMOUS' | 'REGISTERED' = faker.datatype.boolean()
      ? 'ANONYMOUS'
      : 'REGISTERED';
    const userId =
      authType === 'ANONYMOUS'
        ? null
        : usersData[faker.number.int({ min: 1, max: 10 }) - 1];
    return {
      content: faker.lorem.paragraphs(1),
      authorType: authType,
      //USE UID from Users Table
      authorId: authType === 'ANONYMOUS' ? null : userId,
      authorIp: faker.internet.ip(),
      postId: postData[faker.number.int({ min: 1, max: 100 }) - 1],
      userId: authType === 'ANONYMOUS' ? null : userId,
    };
  });

  await prisma.comment.createMany({
    data: comments,
  });
  console.log('DB seeded successfully');
}

// main()
//   .then(() => {
//     prisma.$disconnect();
//     process.exit(0);
//   })
//   .catch((e) => {
//     prisma.$disconnect();
//     console.error(e);
//     process.exit(1);
//   });
