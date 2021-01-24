import React from 'react';
import placeholder from './../../assets/user-placeholder.png'

function Profile() {
    return (
        <section className="container profile">
            <div className="profile__card">
                <img src={placeholder} alt="user placeholder" title="ArdU user placeholder" className="profile__card-img"/>
            </div>
        </section>
    )
}
export default Profile