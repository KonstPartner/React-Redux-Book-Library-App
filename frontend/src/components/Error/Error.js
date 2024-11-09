import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { clearError, selectError } from '../../redux/slices/errorSlice'

const Error = () => {
  const dispatch = useDispatch()
  const errorMsg = useSelector(selectError)

  useEffect(() => {
    if (errorMsg) {
      toast.info(errorMsg)
      dispatch(clearError())
    }
  }, [errorMsg, dispatch])

  return <ToastContainer position="top-right" autoClose={2000} />
}

export default Error
