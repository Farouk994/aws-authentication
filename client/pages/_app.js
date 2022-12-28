import Link from 'next/link';
import '../styles/globals.css';
import '../configureAmplify';
// import '@aws-amplify/ui/dist/style.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className='py-4 py-12 border-b border-gray-300'>
        {/* <Link href='/'> */}
        <Link
          href='/'
          className='text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2'
        >
          Home
        </Link>
        {/* </Link> */}
        {/* <Link href='/profile'> */}
        <Link
          href='/profile'
          className='text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2 ml-10'
        >
          Profile
        </Link>
        {/* </Link> */}
        {/* <Link href='/protected'> */}
        <Link href='/protected' className='ml-4'>
          Protected
        </Link>
        {/* </Link> */}
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
{
  /* <Component {...pageProps} /> */
}
