export interface InvoiceRequest {
  id: string;
  uuid: string;
  date: string;
  client: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected';
  requestDate: string;
}

export interface InvoiceConcept {
  id: string;
  cantidad: number;
  unidad: string;
  descripcion: string;
  precioUnitario: number;
  importe: number;
  descuento?: number;
}

export interface InvoiceData {
  emisor: {
    nombre: string;
    rfc: string;
    regimenFiscal: string;
  };
  receptor: {
    nombre: string;
    rfc: string;
    usoCFDI: string;
  };
  fecha: string;
  folio: string;
  serie?: string;
  formaPago: string;
  metodoPago: string;
  moneda: string;
  conceptos: InvoiceConcept[];
  subtotal: number;
  iva: number;
  total: number;
}

export interface Filters {
  dateRange: { start: Date | null; end: Date | null };
  client: string;
  status: 'all' | 'pending' | 'approved' | 'rejected';
  search: string;
}



