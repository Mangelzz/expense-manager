const Error = ({children, type}) => {
  return (
    <div className={`alerta ${type}`}>
        {children}
    </div>
  )
}

export default Error