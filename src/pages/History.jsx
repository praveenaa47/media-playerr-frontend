import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {deleteVideoHistoryAPI, getVideoHistoryAPI} from '../../services/allAPI'

function History() {
const [history,setHistory]=useState([])
  useEffect(()=>{
    getHistory()
 
  },[])

  const getHistory=async()=>{
    const result = await getVideoHistoryAPI()
    console.log(result);
      if(result.status==200){
        setHistory(result.data)
      }else{
        console.log("API FAILED");
        console.log(result.message);
      }
      }
      console.log(history);

      const removeHistory=async(id)=>{
        await deleteVideoHistoryAPI(id)
        getHistory()
      }
    
  



  return (
    <div>
      <div className="container mt-5 mb-5 d-flex justify-content-between">
        <h2>Watch-History</h2>
        <Link style={{ textDecoration: 'none', color: 'blueviolet', fontSize: '25px' }} to={'/home'}>Back To Home<i class="fa-solid fa-hand-point-left"></i></Link>

      </div>
      <table className="table mb-5 container shadow w-100">
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>TimeStamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>



        {
          history?.length>0?history.map((video,index)=>(

         
          <tr>
          <td>{index+1}</td>
          <td>{video?.title}</td>
          <td><a href={video.link} target='_blank'>{video?.link}</a></td>
          <td>{video.timeStamp}</td>
          <td> <button onClick={()=>removeHistory(video.id)} className='btn'><i class="fa-solid fa-trash-can"></i></button></td>
        </tr>
        
      )):<p className='text-danger fw-bolder'>Nothing to Display</p>
      }

        </tbody>
      </table>

    </div>
  )
}

export default History
