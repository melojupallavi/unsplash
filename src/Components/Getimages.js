import  { useEffect, useState } from 'react';
import axios from 'axios';
import './Getimages.css'
function Getimages(props)
{

const [query,setquery]=useState("");
const apiurl=`https://api.unsplash.com/photos/random/?count=8&client_id=FAYAZhYR20yDu_LY6IWnnTUK2d2Gx0mFeF41iVoAeXo`;
//    console.log(url);
const [Image,setImage]=useState(null);
   
   const [inpub4,setinput]=useState("")
  

   function inputhandler(event)
   {
      setinput(event.target.value);
   }
   function queryeventhandler(event)
   {
    
    event.preventDefault();

    setquery(inpub4);
    
   // console.log(query);
    
     setinput("");
    //  console.log(queery);
   }
    
    
    useEffect(()=>
    {
        console.log("HI ");
        axios.get(`${apiurl}&query=${query}`).then(response=>
            {
               // console.log(query);
                console.log(response.data);

                    setImage(response.data);
            })     
    },[query]);



return(
    <div className='container '>
    
    
    <form className='form' onSubmit={queryeventhandler}>
    <input className='in' value={inpub4} onChange={inputhandler}></input>
    <button className='button' type='submit'>Submit</button>
    </form>
    {Image && Image.map(({id,urls})=>( <img className=" img-responsive   img-thumbnail imagestyle"key={id}src={urls.full}></img>))}
    </div>
    
    
)

}

export default  Getimages;