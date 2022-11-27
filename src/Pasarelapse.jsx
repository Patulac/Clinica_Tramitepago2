import React from 'react'
import './Estilos.css'

function Pasarelapse (){
    return (
        <div>
            <div className='Contenido'>
                <div>
                    <img src="./pse.png"></img>
                    
                </div>
                <label>*Entidad Financiera </label>
                <br />
                <input type="text" required= "required"></input>
                <br />
                <label>*Tipo Persona </label>
                <br />
                <input type="text" required= "required"></input>
                <br />
                <label>*Nombres y Apellidos </label>
                <br />
                <input type="text" required= "required"></input>
                <br />
                <label>*Celular </label>
                <br />
                <input type="number" required= "required"></input>
                <br />
                <label>*Direccion Titular </label>
                <br />
                <input type="text" required= "required"></input>
                <br />
                <label>*Tipo de identificación </label>
                <select name="" id="" required= "required">
                    <option value="CC">CC</option>
                    <option value="CE">CE</option>
                </select>
                 <br />
                <label >*Número de identificación </label>
                <br />
                <input type="text" required= "required"></input>
                <br />
                <label type="mail">*Correo electrónico </label>
                <input id="mail" type="email" required= "required"/>
                <p>
                    Resumen de pagos
                 </p>
                 <hr />
                 <table className='tabla'>
                 <tr className='title'>
                              <th>Resumen de Pagos</th>
                              <th colspan="10">Valor</th>
                         </tr>
                         <tr>
                              <td>Pago de cita médica</td>
                              <td>$3.700</td>
                              <tr>
                              </tr>

                             </tr>
                             </table>
                   

                <a href="#">Realizar Pago</a>
            </div>

        </div>
    )
}

export default Pasarelapse