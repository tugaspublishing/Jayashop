import data from '../components/data.json';

const dataku = (props) => {
    return(
    <div className="container">
    <p>{props.gbr}</p>
    <p>{props.model}</p>
    <p>{props.Harga}</p>
    </div>
    );

}

export async function getStaticProps(context){
    let kode = context.prams.kode;
    let data = dataku.find(x => x.id == kode);

    let {gbr, model, Harga} = data;
    return{
        props : {
            gbr, model, Harga
        }
    }
}

export async function getStaticPaths(){
    return {
        paths : [
            {params : {kode : '1'}},
            {params : {kode : '2'}},
            {params : {kode : '3'}},
            {params : {kode : '4'}},
            {params : {kode : '5'}},
            {params : {kode : '6'}},
            {params : {kode : '7'}},
            {params : {kode : '8'}},
            {params : {kode : '9'}},
            {params : {kode : '10'}},
            {params : {kode : '11'}},
            {params : {kode : '12'}},
            {params : {kode : '13'}},
            {params : {kode : '14'}},
            {params : {kode : '15'}},
            {params : {kode : '16'}},
            {params : {kode : '17'}},
            {params : {kode : '18'}},
            {params : {kode : '19'}},
            {params : {kode : '20'}},
            {params : {kode : '21'}},
            {params : {kode : '22'}},
            {params : {kode : '23'}},
            {params : {kode : '24'}},
            {params : {kode : '25'}},
            {params : {kode : '26'}},
            {params : {kode : '27'}}
        ],
        fallback : false
    }
}
export default dataku;