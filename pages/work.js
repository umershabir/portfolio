import { useSelector } from 'react-redux'

export default function Work() {
  const theme = useSelector((state) => state.themeChangingReducer.value)
  return (
    <div style={{ background: '#fff', color: theme }}>
      <h1>work</h1>
    </div>
  )
}
