import './label.estilos.css'

export function Label({ children, htmlFor }) {
// ou function Label(props) { e usar props.children
  return (
    <label htmlFor={htmlFor} className='label'>
      {children}
    </label>
  )
}
