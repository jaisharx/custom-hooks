import { Container } from 'semantic-ui-react';
import Header from '../components/Header';
import Head from 'next/head';

import { useMouseWheel } from 'react-use';

const CustomMouseWheelHookComponent = () => {
    const mouseWheel = useMouseWheel();

    return (
        <>
            <h3>delta Y Scrolled: {mouseWheel}</h3>
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
            <CustomMouseWheelHookComponent />
        </Container>
    );
}
