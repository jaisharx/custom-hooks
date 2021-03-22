export default function Header({ title, desc }) {
    return (
        <header style={{ marginTop: 10 }}>
            <h1>Custom Hook Usage</h1>
            <h2>
                {title}: <small style={{ fontWeight: 400 }}>{desc}</small>
            </h2>

            <hr />
        </header>
    );
}
