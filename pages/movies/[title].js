import { useRouter } from 'next/router';
import useSWR from 'swr';
import MovieDetails from '@/pages/components/MovieDetails';
import Error from 'next/error';
import PageHeader from '@/pages/components/PageHeader';

export default function Title() {
   const router = useRouter();
   const { title } = router.query;

   const fetcher = (url) => fetch(url).then((res) => res.json());

   const { data, error } = useSWR(`https://zany-teal-indri-coat.cyclic.app/api/movies?page=1&perPage=10&title=${title}`, fetcher);

   if (!data) {
      return null;
   }

   if (data == []) {
      return (
         <Error statusCode={404} />
      );
   }

   let elements = [];

   data.forEach((movie) => {
      elements.push(
         <div key={movie._id}>
            <PageHeader text={movie._id} />
            <MovieDetails movie={movie} />
         </div>
      )
   });
}