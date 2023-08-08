import { useState } from 'react';
import {BsPersonAdd} from 'react-icons/bs';
import '../css/SignUpPage.css'
const SignUpPage = () => { 
    const [firstName, setFirstName] = useState("Jashwanth Reddy")
    const [lastName, setLastName] = useState("Kadaru")
    const [gender, setGender] = useState("")
    const [page, setPage] = useState(0)
    const verifyForm = ( i ) => {
        console.log(i)
    }

    const nextpage = ( ) => {
        verifyForm(page)
        if(page!==2)
            setPage((page+1)%3)
    }

    const backpage = ( ) => {
        verifyForm(page)
        if(page!==0)
            setPage((page-1)%3)
    }
    
    return (
        <>
            <div className="sign-up-div">
                <BsPersonAdd size={45} className='su-icon'/>
                <h1> Sign Up </h1>

                <p> tell us more about yourself.</p>

                <div className={'su-pages' + ' page'+(page+1)}> 
                    <div className='su-page'>
                        <h2> Identifiers: </h2>
                        <div className='su-form-input'>
                            <label> First Name: </label>
                            <input type='text' placeholder='first name'/>
                        </div>

                        <div className='su-form-input'>
                            <label> Last Name: </label>
                            <input type='text' placeholder='last name'/>
                        </div>

                        <div className='su-form-input'>
                            <label> Profile Name: </label>
                            <input type='text' placeholder='myprofile'/>
                        </div>

                        <div className='su-form-input'>
                            <label> Preferred Pronouns: </label>
                            <select onChange={(event) => {setGender(event.target.value); }} value={gender}>
                                <option value='He/Him'> He/Him/His </option>
                                <option value='She/Her'> She/Her/Hers </option>
                                <option value='They/Them'> They/Them/Theirs </option>
                                <option value='Ze/Zir'> Ze/Zir/Zirs </option>
                                <option value='prefer not to'> prefer not to mention </option>
                            </select>
                        </div>
                    </div>
            
                    <div className='su-page'>
                        <h2> Contacts: </h2>
                        <div className='su-form-input'>
                            <label> Email id: </label>
                            <input type='email' placeholder='myemail@email.com'/>
                        </div>


                        <div className='su-form-input'>
                            <label> Phone No. 1 : </label>
                            <input type='number' placeholder='phone1'/>
                        </div>

                        <div className='su-form-input'>
                            <label> Phone No. 2 : </label>
                            <input type='number' placeholder='phone2'/>
                        </div>
                    </div>

                    <div className='su-page'>
                        <h2> Short Bio: </h2>
                        <div className='su-form-input'>
                            <label className='su-intro'> describe yourself in a few sentences: </label>
                            <input type='text' placeholder='about myself . . .'/>
                        </div>


                        <div className='su-form-input'>
                            <label className='su-intro'> College: </label>
                            <input type='text' placeholder='college'/>
                        </div>

                        <div className='su-form-input'>
                            <label  className='su-intro'> Top interests {"(pick atmost 3)"}: </label>
                            <select>
                                <option value="opt1"> Mathematics </option>
                                <option value="opt2"> Sports </option>
                                <option value="opt3"> TechClubs </option>
                                <option value="opt4"> Robotics </option>
                                <option value="opt5"> TEDX </option>
                                <option value="opt6"> Competetive Programming </option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div className='su-buttons'>
                        <button id='su-back' onClick={() => {backpage()}}> {"<<"} Back </button>
                        <button id='su-front' onClick={() => {nextpage()}}> Next {">>"} </button>
                </div>
            </div>
        </>
    )
}

export default SignUpPage;