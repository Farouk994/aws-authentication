import Link from 'next/link';
import '../styles/globals.css';
import '../configureAmplify';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className='py-4 py-12 border-b border-gray-300'>
        <Link href='/'>
          <p className='text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2'>
            Home
          </p>
        </Link>
        <Link href='/profile'>
          <p className='text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2 ml-10'>
            Profile
          </p>
        </Link>
        <Link href='/protected'>
          <p className='ml-4'>Protected</p>
        </Link>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
{
  /* <Component {...pageProps} /> */
}
