import dataMock from '../mock';

const alphabet = "abcdefghijklmnopqrstuvwxyz";
//const employee = `${dataMock.lastName} ${dataMock.firstName}`;
//
// function Checkletter(name, letter) {
//  return if name.charAt(0)===letter ? name;
// }
export const ListEmployee = () => {

    return (
        <div style={{display: "flex",flexDirection: "row"}}>
            {
                alphabet.split("").map(letter => <div style={{display: "flex", flexWrap : "wrap"}}>
                    <div>{letter}</div>
                    <div>{dataMock.filter(el => el.lastName[0] === letter.toUpperCase()).map(el => <div >{el.lastName}  {el.firstName}</div>)}</div>

                </div>
            )}

        </div>

    )
}
