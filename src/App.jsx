import { useSnapshot } from 'valtio'
import './App.css'
import Home from './pages/Home'
import LogoSelector from './pages/LogoSelector'
import LogoUploader from './pages/LogoUploader'
import logoState from './state/logoState'

function App() {
  const state=useSnapshot(logoState);
  if(state.homePage) return<Home></Home>
  else if(state.uploadPage) return <LogoUploader></LogoUploader>
  else return <LogoSelector></LogoSelector>;
}

export default App
