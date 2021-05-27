import dataMock from '../mock';


export const Comp1 = (props) => {
    const {a} = props;

    return (
        <div>
            <div>{JSON.stringify(dataMock)}</div>
            <div>Берем чисто а: {a}</div>
        </div>
    )
}