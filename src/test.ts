import {createUser , updateUser , Delete , allUsers} from './index'
import { PrismaClient } from '@prisma/client';

const prisma  = new PrismaClient();

async function main() {
  // Create a user
  const newUser = await createUser('John Doe', 'johnjohn' , 'Ansh' , 'Preet');
  console.log('New user:', newUser);

  // Read users
  const users = await allUsers();
  console.log('All users:', users);

  // Update user
  const updatedUser = await updateUser(newUser.id, 'Jane Doe', 'jane@example.com');
  console.log('Updated user:', updatedUser);

  // Delete user
  await Delete(newUser.id);
  console.log('User deleted successfully');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });