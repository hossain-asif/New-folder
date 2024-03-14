
import React from 'react';

const App = () => {

//state

// Auto executed

//Arrow => event onChange form-submit Logic Function api call

//view //jsx //output
//let age = 19;
//let isBangladeshi = true;
//   return (
//     // <div>
//     //     <h1>App</h1>

//     //     <form action="">
//     //         <input type="text" /> <br />
//     //         <input type="text" /> <br />
//     //         <button type="button">Submit</button>
//     //     </form>

//     //     {2+2} 
//     //     <br />
//     //     {
//     //         new Date().getTime()
//     //     }
//     //     <br />
//     //     {
//     //         // alert('hello')
//     //     }
        

//     //     {
//     //         // invocable js function
//     //         (()=>{

//     //             let a = 1;
//     //             let b = 2;

//     //             return a+b;                

//     //         })()
//     //     }

        
//     //     {
            
//     //         (()=>{



//     //         })()
//     //     }

         

//     // </div>

//     // <div>
//     //     {
//     //         age>18?("You are adult"):("You are child")
//     //     }
//     // </div>

//     // <div>
//     //     {isBangladeshi && <h1>You are Bangladeshi</h1>}
//     // </div>


//   );


// if(age>=18){
//     return (
//         <div>
//             <h1>You are adult</h1>
//         </div>
//     );
// }
// else{
//     return(
//         <div>
//             <h1>You are child</h1>
//         </div>
//     )
// }



let array = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

return(
    <div>
        <ol>
            {
                array.map((item)=>{
                    return <li>{item}</li>
                })
            }
        </ol>

    </div>
);





};

export default App;
