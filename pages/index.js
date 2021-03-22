import { Container, Input } from 'semantic-ui-react';
import Header from '../components/Header';
import Head from 'next/head';

import { useLocalStorage } from 'react-use';

const CustomLocalStorageHookComponent = () => {
    const [value, setValue] = useLocalStorage('text', 'hello, world');

    return (
        <>
            <h3>Value: {value}</h3>
            <Input
                placeholder="Start typing here..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </>
    );
};

export default function useLocalStorageHook() {
    return (
        <Container>
            <Head>
                <title>Custom Hooks Usage</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header
                title="useLocalStorage"
                desc="React side-effect hook that manages a single localStorage key."
            />
            <CustomLocalStorageHookComponent />
        </Container>
    );
}
