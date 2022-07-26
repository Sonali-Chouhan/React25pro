// interface Iprops {
//     a: number;
//     b: number;
//     name:string;
//   }
//   export function Profile(props: Iprops) {
//  return (
//         <div>
//             <div>{props.a+props.b} {props.name}</div>
//         </div>
//     )
//   }
interface Iprops {
    a: number;
    b: number;
    name:string;
  }
  export function Profile(props: Iprops) {
    const name=props.name
    
    return (
        <div>
            <div>{props.a+props.b}</div>
            <div>{name}</div>
        </div>
    )
  }