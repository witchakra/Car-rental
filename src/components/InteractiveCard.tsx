'use client'
import styles from './productcard.module.css'
import Image from 'next/image'

export default function InteractiveCard( {children,contentName} : {children:React.ReactNode,contentName:string}) {

    function onCarselected(){
        alert("You select " + contentName)
    }

    function onCardMouseAction(event:React.SyntheticEvent){
        if(event.type == 'mouseover'){
            event.currentTarget.classList.remove('shadow-lg')
            event.currentTarget.classList.add('shadow-2xl')
        }
        else{
            event.currentTarget.classList.remove('shadow-2xl')
            event.currentTarget.classList.add('shadow-lg')
        }
    }

    return (
        <div className= 'w-full h-[300px] rounded-lg shadow-lg' 
        onMouseOver = {(e) => onCardMouseAction(e)}
        onMouseOut = {(e) => onCardMouseAction(e)}>
            {children}
        </div>
    );
}