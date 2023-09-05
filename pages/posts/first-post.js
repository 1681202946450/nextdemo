import Image from 'next/image';
import Link from 'next/link';

const FirstPost = ()=> {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <div>
        <Image src="/manc.jpg" width="820" height="545"></Image>
      </div>
    </>
  );
}

export default FirstPost