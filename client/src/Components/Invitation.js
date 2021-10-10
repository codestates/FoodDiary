import React, {useState} from 'react';
import Sticky from 'react-sticky-el';
import uploadIcon from '../images/upload.png'
import './UploadColumn.css';
import axios from 'axios';

function Invitation () {
    const [guestInfo, setGuestInfo] = useState({
        email: '',
        guestName: ''
    });
    const handleInputValue = (key) => (e) => {
        setGuestInfo({ ...guestInfo, [key]: e.target.value });
    };
    
    const sendInviteEmail = () =>{
        
        if(guestInfo.email === "" || guestInfo.password === ""){
            alert("Please write friend's Email and Name")
        } 

        //To Do
        // 여기에 초대 이메일 보내기 전에 이메일 주소 유효성 체크 넣어주세요!
        // Alert "유효하지 않은 이메일주소 입니다!"

        axios.post('https://localhost:4000/email',{   
            address : guestInfo.email,
            guestName : guestInfo.guestName,
          })
          .then(()=>{
              alert('Send Email to '+guestInfo.guestName+' success!')
          })
          .catch((e)=>{
              alert("이미 가입했거나 초대된 사용자입니다")
          })
    }
   
        return (
          <Sticky>
            <div className="upload_container">
            
            <div className="upload_title">
              <h3>Invite Your Friends!</h3>
            </div>
  
            <div className="upload_description" >
                <input type="email" onChange={handleInputValue('email')}></input>
                <br/>
                <input type="name" onChange={handleInputValue('guestName')}></input>
            </div>

            <div>
              <img className="upload_btn" onClick={sendInviteEmail} src={uploadIcon} alt="pictures" width="615px"/>
            </div>
          
          </div>
          </Sticky>
        )
    }

export default Invitation;