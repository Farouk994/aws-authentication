import { Amplify } from 'aws-amplify';
import config from './aws-exports';

// Can be imported when needed
Amplify.configure({ ...config, ssr: true });

// makes app ssr aware
