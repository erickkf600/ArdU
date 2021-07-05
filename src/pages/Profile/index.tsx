import React, { useState,useEffect } from 'react';
import placeholder from './../../assets/user-placeholder.png'
import { useForm } from "react-hook-form"
import * as actions from './index.action'

function Profile() {
    const user: any = localStorage.getItem('user')
    const userData = JSON.parse(user)
    const [edit_mode, toggle] = useState(false);

    const {register, handleSubmit, setValue } = useForm<any>();

    useEffect(() => {
        if (userData) {
          setValue('first_name', userData.first_name );
          setValue('last_name', userData.last_name );
          setValue('email', userData.email );
          setValue('id', userData.id );
        }
      }, [userData]);



    return (
        <section className="container profile">
            <div className="profile__card">
                <img src={userData ? userData.avatar : placeholder} alt="user placeholder" title="ArdU user placeholder" className="profile__card-img"/>

                <div className="profile__card-info">
                    <p className="profile__card-info-name">{userData.first_name} {userData.last_name}</p>
                    <p className="profile__card-info-email">{userData.email}</p>
                </div>

                <div className="profile__card-actions">
                    <button className="profile__card-actions-button" onClick={() => toggle(true)}>Editar <i className="icon-edit"></i></button>
                    <button className="profile__card-actions-button profile__card-actions-button--logout" onClick={() => actions.logOut()}>Sair <i className="icon-sign-out"></i></button>
                </div>

                {edit_mode ? 
                    <div className="profile__card-edit">
                        <button className="icon-cancel-circle profile__card-edit-close"  onClick={() => toggle(false)}></button>
                        
                        <form onSubmit={handleSubmit(actions.editiUser)}>
                            <span className="profile__card-edit-row">
                                <div className='login__card-input-control'>
                                    <input name="first_name" type="text" placeholder="Seu nome"  ref={register}/>
                                    <input name="id" type="hidden" ref={register}/>
                                </div>
                                <div className='login__card-input-control'>
                                    <input name="last_name" type="text" placeholder="Seu nome"  ref={register}/>
                                </div>
                            </span>

                            <div className='login__card-input-control'>
                                <input name="email" type="email" placeholder="Seu email"  ref={register}/>
                            </div>

                            <button className="profile__card-edit-button">Editar</button>
                        </form>
                    </div>
                : null }
            </div>
        </section>
    )
}
export default Profile