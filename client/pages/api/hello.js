// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { withSSRContext } from 'aws-amplify';
import '../../configureAmplify';

export default async function handler(req, res) {
  const { Auth } = withSSRContext({req});
  const user = await Auth.currentAuthenticatedUser();
  console.log('this is the user', user);
  res.status(200).json({ name: user });
}
