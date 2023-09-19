import Layout from '@/Layouts/Layout';

export default function Home({ auth }) {
    return (
        <Layout auth={auth} head='Home'>
            <h2>Welcome to ammunation!</h2>
        </Layout>
    );
}
