import React, { useState, useEffect ,useContext} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import userContextObj from '../context/context';

const Profile = () => {

    const [profileData, setProfileDat] = useState("");
    let navigate = useNavigate()
    let { id ,setId }=useContext(userContextObj);
    console.log("id",id,"setId",setId);

    useEffect(() => {
        //first chek if user is alredy Login 
        
        let profileData = JSON.parse(localStorage.getItem("profileData")) || null
        if (profileData) {
            let profileData = JSON.parse(localStorage.getItem("profileData"));
            setProfileDat(profileData);
        }
        else {
            if (id === "") return;
            request2()
        }
        function request2() {

            axios.get(`https://dummyjson.com/users/${id}`)
                .then((res) => {

                    // console.log(res.data)
                    setProfileDat(res.data)
                    localStorage.setItem("profileData", JSON.stringify(res.data))
                })
                .catch((err) => console.log(err))
        }


    }, [id])

    return (
        <div className='profile-cont'>
            {
                profileData ? (
                    <div className='profile'>
                        <h1 >Profile</h1>
                        <img src={profileData.image} alt="userimage" />
                        <div><strong>Full Name: </strong>{profileData.firstName + " " + profileData.lastName}</div>
                        <div><strong>Age: </strong>{profileData.age}</div>
                        <div><strong>gender: </strong>{profileData.gender}</div>
                        <div><strong>Email: </strong>{profileData.email}</div>
                        <div><strong>Phone: </strong>{profileData.phone}</div><br></br>
                        <div><strong>Company Name: </strong>{profileData.company.name}</div>
                        <div><strong>Post: </strong>{profileData.company.title}</div>
                        <div><strong>Department: </strong>{profileData.company.department}</div>
                        <div><strong>University: </strong>{profileData.university}</div>

                    </div>
                ) :
                    (
                        <div>
                            <h1 >You are not Log in</h1>
                            <button onClick={() => navigate("/")}>Go Back</button>
                        </div>
                    )
            }
        </div>
    )
}

export default Profile