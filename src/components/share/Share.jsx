import "./share.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import PanoramaIcon from '@mui/icons-material/Panorama';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import RoomIcon from '@mui/icons-material/Room';
import Button from "@mui/material/Button";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddAPhotoRoundedIcon from '@mui/icons-material/AddAPhotoRounded';
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import { db, storage } from '../../firebase';
import {ref, getDownloadURL } from "firebase/storage";
import { uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";


// import { Backdrop } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
    
  };

const Share = ( {Userinfo} ) => {
      
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleImgNull = () => setImage();
    const [image, setImage] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [caption, setCaption] = useState("");
    const [progress, setProgress] = useState(""); 
   
    const handleChange = (e) => {
      if (e.target.files[0]) {
          setImage(e.target.files[0]);
          }
          setImageURL(URL.createObjectURL(e.target.files[0]));
      };
     

      
//   useEffect(() => {
//     const Uploadfile = () => {
//       const name = new Date().getTime() + image.name;

//       console.log(name);
//       const storageRef = ref(storage, image.name);
//       const uploadTask = uploadBytesResumable(storageRef, image);

//       uploadTask.on(
//         "state_changed",
//         (snapshot) => {
//           const progress =
//             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           console.log("Upload is " + progress + "% done");
//           setProgress(progress);
//           switch (snapshot.state) {
//             case "paused":
//               console.log("Upload is paused");
//               break;
//             case "running":
//               console.log("Upload is running");
//               break;
//             default:
//               break;
//           }
//         },
//         (error) => {
//           console.log(error);
//         },
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//             console.log("file available at",downloadURL);
//            // setData((prev) => ({ ...prev, img: downloadURL }));
//           });
//         }
//       );
//     };
//     image && Uploadfile();
//   }, [image]);

//   console.log(data);

const handleUpload = (event) => {
    
    
    if (caption === "" && imageURL === "") {
        console.log("Prevented Access to Photo or Caption Submission");
        
    } else {
        event.preventDefault();

        
        if (imageURL === '') {
            addDoc(collection(db,"posts"),{
                timeStamp: serverTimestamp(),
                caption: caption,
                imageUrl: "",
                username: Userinfo?.displayName,
                uid: Userinfo?.uid
            });
            handleClose();
            setProgress(0);
            setCaption("");
            setImage(null);
        } else {
            const storageRef = ref(storage, `images/${image.name}`);
            const uploadTask = uploadBytesResumable(storageRef, image);
            
            console.log( "pp",Userinfo?.displayName);
            //   console.log(uploadTask);
                
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const progress = Math.round(
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        );
                        setProgress(progress);
                        switch (snapshot.state) {
                            case "paused":
                            console.log("Upload is paused");
                            break;
                            case "running":
                            console.log("Upload is running");
                            
                            break;
                            default:
                            break;
                        }
                    },
                    (error) => {
                        console.log(error);
                        alert(error.message);
                    },
                    () => { getDownloadURL(uploadTask.snapshot.ref)
                             .then(url => {
                               addDoc(collection(db,"posts"),{
                              
                                    // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                                    timeStamp: serverTimestamp(),
                                    caption: caption,
                                    imageUrl: url,
                                    // noLikes: noLikes,
                                    username: Userinfo?.displayName,
                                    uid: Userinfo?.uid
                                });
                                handleClose();
                                setProgress(0);
                                setCaption("");
                                setImage(null);
                            })
                    }
                )
            }
        }

    }

    //  const handleUpload = async(e)=>{
    //     e.preventDefault()
    //     try{
    //     const res = await addDoc(collection(db,"cities"),{
    //         name:"l.A",
    //         state:"C.A",
    //         country:"USA",
    //         timeStamp: serverTimestamp()
    //     });
    // }catch(err){
    //     console.log(err);
    // }
        
    //  };



  return (
    <div className="share" >
    <div className="sharetop" onClick={handleOpen} >
        <span className="shareNav"> Create a Post &emsp;  &emsp; </span>
        <span className="shareNav-bar"> Photo/Video Album &emsp;  &emsp;</span>
        <span className="shareNav-bar"> Live</span> 
    </div><br />
    <div className="shareBottom">
        <div className="shareProfile">
            <img src="/images/person/11.jpg" alt="" className='shareProfileImg' />
        </div>
        <div className="shareThings">
            <div className='shareInput'>
           <input onClick={handleOpen} type="text" placeholder={` What's  on  your  mind  ${Userinfo?.displayName}  ?`}  className='shareInputText'/>
           </div>
           <div className="shareLikeBtns" >
                <div className="shareLikebtn" onClick={handleOpen}> 
                    <PanoramaIcon className='sharelikeIcon'></PanoramaIcon> &emsp;
                    <InsertEmoticonIcon  className='sharelikeIcon'></InsertEmoticonIcon> &emsp;
                    <RoomIcon  className='sharelikeIcon'></RoomIcon> &emsp;
                    <LocalOfferIcon  className='sharelikeIcon'></LocalOfferIcon> 
                 </div>
                 <div className="shareBtn">
                    
                    <Button onClick={handleOpen} className='shareBtnOne'> Post </Button>
                      <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                      >
                          <Box sx={style}>
                             <div className="boxTop">
                               <img src="/images/person/11.jpg" alt="" className="shareProfileImg" />
                                <div className="boxTopInput">
                                  <textarea  rows="4" type="text" placeholder={`What's  on  your  mind  ${Userinfo?.displayName} ?`}  className="boxInput" onChange={(e) => setCaption(e.target.value)}/>
                                </div>
                             </div>
                                 
                             <div className="boxPicUpload">
                                <div className="boxPicIcon">
                                        <IconButton color="primary" aria-label="upload picture" component="label">
                                        <input hidden accept="image/*" type="file" onChange={handleChange} />
                                        <AddAPhotoRoundedIcon/>
                                        </IconButton>
                                </div>
                                 {/* <Button variant="outlined" >upload</Button> */}
                                 <button className="uploadButton"onClick={handleUpload} > upload</button>
                                
                             </div>
                                <div className="boxBottom">
                                <img className="boxBottomImg"
                                src={
                                    image
                                    ?   imageURL //URL.createObjectURL(image)
                                    :   "choose an Image"//"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                }
                                alt=""
                                />
                                <div onClick={handleImgNull} className={image?"cross":"crossTwo"}>X</div>
                                <progress value={progress} className={
                                    image
                                    ?   "hidden" 
                                    :   "hiddensc"
                                } max="100" />
                            </div>
                          </Box>
                    </Modal>
                 </div>
           </div>
        </div>
    </div>
</div>
  )
}

export default Share