import { Container } from 'semantic-ui-react';
import Header from '../components/Header';
import Head from 'next/head';

import { useGeolocation } from 'react-use';

const CustomGeoLocationHookComponent = () => {
    const location = useGeolocation();

    return (
        <>
            <pre>{JSON.stringify(location, null, 2)}</pre>
        </>
    );
};

export default function useGeoLocationHook() {
    return (
        <Container>
            <Head>
                <title>Custom Hooks Usage</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header
                title="useGeolocation"
                desc="React sensor hook that tracks user's geographic location. This hook accepts position options."
            />
            <CustomGeoLocationHookComponent />
        </Container>
    );
}
