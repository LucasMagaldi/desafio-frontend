import React, { useState } from 'react';
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import Dropzone from 'react-dropzone';
import { mainAPIOauth } from '../../services/axiosApi';


import  './upload.css'

const Upload = () => {
   
  const { Title } = Typography;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [privacy, setPrivacy] = useState(0);
  const [categories, setCategories] = useState("Sports");
  const [videoPath, setVideoPath] = useState("");


  const Private = [
    { value: 0, label:'Private'},
    { value: 1, label:'Public'}
]

const Catogory = [
    { value: 0, label: "Film & Animation" },
    { value: 0, label: "Autos & Vehicles" },
    { value: 0, label: "Music" },
    { value: 0, label: "Pets & Animals" },
    { value: 0, label: "Sports" },
]


  const handleTitle = (e) => {  
    setTitle(e.currentTarget.value);
  }

  const handleDescription = (e) => {
    setDescription(e.currentTarget.value);
  }

  const handlePrivacy = (e) => {
    setPrivacy(e.currentTarget.value);
  }

  const handleCategorie = (e) => {
    setCategories(e.currentTarget.value)
  }

  const UploadVideo= async () => {
      
        const date = new Date();
        //const Date = date.toISOString();
        const id = localStorage.getItem('userId');

        const res = await mainAPIOauth.post('/videos', {
            body: {
                snippet: {
                    title: title,
                    description: description,
                    tags: ["primeiro"]
                },
                status: {
                  privacyStatus: privacy
                }
            }
        })

        console.log(res)
  }

  const DropFiles = (file) => {
    let  formData = new FormData();
    const video = file[0].path
    setVideoPath(video)
  }

  return (

    <div className='upload_container_full'>

        <Title className='title_page'>Upload Your Video</Title>

        <Form>
            <div className="dropzone">
              <Dropzone onDrop={DropFiles} >
                 {({getRootProps, getInputProps}) => (
                    <section>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                            <p>DROP YOUR BEST VIDEO HERE</p>
                            <p>Please use an image with URL</p>
                      </div>
                    </section>
                    )}
                </Dropzone>
            </div>

            <div className='form_section'>

                <div className='form_items'>
                    <label className='label_style'>Title: </label>
                    <input onChange={handleTitle} value={title}/>
                </div>
                <div className='form_items'>
                    <label className='label_style'>Description: </label>
                    <textarea onChange={handleDescription} value={description} />
                </div>

                <select name="" id="privacy" onChange={handlePrivacy}>
                {Private.map((item, index) => (
                    <option key={index} value={item.value}>{item.label}</option>
                ))}
                </select>

                <select name="" id="" onChange={handleCategorie}>
                {Catogory.map((item, index) => (
                    <option key={index} value={item.label}>{item.label}</option>
                ))}
                </select>


                <button className='upload_button' onClick={UploadVideo}>
                    <h4>Submit </h4>
                </button>
            
            </div>       
            
                     
            
            
        </Form>
    </div>
  )
}

export default Upload