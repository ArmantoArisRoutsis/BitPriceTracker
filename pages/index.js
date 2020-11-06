import Fetch from 'isomorphic-unfetch'
import Layout from "../components/Layout"
import Prices from "../components/Prices"


const index = (props) => (
    <Layout>
        <div>
            <h1>Wellcome to BitsPrice</h1>
            <Prices bpi = {props.bpi}/>
        </div>
    </Layout>
    )

index.getInitialProps = async function(){
    const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
    const data = await res.json();

    return {
        bpi: data
    }
}

export default index;