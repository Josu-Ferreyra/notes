import './Notification.css'

export function Notification ({ props }) {
  const { notification, setNotification } = props
  const hideNotification = () => {
    setTimeout(() => {
      setNotification({ message: '', error: false })
    }, 4000)
  }
  const handleNotification = () => {
    if (notification.message === '') {
      return <div className='notification hidden' />
    }
    if (notification.error) {
      hideNotification()
      return <div className='notification error'><p>{notification.message}</p></div>
    } else {
      hideNotification()
      return <div className='notification'><p>{notification.message}</p></div>
    }
  }
  return (
    <div>
      {
        handleNotification()
      }
    </div>
  )
}
