// XML data loader - imports XML files as text
// This file will be used to load mock XML data for invoices

export const xmlFiles = [
  {
    filename: 'PST160520K55FFSTE899.xml',
    uuid: '12345678-1234-1234-1234-123456789012',
    content: `<?xml version="1.0" encoding="UTF-8"?>
<cfdi:Comprobante xmlns:cfdi="http://www.sat.gob.mx/cfd/4" 
                  Version="4.0" 
                  Fecha="2024-01-15T10:30:00" 
                  Folio="12345" 
                  Serie="A"
                  SubTotal="15000.00" 
                  Moneda="MXN" 
                  Total="17400.00" 
                  TipoDeComprobante="I" 
                  MetodoPago="PUE" 
                  FormaPago="01"
                  LugarExpedicion="65000"
                  UUID="12345678-1234-1234-1234-123456789012">
  <cfdi:Emisor Rfc="EEE010101ABC" Nombre="Empresa Ejemplo S.A. de C.V." RegimenFiscal="601"/>
  <cfdi:Receptor Rfc="CEE010101XYZ" Nombre="Acme Corp S.A. de C.V." UsoCFDI="G03"/>
  <cfdi:Conceptos>
    <cfdi:Concepto ClaveProdServ="84111506" Cantidad="10" ClaveUnidad="H87" Unidad="Pieza" Descripcion="Servicio de consultoría empresarial" ValorUnitario="1500.00" Importe="15000.00">
      <cfdi:Impuestos>
        <cfdi:Traslados>
          <cfdi:Traslado Base="15000.00" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="2400.00"/>
        </cfdi:Traslados>
      </cfdi:Impuestos>
    </cfdi:Concepto>
  </cfdi:Conceptos>
  <cfdi:Impuestos TotalImpuestosTrasladados="2400.00">
    <cfdi:Traslados>
      <cfdi:Traslado Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="2400.00"/>
    </cfdi:Traslados>
  </cfdi:Impuestos>
</cfdi:Comprobante>`,
  },
  {
    filename: 'PST160520K55PP21.xml',
    uuid: '87654321-4321-4321-4321-210987654321',
    content: `<?xml version="1.0" encoding="UTF-8"?>
<cfdi:Comprobante xmlns:cfdi="http://www.sat.gob.mx/cfd/4" 
                  Version="4.0" 
                  Fecha="2024-01-14T14:20:00" 
                  Folio="23456" 
                  Serie="B"
                  SubTotal="25000.00" 
                  Moneda="MXN" 
                  Total="29000.00" 
                  TipoDeComprobante="I" 
                  MetodoPago="PUE" 
                  FormaPago="03"
                  LugarExpedicion="65000"
                  UUID="87654321-4321-4321-4321-210987654321">
  <cfdi:Emisor Rfc="EEE010101ABC" Nombre="Empresa Ejemplo S.A. de C.V." RegimenFiscal="601"/>
  <cfdi:Receptor Rfc="TEC010101TEC" Nombre="Tech Solutions S.A. de C.V." UsoCFDI="G01"/>
  <cfdi:Conceptos>
    <cfdi:Concepto ClaveProdServ="84111506" Cantidad="5" ClaveUnidad="H87" Unidad="Hora" Descripcion="Soporte técnico especializado" ValorUnitario="5000.00" Importe="25000.00">
      <cfdi:Impuestos>
        <cfdi:Traslados>
          <cfdi:Traslado Base="25000.00" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="4000.00"/>
        </cfdi:Traslados>
      </cfdi:Impuestos>
    </cfdi:Concepto>
  </cfdi:Conceptos>
  <cfdi:Impuestos TotalImpuestosTrasladados="4000.00">
    <cfdi:Traslados>
      <cfdi:Traslado Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="4000.00"/>
    </cfdi:Traslados>
  </cfdi:Impuestos>
</cfdi:Comprobante>`,
  },
  {
    filename: 'PST160520K55PP26.xml',
    uuid: '11111111-2222-3333-4444-555555555555',
    content: `<?xml version="1.0" encoding="UTF-8"?>
<cfdi:Comprobante xmlns:cfdi="http://www.sat.gob.mx/cfd/4" 
                  Version="4.0" 
                  Fecha="2024-01-13T09:15:00" 
                  Folio="34567" 
                  Serie="C"
                  SubTotal="18000.00" 
                  Moneda="MXN" 
                  Total="20880.00" 
                  TipoDeComprobante="I" 
                  MetodoPago="PUE" 
                  FormaPago="04"
                  LugarExpedicion="65000"
                  UUID="11111111-2222-3333-4444-555555555555">
  <cfdi:Emisor Rfc="EEE010101ABC" Nombre="Empresa Ejemplo S.A. de C.V." RegimenFiscal="601"/>
  <cfdi:Receptor Rfc="GLO010101GLO" Nombre="Global Industries S.A. de C.V." UsoCFDI="G03"/>
  <cfdi:Conceptos>
    <cfdi:Concepto ClaveProdServ="84111506" Cantidad="20" ClaveUnidad="H87" Unidad="Pieza" Descripcion="Productos de software empresarial" ValorUnitario="900.00" Importe="18000.00">
      <cfdi:Impuestos>
        <cfdi:Traslados>
          <cfdi:Traslado Base="18000.00" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="2880.00"/>
        </cfdi:Traslados>
      </cfdi:Impuestos>
    </cfdi:Concepto>
  </cfdi:Conceptos>
  <cfdi:Impuestos TotalImpuestosTrasladados="2880.00">
    <cfdi:Traslados>
      <cfdi:Traslado Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="2880.00"/>
    </cfdi:Traslados>
  </cfdi:Impuestos>
</cfdi:Comprobante>`,
  },
  {
    filename: 'PST160520K55PP31.xml',
    uuid: '99999999-8888-7777-6666-555555555555',
    content: `<?xml version="1.0" encoding="UTF-8"?>
<cfdi:Comprobante xmlns:cfdi="http://www.sat.gob.mx/cfd/4" 
                  Version="4.0" 
                  Fecha="2024-01-16T11:45:00" 
                  Folio="45678" 
                  Serie="D"
                  SubTotal="12000.00" 
                  Moneda="MXN" 
                  Total="13920.00" 
                  TipoDeComprobante="I" 
                  MetodoPago="PUE" 
                  FormaPago="28"
                  LugarExpedicion="65000"
                  UUID="99999999-8888-7777-6666-555555555555">
  <cfdi:Emisor Rfc="EEE010101ABC" Nombre="Empresa Ejemplo S.A. de C.V." RegimenFiscal="601"/>
  <cfdi:Receptor Rfc="STA010101STA" Nombre="Startup Ventures S.A. de C.V." UsoCFDI="G03"/>
  <cfdi:Conceptos>
    <cfdi:Concepto ClaveProdServ="84111506" Cantidad="8" ClaveUnidad="H87" Unidad="Hora" Descripcion="Servicios de desarrollo web" ValorUnitario="1500.00" Importe="12000.00">
      <cfdi:Impuestos>
        <cfdi:Traslados>
          <cfdi:Traslado Base="12000.00" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="1920.00"/>
        </cfdi:Traslados>
      </cfdi:Impuestos>
    </cfdi:Concepto>
  </cfdi:Conceptos>
  <cfdi:Impuestos TotalImpuestosTrasladados="1920.00">
    <cfdi:Traslados>
      <cfdi:Traslado Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="1920.00"/>
    </cfdi:Traslados>
  </cfdi:Impuestos>
</cfdi:Comprobante>`,
  },
  {
    filename: 'PST160520K55PP34.xml',
    uuid: 'AAAA1111-BBBB-2222-CCCC-333333333333',
    content: `<?xml version="1.0" encoding="UTF-8"?>
<cfdi:Comprobante xmlns:cfdi="http://www.sat.gob.mx/cfd/4" 
                  Version="4.0" 
                  Fecha="2024-01-12T16:30:00" 
                  Folio="56789" 
                  Serie="E"
                  SubTotal="22000.00" 
                  Moneda="MXN" 
                  Total="25520.00" 
                  TipoDeComprobante="I" 
                  MetodoPago="PUE" 
                  FormaPago="03"
                  LugarExpedicion="65000"
                  UUID="AAAA1111-BBBB-2222-CCCC-333333333333">
  <cfdi:Emisor Rfc="EEE010101ABC" Nombre="Empresa Ejemplo S.A. de C.V." RegimenFiscal="601"/>
  <cfdi:Receptor Rfc="INN010101INN" Nombre="Innovación Digital S.A. de C.V." UsoCFDI="G01"/>
  <cfdi:Conceptos>
    <cfdi:Concepto ClaveProdServ="84111506" Cantidad="15" ClaveUnidad="H87" Unidad="Pieza" Descripcion="Licencias de software empresarial" ValorUnitario="1466.67" Importe="22000.00">
      <cfdi:Impuestos>
        <cfdi:Traslados>
          <cfdi:Traslado Base="22000.00" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="3520.00"/>
        </cfdi:Traslados>
      </cfdi:Impuestos>
    </cfdi:Concepto>
  </cfdi:Conceptos>
  <cfdi:Impuestos TotalImpuestosTrasladados="3520.00">
    <cfdi:Traslados>
      <cfdi:Traslado Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="3520.00"/>
    </cfdi:Traslados>
  </cfdi:Impuestos>
</cfdi:Comprobante>`,
  },
  {
    filename: 'PST160520K55PP36.xml',
    uuid: 'DDDD4444-EEEE-5555-FFFF-666666666666',
    content: `<?xml version="1.0" encoding="UTF-8"?>
<cfdi:Comprobante xmlns:cfdi="http://www.sat.gob.mx/cfd/4" 
                  Version="4.0" 
                  Fecha="2024-01-11T13:20:00" 
                  Folio="67890" 
                  Serie="F"
                  SubTotal="30000.00" 
                  Moneda="MXN" 
                  Total="34800.00" 
                  TipoDeComprobante="I" 
                  MetodoPago="PUE" 
                  FormaPago="01"
                  LugarExpedicion="65000"
                  UUID="DDDD4444-EEEE-5555-FFFF-666666666666">
  <cfdi:Emisor Rfc="EEE010101ABC" Nombre="Empresa Ejemplo S.A. de C.V." RegimenFiscal="601"/>
  <cfdi:Receptor Rfc="SER010101SER" Nombre="Servicios Profesionales S.A. de C.V." UsoCFDI="G03"/>
  <cfdi:Conceptos>
    <cfdi:Concepto ClaveProdServ="84111506" Cantidad="12" ClaveUnidad="H87" Unidad="Hora" Descripcion="Consultoría en transformación digital" ValorUnitario="2500.00" Importe="30000.00">
      <cfdi:Impuestos>
        <cfdi:Traslados>
          <cfdi:Traslado Base="30000.00" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="4800.00"/>
        </cfdi:Traslados>
      </cfdi:Impuestos>
    </cfdi:Concepto>
  </cfdi:Conceptos>
  <cfdi:Impuestos TotalImpuestosTrasladados="4800.00">
    <cfdi:Traslados>
      <cfdi:Traslado Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="4800.00"/>
    </cfdi:Traslados>
  </cfdi:Impuestos>
</cfdi:Comprobante>`,
  },
  {
    filename: 'PST160520K55PP42.xml',
    uuid: 'GGGG7777-HHHH-8888-IIII-999999999999',
    content: `<?xml version="1.0" encoding="UTF-8"?>
<cfdi:Comprobante xmlns:cfdi="http://www.sat.gob.mx/cfd/4" 
                  Version="4.0" 
                  Fecha="2024-01-10T08:00:00" 
                  Folio="78901" 
                  Serie="G"
                  SubTotal="14000.00" 
                  Moneda="MXN" 
                  Total="16240.00" 
                  TipoDeComprobante="I" 
                  MetodoPago="PUE" 
                  FormaPago="04"
                  LugarExpedicion="65000"
                  UUID="GGGG7777-HHHH-8888-IIII-999999999999">
  <cfdi:Emisor Rfc="EEE010101ABC" Nombre="Empresa Ejemplo S.A. de C.V." RegimenFiscal="601"/>
  <cfdi:Receptor Rfc="SOL010101SOL" Nombre="Soluciones Integrales S.A. de C.V." UsoCFDI="G01"/>
  <cfdi:Conceptos>
    <cfdi:Concepto ClaveProdServ="84111506" Cantidad="7" ClaveUnidad="H87" Unidad="Hora" Descripcion="Implementación de sistemas ERP" ValorUnitario="2000.00" Importe="14000.00">
      <cfdi:Impuestos>
        <cfdi:Traslados>
          <cfdi:Traslado Base="14000.00" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="2240.00"/>
        </cfdi:Traslados>
      </cfdi:Impuestos>
    </cfdi:Concepto>
  </cfdi:Conceptos>
  <cfdi:Impuestos TotalImpuestosTrasladados="2240.00">
    <cfdi:Traslados>
      <cfdi:Traslado Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="2240.00"/>
    </cfdi:Traslados>
  </cfdi:Impuestos>
</cfdi:Comprobante>`,
  },
  {
    filename: 'PST160520K55FFSTE642.xml',
    uuid: 'JJJJ1010-KKKK-1111-LLLL-222222222222',
    content: `<?xml version="1.0" encoding="UTF-8"?>
<cfdi:Comprobante xmlns:cfdi="http://www.sat.gob.mx/cfd/4" 
                  Version="4.0" 
                  Fecha="2024-01-09T15:10:00" 
                  Folio="89012" 
                  Serie="H"
                  SubTotal="16000.00" 
                  Moneda="MXN" 
                  Total="18560.00" 
                  TipoDeComprobante="I" 
                  MetodoPago="PUE" 
                  FormaPago="28"
                  LugarExpedicion="65000"
                  UUID="JJJJ1010-KKKK-1111-LLLL-222222222222">
  <cfdi:Emisor Rfc="EEE010101ABC" Nombre="Empresa Ejemplo S.A. de C.V." RegimenFiscal="601"/>
  <cfdi:Receptor Rfc="TEC010101TEC" Nombre="Tecnología Avanzada S.A. de C.V." UsoCFDI="G03"/>
  <cfdi:Conceptos>
    <cfdi:Concepto ClaveProdServ="84111506" Cantidad="4" ClaveUnidad="H87" Unidad="Hora" Descripcion="Auditoría de seguridad informática" ValorUnitario="4000.00" Importe="16000.00">
      <cfdi:Impuestos>
        <cfdi:Traslados>
          <cfdi:Traslado Base="16000.00" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="2560.00"/>
        </cfdi:Traslados>
      </cfdi:Impuestos>
    </cfdi:Concepto>
  </cfdi:Conceptos>
  <cfdi:Impuestos TotalImpuestosTrasladados="2560.00">
    <cfdi:Traslados>
      <cfdi:Traslado Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="2560.00"/>
    </cfdi:Traslados>
  </cfdi:Impuestos>
</cfdi:Comprobante>`,
  },
  {
    filename: 'PST160520K55FFSTE681.xml',
    uuid: 'MMMM3333-NNNN-4444-OOOO-555555555555',
    content: `<?xml version="1.0" encoding="UTF-8"?>
<cfdi:Comprobante xmlns:cfdi="http://www.sat.gob.mx/cfd/4" 
                  Version="4.0" 
                  Fecha="2024-01-08T12:00:00" 
                  Folio="90123" 
                  Serie="I"
                  SubTotal="19000.00" 
                  Moneda="MXN" 
                  Total="22040.00" 
                  TipoDeComprobante="I" 
                  MetodoPago="PUE" 
                  FormaPago="03"
                  LugarExpedicion="65000"
                  UUID="MMMM3333-NNNN-4444-OOOO-555555555555">
  <cfdi:Emisor Rfc="EEE010101ABC" Nombre="Empresa Ejemplo S.A. de C.V." RegimenFiscal="601"/>
  <cfdi:Receptor Rfc="CON010101CON" Nombre="Consultoría Estratégica S.A. de C.V." UsoCFDI="G01"/>
  <cfdi:Conceptos>
    <cfdi:Concepto ClaveProdServ="84111506" Cantidad="10" ClaveUnidad="H87" Unidad="Pieza" Descripcion="Servicio de consultoría empresarial" ValorUnitario="1500.00" Importe="15000.00">
      <cfdi:Impuestos>
        <cfdi:Traslados>
          <cfdi:Traslado Base="15000.00" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="2400.00"/>
        </cfdi:Traslados>
      </cfdi:Impuestos>
    </cfdi:Concepto>
    <cfdi:Concepto ClaveProdServ="84111506" Cantidad="5" ClaveUnidad="H87" Unidad="Hora" Descripcion="Soporte técnico especializado" ValorUnitario="800.00" Importe="4000.00">
      <cfdi:Impuestos>
        <cfdi:Traslados>
          <cfdi:Traslado Base="4000.00" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="640.00"/>
        </cfdi:Traslados>
      </cfdi:Impuestos>
    </cfdi:Concepto>
  </cfdi:Conceptos>
  <cfdi:Impuestos TotalImpuestosTrasladados="3040.00">
    <cfdi:Traslados>
      <cfdi:Traslado Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="3040.00"/>
    </cfdi:Traslados>
  </cfdi:Impuestos>
</cfdi:Comprobante>`,
  },
  {
    filename: 'PST160520K55FFSTE725.xml',
    uuid: 'PPPP6666-QQQQ-7777-RRRR-888888888888',
    content: `<?xml version="1.0" encoding="UTF-8"?>
<cfdi:Comprobante xmlns:cfdi="http://www.sat.gob.mx/cfd/4" 
                  Version="4.0" 
                  Fecha="2024-01-07T10:30:00" 
                  Folio="01234" 
                  Serie="J"
                  SubTotal="21000.00" 
                  Moneda="MXN" 
                  Total="24360.00" 
                  TipoDeComprobante="I" 
                  MetodoPago="PUE" 
                  FormaPago="01"
                  LugarExpedicion="65000"
                  UUID="PPPP6666-QQQQ-7777-RRRR-888888888888">
  <cfdi:Emisor Rfc="EEE010101ABC" Nombre="Empresa Ejemplo S.A. de C.V." RegimenFiscal="601"/>
  <cfdi:Receptor Rfc="DES010101DES" Nombre="Desarrollo de Software S.A. de C.V." UsoCFDI="G03"/>
  <cfdi:Conceptos>
    <cfdi:Concepto ClaveProdServ="84111506" Cantidad="6" ClaveUnidad="H87" Unidad="Hora" Descripcion="Desarrollo de aplicación móvil" ValorUnitario="3500.00" Importe="21000.00">
      <cfdi:Impuestos>
        <cfdi:Traslados>
          <cfdi:Traslado Base="21000.00" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="3360.00"/>
        </cfdi:Traslados>
      </cfdi:Impuestos>
    </cfdi:Concepto>
  </cfdi:Conceptos>
  <cfdi:Impuestos TotalImpuestosTrasladados="3360.00">
    <cfdi:Traslados>
      <cfdi:Traslado Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="3360.00"/>
    </cfdi:Traslados>
  </cfdi:Impuestos>
</cfdi:Comprobante>`,
  },
  {
    filename: 'PST160520K55FFSTE812.xml',
    uuid: 'SSSS9999-TTTT-0000-UUUU-111111111111',
    content: `<?xml version="1.0" encoding="UTF-8"?>
<cfdi:Comprobante xmlns:cfdi="http://www.sat.gob.mx/cfd/4" 
                  Version="4.0" 
                  Fecha="2024-01-06T14:15:00" 
                  Folio="12340" 
                  Serie="K"
                  SubTotal="17500.00" 
                  Moneda="MXN" 
                  Total="20300.00" 
                  TipoDeComprobante="I" 
                  MetodoPago="PUE" 
                  FormaPago="04"
                  LugarExpedicion="65000"
                  UUID="SSSS9999-TTTT-0000-UUUU-111111111111">
  <cfdi:Emisor Rfc="EEE010101ABC" Nombre="Empresa Ejemplo S.A. de C.V." RegimenFiscal="601"/>
  <cfdi:Receptor Rfc="MAR010101MAR" Nombre="Marketing Digital S.A. de C.V." UsoCFDI="G01"/>
  <cfdi:Conceptos>
    <cfdi:Concepto ClaveProdServ="84111506" Cantidad="14" ClaveUnidad="H87" Unidad="Pieza" Descripcion="Servicios de marketing digital" ValorUnitario="1250.00" Importe="17500.00">
      <cfdi:Impuestos>
        <cfdi:Traslados>
          <cfdi:Traslado Base="17500.00" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="2800.00"/>
        </cfdi:Traslados>
      </cfdi:Impuestos>
    </cfdi:Concepto>
  </cfdi:Conceptos>
  <cfdi:Impuestos TotalImpuestosTrasladados="2800.00">
    <cfdi:Traslados>
      <cfdi:Traslado Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="2800.00"/>
    </cfdi:Traslados>
  </cfdi:Impuestos>
</cfdi:Comprobante>`,
  },
  {
    filename: 'PST160520K55FFSTE850.xml',
    uuid: 'VVVV2222-WWWW-3333-XXXX-444444444444',
    content: `<?xml version="1.0" encoding="UTF-8"?>
<cfdi:Comprobante xmlns:cfdi="http://www.sat.gob.mx/cfd/4" 
                  Version="4.0" 
                  Fecha="2024-01-05T09:45:00" 
                  Folio="23450" 
                  Serie="L"
                  SubTotal="13500.00" 
                  Moneda="MXN" 
                  Total="15660.00" 
                  TipoDeComprobante="I" 
                  MetodoPago="PUE" 
                  FormaPago="28"
                  LugarExpedicion="65000"
                  UUID="VVVV2222-WWWW-3333-XXXX-444444444444">
  <cfdi:Emisor Rfc="EEE010101ABC" Nombre="Empresa Ejemplo S.A. de C.V." RegimenFiscal="601"/>
  <cfdi:Receptor Rfc="CLO010101CLO" Nombre="Cloud Solutions S.A. de C.V." UsoCFDI="G03"/>
  <cfdi:Conceptos>
    <cfdi:Concepto ClaveProdServ="84111506" Cantidad="9" ClaveUnidad="H87" Unidad="Hora" Descripcion="Migración a servicios en la nube" ValorUnitario="1500.00" Importe="13500.00">
      <cfdi:Impuestos>
        <cfdi:Traslados>
          <cfdi:Traslado Base="13500.00" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="2160.00"/>
        </cfdi:Traslados>
      </cfdi:Impuestos>
    </cfdi:Concepto>
  </cfdi:Conceptos>
  <cfdi:Impuestos TotalImpuestosTrasladados="2160.00">
    <cfdi:Traslados>
      <cfdi:Traslado Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="2160.00"/>
    </cfdi:Traslados>
  </cfdi:Impuestos>
</cfdi:Comprobante>`,
  },
];



