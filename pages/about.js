import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import MovieDetails from "@/pages/components/MovieDetails";
import PageHeader from "@/pages/components/PageHeader";

export function getStaticProps() {
    return new Promise((resolve, reject) => {
        fetch("https://zany-teal-indri-coat.cyclic.app/api/movies/573a13b3f29313caabd3ca06")
            .then(res => res.json())
            .then(data => {
                resolve({ props: { movie: data } });
            })
            .catch((err) => {
                reject(err);
            });
    });
}

export default function About(props) {
    return (
        <div>
            <PageHeader text="About the Developer: Jiaheng Wang" />
            
            <Card>
                <Card.Body>
                    <p>
                        Hi, my name is Jiaheng Wang. I study Computer Programming and Analysis in Seneca College. I like watching movies, such as Zodiac. It is a American mystery thriller film.
                    </p>

                <Link href="/movies/Zodiac">Zodiac</Link>
                </Card.Body>               
            </Card>

            <MovieDetails movie={props.movie} />
        </div>
    );
}