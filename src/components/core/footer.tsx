export default function Footer() {
    const date: Date = new Date();

    return(
        <>
            <footer>
                <p>&copy; 2023-{date.getFullYear()} rileydeman // Website made by <a href="https://www.rileydeman.com/" target="_blank">rileydeman</a></p>
            </footer>
        </>
    );
}