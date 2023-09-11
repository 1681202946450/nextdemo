import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';


export default function Post({ postData }) {
    return <Layout>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
    </Layout>
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllPostIds();
    console.log('paths',paths)
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}