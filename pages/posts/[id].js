import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/Data';
import utilStyles from '../../styles/utils.module.css';


// export default function Post({ postData }) {
//     return <Layout>
//         <Head>
//             <title>{postData.title}</title>
//         </Head>
//         <Date dateString={postData.date} />

//         {postData.title}
//         <br />
//         {postData.id}
//         <br />
//         {postData.date}
//         <br />
//         <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
//     </Layout>
// }
export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    );
  }
  

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllPostIds();
    console.log('paths', paths)
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}