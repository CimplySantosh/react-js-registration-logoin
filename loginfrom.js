
import './login.css'



function Loginfrom() {



const userjsondata = localStorage.getItem("regiration");

    const userdata = JSON.parse(userjsondata);
    console.log(userdata)

    

    return ( <div>
        <h1 className='text-colors'>you did it </h1>
        <div>
            <h1 className='text-colors'>{userdata.Email}</h1>
            <h1 className='text-colors'>FirstName: <span className='bg-primary'>{userdata.FirstName}</span></h1>
            </div>
    </div>);
}

export default Loginfrom;