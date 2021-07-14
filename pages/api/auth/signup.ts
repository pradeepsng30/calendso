import prisma from '../../../lib/prisma';
import { hashPassword } from "../../../lib/auth";
import { collectPageParameters } from '../../../lib/telemetry';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
      return;
  }

  const data = req.body;
  console.log("signup data", data.email, data.username);
  const { username, email, password , college, name} = data;
  const passYear = parseInt(data.passYear);

  if (!username) {
    res.status(422).json({message: 'Invalid username'});
    return;
  }

  // if (!name) {
  //   res.status(422).json({message: 'Invalid name'});
  //   return;
  // }


  if (!email || !email.includes('@')) {
    res.status(422).json({message: 'Invalid email'});
    return;
  }

  if (!password || password.trim().length < 7) {
    res.status(422).json({message: 'Invalid input - password should be at least 7 characters long.'});
    return;
  }

  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [
        {
          username: username
        },
        {
          email: email
        }
      ],
      AND: [
        {
          emailVerified: {
            not: null,
          },
        }
      ]
    }
  });

  if (existingUser) {
    let message: string = (
      existingUser.email !== email
    ) ? 'Username already taken' : 'Email address is already registered';

    return res.status(409).json({message});
  }

  const hashedPassword = await hashPassword(password);

  const user = await prisma.user.upsert({
    where: { email, },
    update: {
      username,
      name,
      password: hashedPassword,
      emailVerified: new Date(Date.now()),
      passYear: passYear,
      college: college,
    },
    create: {
      username,
      email,
      name,
      password: hashedPassword,
      passYear: passYear,
      college: college,
    }
  });

  res.status(201).json({message: 'Created user'});
}