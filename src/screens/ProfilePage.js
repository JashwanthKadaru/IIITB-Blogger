import { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi'
import { BiSave } from 'react-icons/bi'
import '../css/ProfilePage.css' 

const ProfilePage = () => {
    const [username, setUsername] = useState("Jashwanth Kadaru")
    const [edit1, setEdit1] = useState(false)
    const [edit2, setEdit2] = useState(false)
    const [edit3, setEdit3] = useState(false)
    const [edit4, setEdit4] = useState(false)
    const [edit5, setEdit5] = useState(false)
    const [edit6, setEdit6] = useState(false)
    const [edit7, setEdit7] = useState(false)
    const [edit8, setEdit8] = useState(false)
    const [edit9, setEdit9] = useState(false)
    const [edit10, setEdi10] = useState(false)
    const [edit11, setEdit11] = useState(false)
    const [edit12, setEdit12] = useState(false)
    const [firstName, setFirstName] = useState("Jashwanth Reddy")
    const [lastName, setLastName] = useState("Kadaru")
    const [gender, setGender] = useState("")
    const [bio, setBio] = useState("write about yourself here.")
    const [collegeName, setCollegeName] = useState("")
    const [skills, setSkills] = useState("")
    const posts = [];
    const library = [];
    return (
        <div className='profile-page'>
            <div className='profile-photo-div'>
                <div className='profile-img-div'>
                    <img src='./img/person1.jpeg'/>

                    <div className='contacts-div'>
                        <p> Contacts: </p>
                        
                        <span className='phone-span'>
                            <p> Ph. No: </p>
                            <a> 9392798582 </a>
                            <a> 6309629903 </a>
                        </span>

                        <span className='email-span'>
                            <p> Email id: </p>
                            <a> Jashwanth.Kadaru095@iiitb.ac.in</a>
                        </span>
                    </div>
                </div>

                <div className='profile-data1'>
                    <label> Profile Name: </label>
                    <input type='text' placeholder={username} onChange={(e) => {if(edit1) {setUsername(e.target.value)}}} value={username}/>
                    {(!edit1)?<FiEdit2 className="editicon" onClick={() => {setEdit1(true)}}/> : <BiSave className="editicon" onClick={() => {setEdit1(false)}}/>}
                </div>

                <div  className='profile-data1'>
                    <label> First Name: </label>
                    <input type='text' placeholder={firstName} onChange={(e) => {if(edit2) {setFirstName(e.target.value)}}} value={firstName}/>
                    {(!edit2)?<FiEdit2 className="editicon" onClick={() => {setEdit2(true)}}/> : <BiSave className="editicon" onClick={() => {setEdit2(false)}}/>}
                </div>

                <div  className='profile-data1'>
                    <label> Last Name: </label>
                    <input type='text' placeholder={lastName} onChange={(e) => {if(edit3) {setLastName(e.target.value)}}} value={lastName}/>
                    {(!edit3)?<FiEdit2 className="editicon" onClick={() => {setEdit3(true)}}/> : <BiSave className="editicon" onClick={() => {setEdit3(false)}}/>}
                </div>

                <div className='profile-data1'>
                    <label> Preferred Pronouns: </label>
                    <select onChange={(event) => {if(edit4) {setGender(event.target.value); console.log(event.target.value)}}} value={gender}>
                        <option value='He/Him'> He/Him/His </option>
                        <option value='She/Her'> She/Her/Hers </option>
                        <option value='They/Them'> They/Them/Theirs </option>
                        <option value='Ze/Zir'> Ze/Zir/Zirs </option>
                        <option value='prefer not to'> prefer not to mention </option>
                    </select>
                    {(!edit4)?<FiEdit2 className="editicon" onClick={() => {setEdit4(true)}}/> : <BiSave className="editicon" onClick={() => {setEdit4(false)}}/>}
                </div>

                <div className='profile-data1'>
                    <label> Top Read: </label>
                    <div></div>
                </div>

                <div className='profile-data1'>
                    <label> Number of Posts written: {posts.length}</label>
                </div>

                <div className='profile-data1'>
                    <label> Number of Posts saved: {library.length}</label>
                </div>
            </div>

            <div className='profile-border1'> </div>
         
            <div className='profile-about-section'>
                <div className='profile-data2'>
                    <label> Bio <span style={{fontSize: "0.65rem"}}> {"(a short intro about yourself)"}</span>: </label>
                    <br/>
                    <textarea maxLength={200} placeholder={bio} onChange={(e) => {if(edit5) {setBio(e.target.value)}}} value={bio}/>
                    {(!edit5)?<FiEdit2 className="editicon" onClick={() => {setEdit5(true)}}/> : <BiSave className="editicon" onClick={() => {setEdit5(false)}}/>}
                </div>

                <div  className='profile-data2'>
                    <label> College: </label>
                    <input type='text' placeholder={collegeName} onChange={(e) => {if(edit6) {setCollegeName(e.target.value)}}} value={collegeName}/>
                    {(!edit6)?<FiEdit2 className="editicon" onClick={() => {setEdit6(true)}}/> : <BiSave className="editicon" onClick={() => {setEdit6(false)}}/>}
                </div>

                <div  className='profile-data2'>
                    <label> Skills: </label>
                    <input type='text' placeholder={skills} onChange={(e) => {if(edit7) {setSkills(e.target.value)}}} value={skills}/>
                    {(!edit7)?<FiEdit2 className="editicon" onClick={() => {setEdit7(true)}}/> : <BiSave className="editicon" onClick={() => {setEdit7(false)}}/>}
                </div>

                <div className='profile-data2'>
                    <label> Contributed Posts: </label>
                    <div></div>
                </div>

                <div className='profile-data2'>
                    <label> Liked Posts: </label>
                </div>

                <div className='profile-data2'>
                    <label> Saved: </label>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;