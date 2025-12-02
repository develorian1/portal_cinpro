import type { InvoiceData, InvoiceConcept } from './types';

/**
 * Parses a CFDI 4.0 XML string and extracts invoice data
 */
export function parseCFDIXML(xmlString: string): InvoiceData {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

  // Check for parsing errors
  const parserError = xmlDoc.querySelector('parsererror');
  if (parserError) {
    throw new Error('Failed to parse XML: ' + parserError.textContent);
  }

  // Get the root Comprobante element
  const comprobante = xmlDoc.querySelector('cfdi\\:Comprobante, Comprobante');
  if (!comprobante) {
    throw new Error('Invalid CFDI XML: Comprobante element not found');
  }

  // Extract basic invoice information
  const fecha = comprobante.getAttribute('Fecha') || '';
  const folio = comprobante.getAttribute('Folio') || '';
  const serie = comprobante.getAttribute('Serie') || undefined;
  const subtotal = parseFloat(comprobante.getAttribute('SubTotal') || '0');
  const total = parseFloat(comprobante.getAttribute('Total') || '0');
  const moneda = comprobante.getAttribute('Moneda') || 'MXN';
  const formaPago = comprobante.getAttribute('FormaPago') || '';
  const metodoPago = comprobante.getAttribute('MetodoPago') || '';

  // Extract Emisor information
  const emisor = comprobante.querySelector('cfdi\\:Emisor, Emisor');
  const emisorNombre = emisor?.getAttribute('Nombre') || '';
  const emisorRfc = emisor?.getAttribute('Rfc') || '';
  const emisorRegimen = emisor?.getAttribute('RegimenFiscal') || '';

  // Extract Receptor information
  const receptor = comprobante.querySelector('cfdi\\:Receptor, Receptor');
  const receptorNombre = receptor?.getAttribute('Nombre') || '';
  const receptorRfc = receptor?.getAttribute('Rfc') || '';
  const receptorUsoCFDI = receptor?.getAttribute('UsoCFDI') || '';

  // Extract Conceptos
  const conceptos: InvoiceConcept[] = [];
  const conceptosElement = comprobante.querySelector('cfdi\\:Conceptos, Conceptos');
  if (conceptosElement) {
    const conceptoElements = conceptosElement.querySelectorAll('cfdi\\:Concepto, Concepto');
    conceptoElements.forEach((concepto, index) => {
      const cantidad = parseFloat(concepto.getAttribute('Cantidad') || '0');
      const unidad = concepto.getAttribute('Unidad') || concepto.getAttribute('ClaveUnidad') || '';
      const descripcion = concepto.getAttribute('Descripcion') || '';
      const valorUnitario = parseFloat(concepto.getAttribute('ValorUnitario') || '0');
      const importe = parseFloat(concepto.getAttribute('Importe') || '0');

      conceptos.push({
        id: (index + 1).toString(),
        cantidad,
        unidad,
        descripcion,
        precioUnitario: valorUnitario,
        importe,
      });
    });
  }

  // Calculate IVA from total and subtotal
  const iva = total - subtotal;

  // Format payment method descriptions
  const formaPagoDesc = getFormaPagoDescription(formaPago);
  const metodoPagoDesc = getMetodoPagoDescription(metodoPago);
  const regimenFiscalDesc = getRegimenFiscalDescription(emisorRegimen);
  const usoCFDIDesc = getUsoCFDIDescription(receptorUsoCFDI);

  return {
    emisor: {
      nombre: emisorNombre,
      rfc: emisorRfc,
      regimenFiscal: regimenFiscalDesc,
    },
    receptor: {
      nombre: receptorNombre,
      rfc: receptorRfc,
      usoCFDI: usoCFDIDesc,
    },
    fecha,
    folio,
    serie,
    formaPago: formaPagoDesc,
    metodoPago: metodoPagoDesc,
    moneda,
    conceptos,
    subtotal,
    iva,
    total,
  };
}

/**
 * Helper function to get payment method description
 */
function getFormaPagoDescription(codigo: string): string {
  const formasPago: Record<string, string> = {
    '01': '01 - Efectivo',
    '03': '03 - Transferencia electrónica de fondos',
    '04': '04 - Tarjeta de crédito',
    '28': '28 - Tarjeta de débito',
  };
  return formasPago[codigo] || `${codigo} - Forma de pago`;
}

/**
 * Helper function to get payment method description
 */
function getMetodoPagoDescription(codigo: string): string {
  const metodosPago: Record<string, string> = {
    'PUE': 'PUE - Pago en una sola exhibición',
    'PPD': 'PPD - Pago en parcialidades o diferido',
  };
  return metodosPago[codigo] || codigo;
}

/**
 * Helper function to get fiscal regime description
 */
function getRegimenFiscalDescription(codigo: string): string {
  const regimenes: Record<string, string> = {
    '601': '601 - General de Ley Personas Morales',
    '603': '603 - Personas Morales con Fines no Lucrativos',
    '605': '605 - Sueldos y Salarios e Ingresos Asimilados a Salarios',
  };
  return regimenes[codigo] || codigo;
}

/**
 * Helper function to get CFDI usage description
 */
function getUsoCFDIDescription(codigo: string): string {
  const usos: Record<string, string> = {
    'G01': 'G01 - Adquisición de mercancías',
    'G03': 'G03 - Gastos en general',
  };
  return usos[codigo] || codigo;
}

