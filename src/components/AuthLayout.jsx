import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loading from '../Loading'

function Protected({children, authentication = true}) {

    const authStatus = (state) => state.auth.status
    
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const auth = useSelector(authStatus)

    useEffect(()=> {
        if(auth === null || !auth) {
            navigate('/login')
        }
        else if(!authentication && authStatus !== authentication) {
            navigate('/')
        }
        setLoader(false)
    }, [authStatus, authentication, navigate])

  return (
    loader ? <Loading />  : <>{children}</>
  )
}

export default Protected
