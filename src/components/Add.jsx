import React from 'react';
import { useState } from 'react';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { uploadVideoAPI } from '../../services/allAPI';



function Add({setUploadVideoResponse}) {

const[uploadVideo,setUploadVideo]=useState({
  id:"",
  title:"",
  url:"",
  link:""
});

console.log(uploadVideo);




 

  //embed link

  const getYoutubeLink = (e)=>{
    const {value} =e.target

    if(value.includes("v=")){
      let vID = value.split("v=")[1].slice(0,11);

      console.log({...uploadVideo,link:`https://www.youtube.com/embed${vID}`});

      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`})

    }else{
      setUploadVideo({...uploadVideo,link:""})
    }
  }

  //handle add function of modal


const handleAdd=async () =>{
  const{id,title,url,link}=uploadVideo;

  if(!id || !title || !url || !link){
    alert("please fill the missing fields");

  }else{
    const result= await uploadVideoAPI(uploadVideo);
    console.log(result);
    if(result.status>=200 && result.status<300){

      handleClose();
      alert("video successfully uploaded")

      setUploadVideoResponse(result.data);
      //after getting response

      setUploadVideo({
        id:"",title:"",url:"",link:""
      });
      
  
      
    }else{
      console.log(result.message);
      alert(result.message);
    }
  }
}


//state of modals

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


 return (
    <>
      <div className="d-flex align-items-center">
        <h5>
          <span style={{fontSize:"bolder"}} className="upload-button">
            Upload Videos
            <button className='btn' onClick={handleShow}>
              <i class="fa-solid fa-chevron-up fa-fade fa-xl"></i>
            </button>
          </span>
        </h5>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Video Id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Video Id"  onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value})}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingtitle" label="Video Title">
        <Form.Control type="text" placeholder="Enter Video title"  onChange={(e)=>setUploadVideo({...uploadVideo,title:e.target.value})}/>
      </FloatingLabel>

      <FloatingLabel controlId="floatingName" label="Image Url" className="mb-3">

        <Form.Control type="text" placeholder="Image Url"onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})} />
      </FloatingLabel>

      <FloatingLabel controlId="floatingName" label="Video Url">
        <Form.Control type="text" placeholder="Video Url"onChange={getYoutubeLink} />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add