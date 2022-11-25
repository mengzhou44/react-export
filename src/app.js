
import reactdomServer from 'react-dom/server'

import Invoice from './documents/invoice'
import  pdf from 'html-pdf'


export default function App() {
     async function exportPDF() {
        const htmlContent =  reactdomServer.renderToString( 
                       <Invoice 
                          id='invoice' 
                          name='invocie123' 
                          price1={24} 
                          price2={35} 
                          receiptId={4671} 
                          />)
 
          
     }

     var options = { format: 'Letter' };

    pdf.create(html, options).toFile('./invoices.pdf', function(err, res) {
       if (err) return console.log(err);
       console.log(res); // { filename: '/app/businesscard.pdf' }
    });

     return <div>
          <h1>Demo the export PDF file</h1>
     
          <button onClick={()=> exportPDF()}>export</button>
     </div>
}

 