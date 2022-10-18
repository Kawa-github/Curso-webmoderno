import React, {Fragment} from 'react';
export default props => 
    <Fragment>
        <h1>Bom dia {props.name}, sua idade é {props.idade}</h1>
        <p>Salveee</p>
    </Fragment>

// export default props => [
//         <h1>Bom dia {props.name}, sua idade é {props.idade}</h1>,
//         <p>Salveee</p>
// ]

// export default props => 
// <div>
//     <h1>Bom dia {props.name}, sua idade é {props.idade}</h1>
//     <p>Salveee</p>
// </div>
