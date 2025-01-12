
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Home/Header';
import HomePage from './Home/Homepage';
import Playingnow,{PlayingnowProps} from './ComponentLinks/Playingnow';
import Popular,{MoviepopularProps} from './ComponentLinks/Moviepopular';
import TopRate ,{TopProps} from './ComponentLinks/Top';

import Upcomming,{UpcommingProps}from './ComponentLinks/Upcomming';

export default function App() {
     return (
          <>
               <BrowserRouter>
                    <Routes>
                         <Route index element={<HomePage />} />
                         
                         <Route to='/header' element={<Header />} />
                         <Route path='/home' element={<HomePage />} />
                         
                         <Route path='/now-playing' element={<Playingnow />} />
                         <Route path='/*' element={<PlayingnowProps />} />
                         
                         <Route path='/top-rated' element={<TopRate />} />
                         <Route path="/*" element={<TopProps />} />
                         
                         <Route path="popular" element={<Popular />} />
                         <Route path='/*' element={<MoviepopularProps />} />
                         
                         <Route path="/up-comming" element={<Upcomming />} />
                         <Route path='/*' element={<UpcommingProps />} />
                    </Routes>
               </BrowserRouter>
          </>
     );

}