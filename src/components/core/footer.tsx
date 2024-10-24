export default function Footer() {
    const date: Date = new Date();

    return(
        <>
            <footer>
                <p>&copy; 2023-{date.getFullYear()} rileydeman</p>
            </footer>
        </>
    );
}