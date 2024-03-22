import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';
import imgProfile from './assets/avatar.jpeg';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image={ imgProfile } />

        <Title title="Jidapa Siribut (Mook)">
          <h3>ตำแหน่ง : นักศึกษา</h3>
        </Title>

        <Title title="Contact">
     
          <p>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("2003/03/14").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +66988973089
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email : jidapasiribut@gmail.com</p>
          <p>58/286 ซอยเอกชัย24 แขวงบางขุนเทียน เขตจอมทอง กรุงเทพมหานคร 10150</p>
        </Title>
    
        <Title title="Education">
          <p>2561-2563</p>
          <p>โรงเรียนวัดราชโอรส</p> 
          <p>GPA: 3.31</p>
          <p>2564-ปัจจุบัน</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา คณะวิทยาศาสตร์เเละเทคโนโลยี</p> 
          <p>GPA: 3.74</p>
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>ชื่อ: จิดาภา ศิริบุตร ชื่อเล่น: มุก</p>
          <p>อายุ: 21ปี</p>
          <p>สัญชาติ: ไทย</p>
          <p>ส่วนสูง: 155 กิโลกรัม</p>
          <p>น้ำหนัก: 50 กิโลกรัม</p>
        </Title>

        <Title title="Work Experience">
          <p>จัดทำโปรเจคสื่อโซเชียลมีเดียรูปแบบ VR เรื่องเทศกาลโยนบัว</p>
        </Title>

        <Title title="Skills">
          <p>Figma</p>
          <p>Adobe Illustrator</p>
          <p>Android Studio</p>
          <p>WordPrees</p>
        </Title>
      </div>
    </main>
  )
}

export default App
