import { useRouter } from 'next/router';

function PorfolioProjectPage(){
    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query);

    return(
        <div>
            <h1>PorfolioProjectPage</h1>
        </div>
    );
}
export default PorfolioProjectPage;