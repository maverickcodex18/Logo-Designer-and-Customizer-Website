import { proxy } from 'valtio'

const logoState=proxy({
    homePage:true,
    uploadPage:false,
    gradientType:'solid',
    bgColor:'0xffd700',
    logoImg:'apps-plus.svg',
    logoSize:'70%',
    bgRound:'0%'
})

export default logoState
