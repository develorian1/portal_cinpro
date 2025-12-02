import { NextResponse } from 'next/server';
import {
  addManualProof,
  addNotification,
  attachInvoicesToBankLine,
  enqueueReportJob,
  getWorkspaceSnapshot,
  updateBankTransactions,
} from '@/data/accountantWorkspace';

export async function GET() {
  const snapshot = getWorkspaceSnapshot();
  return NextResponse.json(snapshot);
}

export async function PATCH(request: Request) {
  const payload = await request.json();

  switch (payload.action) {
    case 'transactions:update': {
      if (!payload.clientId || !payload.transactions) {
        return NextResponse.json(
          { error: 'clientId and transactions are required' },
          { status: 400 }
        );
      }
      const transactions = updateBankTransactions(payload.clientId, payload.transactions);
      return NextResponse.json({ transactions });
    }
    case 'reports:enqueue': {
      const { clientId, type, format, range } = payload;
      if (!clientId || !type || !format || !range) {
        return NextResponse.json(
          { error: 'clientId, type, format and range are required' },
          { status: 400 }
        );
      }
      const job = enqueueReportJob(clientId, type, format, range);
      return NextResponse.json({ job });
    }
    case 'notifications:add': {
      if (!payload.notification) {
        return NextResponse.json({ error: 'notification payload required' }, { status: 400 });
      }
      const notification = addNotification(payload.notification);
      return NextResponse.json({ notification });
    }
    case 'reconciliation:attach': {
      const { clientId, bankLineId, invoiceUuids } = payload;
      if (!clientId || !bankLineId || !Array.isArray(invoiceUuids)) {
        return NextResponse.json(
          { error: 'clientId, bankLineId and invoiceUuids are required' },
          { status: 400 }
        );
      }
      attachInvoicesToBankLine(clientId, bankLineId, invoiceUuids);
      return NextResponse.json({ success: true });
    }
    case 'manual-proof:add': {
      const { clientId, bankLineId, fileName } = payload;
      if (!clientId || !bankLineId || !fileName) {
        return NextResponse.json(
          { error: 'clientId, bankLineId and fileName are required' },
          { status: 400 }
        );
      }
      const proof = addManualProof(clientId, { bankLineId, fileName });
      return NextResponse.json({ proof });
    }
    default:
      return NextResponse.json({ error: 'Unsupported action' }, { status: 400 });
  }
}
