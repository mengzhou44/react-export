import styles from './invoice.module.css'
function Invoice({ name, price1, price2, receiptId }) {
     const today = new Date();
     return  <div className={styles['invoice-box']}>
             <table cellPadding="0" cellSpacing="0">
                <tr className={styles.top}>
                   <td colSpan="2">
                      <table>
                         <tr>
                            <td className={styles.title}>
                                <img
                                  src="https://i2.wp.com/cleverlogos.co/wp-content/uploads/2018/05/reciepthound_1.jpg?fit=800%2C600&ssl=1"
                                />
                               </td>
                            <td>
                               Datum: ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr className={styles.information}>
                   <td colSpan="2">
                      <table>
                         <tr>
                            <td>
                               Customer name: ${name}
                            </td>
                            <td>
                               Receipt number: ${receiptId}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr className={styles.heading}>
                   <td>Bought items:</td>
                   <td>Price</td>
                </tr>
                <tr className={styles.item}>
                   <td>First item:</td>
                   <td>$${price1}</td>
                </tr>
                <tr className={styles.item}>
                   <td>Second item:</td>
                   <td>$${price2}</td>
                </tr>
             </table>
             <br />
             <h1 className={styles['justify-center']}>Total price: ${price1+ price2}</h1>
          </div>
}

export default Invoice;
