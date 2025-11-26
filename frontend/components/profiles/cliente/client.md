# Client Profile UI Specification (Role ID: 5)

**Integration with CINPRO Design System**

---

## Overview

| Attribute | Value |
|-----------|-------|
| Role | Client User (Business Owner) |
| Scope | Limited to entities linked via `client_user_access` |
| Target Device | Mobile (Primary) & Desktop |
| Design Philosophy | Clean "Banking App" aesthetic, minimal jargon |

---

## 1. Global Shell & Navigation

**Database Context:** `client_user_access` (Determines which companies this user can see)

### Layout Architecture

```
┌─────────────────────────────────────────────────┐
│                    Topbar (64px)                │
│  [Entity Selector] [Notifications] [Profile]   │
├──────────┬──────────────────────────────────────┤
│          │                                      │
│ Sidebar  │         Main Content Area            │
│ (280px)  │         (max-width: 1600px)          │
│          │         (padding: 24px)              │
│          │                                      │
└──────────┴──────────────────────────────────────┘
```

### Top Bar (Context Switcher)

#### Entity Selector Dropdown

**Component:** `EntitySelectorDropdown.tsx`

```tsx
interface EntityOption {
  id: string;
  label: string;        // e.g., "Dr. Juan Clinic"
  entityType: string;   // e.g., "medical", "restaurant"
  icon: React.ReactNode;
}
```

**Styling (CSS Variables):**
```css
.entitySelector {
  padding: 10px 16px;
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-md);
  background: var(--surface-primary);
  font-family: var(--font-body);
  font-size: 0.875rem;
  min-width: 200px;
}

.entitySelector:hover {
  border-color: var(--azure);
  background: var(--bg-secondary);
}
```

#### Notifications Bell

**Trigger types:**
- Tax alerts (status: `--warning` or `--danger`)
- Message replies (status: `--azure`)

**Badge styling:**
```css
.notificationBadge {
  background: var(--danger);
  color: var(--white);
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  padding: 2px 6px;
}
```

#### Profile Avatar

Standard avatar component with dropdown menu for logout and profile access.

---

### Bottom Bar (Mobile) / Left Sidebar (Desktop)

| Index | Icon | Label | Navigation ID |
|-------|------|-------|---------------|
| 1 | Home | Home (Dashboard) | `client-home` |
| 2 | CreditCard | Pagos a CINPRO | `client-pagos` |
| 3 | BarChart | Mis Contabilidades | `client-contabilidades` |
| 4 | MessageCircle | Comunicacion | `client-comunicacion` |
| 5 | Settings | Configuracion | `client-configuracion` |

**Mobile Bottom Bar CSS:**
```css
.bottomBar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: var(--surface-primary);
  border-top: 1px solid var(--border-primary);
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: var(--shadow-md);
}

.bottomBarItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  color: var(--text-secondary);
  font-size: 0.75rem;
}

.bottomBarItem.active {
  color: var(--azure);
}
```

---

## 2. Section: Home (Dashboard)

**Navigation ID:** `client-home`  
**Focus:** The "Pulse" of the business and urgent alerts

### Canvas Region: Business Pulse (Cards)

#### Card Container Structure

```css
.pulseCardsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}

.pulseCard {
  background: var(--surface-primary);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-md);
  padding: 24px;
  box-shadow: var(--shadow-sm);
  transition: all 0.2s;
}

.pulseCard:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--border-hover);
}
```

#### Card 1: Estimated Tax Due

| Property | Implementation |
|----------|----------------|
| Data Source | Current month's CFDIs: `(Income - Expense) * Tax Rate` |
| Display | "Est. Taxes: $12,500 MXN" |
| Disclaimer | "Estimation only" in `--text-muted` |

```css
.taxAmount {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
}

.taxDisclaimer {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-top: 8px;
}
```

#### Card 2: Pending Fees

| Property | Implementation |
|----------|----------------|
| Data Source | Sum of unpaid `service_contracts` |
| Action | "Pay Now" button linking to `client-pagos` |

```css
.btnPayNow {
  padding: 10px 16px;
  background: var(--azure);
  color: var(--white);
  border: none;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btnPayNow:hover {
  background: var(--azure-dark);
}
```

#### Card 3: Missing Info Alert

| Property | Implementation |
|----------|----------------|
| Alert Text | "Upload October Bank Statement" |
| Visual Style | Warning banner with `--warning` accent |
| Action | "Upload" button |

```css
.alertCard {
  border-left: 4px solid var(--warning);
  background: rgba(245, 158, 11, 0.08);
}

.alertText {
  color: var(--text-primary);
  font-weight: 500;
}
```

---

### Canvas Region: Recent Timeline

**Data:** Vertical timeline of events

```css
.timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.timelineItem {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px 0;
  border-left: 2px solid var(--border-primary);
  margin-left: 12px;
  padding-left: 24px;
  position: relative;
}

.timelineItem::before {
  content: '';
  position: absolute;
  left: -6px;
  top: 20px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--azure);
  border: 2px solid var(--surface-primary);
}

.timelineIcon {
  width: 20px;
  height: 20px;
  color: var(--text-tertiary);
}

.timelineContent {
  flex: 1;
}

.timelineTitle {
  font-size: 0.875rem;
  color: var(--text-primary);
  font-weight: 500;
}

.timelineDate {
  font-size: 0.75rem;
  color: var(--text-muted);
}
```

**Event Types:**

| Event | Icon | Example |
|-------|------|---------|
| Tax Declaration Filed | Download | "Tax Declaration Filed (Oct)" |
| Payment Verified | CheckCircle | "Payment Verified by Admin" |
| New Message | MessageCircle | "New Message from Accountant" |

---

## 3. Section: Pagos a CINPRO (Fee Payment)

**Navigation ID:** `client-pagos`  
**Focus:** Uploading proof of payment for the Firm's accounting services  
**Database Context:** `cfdis` (where Issuer = Firm) and `client_payment_proofs`

### Step 1: Select Invoices (The "Cart")

#### Header

```css
.sectionHeader {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 24px;
}
```

Text: "Pending Invoices from CINPRO"

#### Invoice List Table

```css
.invoiceTable {
  width: 100%;
  border-collapse: collapse;
}

.invoiceRow {
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid var(--border-primary);
  gap: 16px;
}

.invoiceRow:hover {
  background: var(--bg-secondary);
}

.invoiceCheckbox {
  width: 20px;
  height: 20px;
  accent-color: var(--azure);
}

.invoiceService {
  flex: 2;
  font-weight: 500;
  color: var(--text-primary);
}

.invoiceMonth {
  flex: 1;
  color: var(--text-secondary);
}

.invoiceAmount {
  flex: 1;
  text-align: right;
  font-weight: 600;
  color: var(--text-primary);
}
```

#### Sticky Footer

```css
.stickyFooter {
  position: sticky;
  bottom: 0;
  background: var(--surface-primary);
  border-top: 1px solid var(--border-primary);
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--shadow-md);
}

.totalAmount {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
}

.btnReportPayment {
  padding: 10px 24px;
  background: var(--azure);
  color: var(--white);
  border: none;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
}
```

---

### Step 2: Upload Proof (The Modal)

```css
.modal {
  background: var(--surface-elevated);
  border-radius: var(--radius-lg);
  padding: 32px;
  box-shadow: var(--shadow-xl);
  max-width: 480px;
  width: 90%;
}

.modalHeader {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.modalInstruction {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 24px;
}
```

#### Form Fields

| Field | Type | Maps To |
|-------|------|---------|
| File | Image/PDF Dropzone | `file_url` |
| Date | Date Picker | `payment_date` |
| Reference | Text Input (Optional) | `reference` |

```css
.dropzone {
  border: 2px dashed var(--border-secondary);
  border-radius: var(--radius-md);
  padding: 32px;
  text-align: center;
  background: var(--bg-secondary);
  cursor: pointer;
  transition: all 0.2s;
}

.dropzone:hover {
  border-color: var(--azure);
  background: rgba(24, 128, 234, 0.04);
}

.formField {
  margin-bottom: 16px;
}

.fieldLabel {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.fieldInput {
  width: 100%;
  padding: 10px 16px;
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-family: var(--font-body);
}

.fieldInput:focus {
  outline: none;
  border-color: var(--azure);
  box-shadow: 0 0 0 3px rgba(24, 128, 234, 0.1);
}
```

#### Backend Action

On "Submit Proof":
1. Creates `client_payment_proofs` record
2. Creates multiple `client_payment_allocations` linked to selected invoices
3. Feedback: "Proof Sent! Status: Pending Verification."

```css
.successFeedback {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid var(--success);
  border-radius: var(--radius-md);
  color: var(--success);
  font-weight: 500;
}
```

---

## 4. Section: Mis Contabilidades (Accounting Status)

**Navigation ID:** `client-contabilidades`  
**Focus:** Transparency on the work the firm is doing

### Tab Navigation

```css
.tabNav {
  display: flex;
  gap: 0;
  border-bottom: 1px solid var(--border-primary);
  margin-bottom: 24px;
}

.tabButton {
  padding: 12px 24px;
  background: transparent;
  border: none;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
}

.tabButton:hover {
  color: var(--text-primary);
}

.tabButton.active {
  color: var(--azure);
  border-bottom-color: var(--azure);
}
```

---

### Tab A: Monthly Progress

**Visual:** Stepper / Progress Bar for the current month

```css
.stepper {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 32px;
}

.stepper::before {
  content: '';
  position: absolute;
  top: 16px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--border-primary);
}

.stepperItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: relative;
  z-index: 1;
}

.stepperCircle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-tertiary);
  border: 2px solid var(--border-primary);
  color: var(--text-muted);
  font-size: 0.875rem;
  font-weight: 600;
}

.stepperCircle.complete {
  background: var(--success);
  border-color: var(--success);
  color: var(--white);
}

.stepperCircle.active {
  background: var(--azure);
  border-color: var(--azure);
  color: var(--white);
}

.stepperLabel {
  font-size: 0.75rem;
  color: var(--text-secondary);
  text-align: center;
  max-width: 80px;
}
```

**Steps:**

| Step | Label | Status Indicator |
|------|-------|------------------|
| 1 | Docs Received | Green if Statements uploaded |
| 2 | Processing | Percentage of Bank Lines reconciled |
| 3 | Calculated | Draft Taxes ready |
| 4 | Filed | Acuse received from SAT |

**Detail Text:**
```css
.progressDetail {
  font-size: 0.875rem;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  padding: 12px 16px;
  border-radius: var(--radius-md);
}
```

Example: "Your accountant is currently reconciling week 3 of October."

---

### Tab B: Financial Overview

#### Income vs Expenses Chart

Use Recharts `BarChart` component with design tokens:

```tsx
const chartColors = {
  income: '#10b981',    // var(--success)
  expenses: '#ef4444',  // var(--danger)
};

<BarChart>
  <Bar dataKey="income" fill={chartColors.income} radius={[4, 4, 0, 0]} />
  <Bar dataKey="expenses" fill={chartColors.expenses} radius={[4, 4, 0, 0]} />
</BarChart>
```

#### Top Expenses List

```css
.expensesList {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.expenseItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
}

.expenseCategory {
  font-size: 0.875rem;
  color: var(--text-primary);
}

.expenseAmount {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
}
```

#### Download Center

```css
.downloadGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.downloadCard {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: var(--surface-primary);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.2s;
}

.downloadCard:hover {
  border-color: var(--azure);
  box-shadow: var(--shadow-sm);
}

.downloadIcon {
  width: 24px;
  height: 24px;
  color: var(--azure);
}

.downloadLabel {
  font-size: 0.875rem;
  color: var(--text-primary);
}
```

**Available Files:**
- Estado de Resultados (PDF)
- Acuse SAT (PDF)
- Opinion de Cumplimiento (PDF)

---

## 5. Section: Comunicacion (Support Hub)

**Navigation ID:** `client-comunicacion`  
**Focus:** Direct line to the assigned Accountant/Chief

### Canvas Region: Chat Interface

```css
.chatContainer {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px - 48px);
  background: var(--surface-primary);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.chatHeader {
  padding: 16px 24px;
  border-bottom: 1px solid var(--border-primary);
  background: var(--bg-secondary);
}

.chatHeaderTitle {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.chatMessages {
  flex: 1;
  padding: 24px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.chatInput {
  padding: 16px 24px;
  border-top: 1px solid var(--border-primary);
  background: var(--surface-primary);
}
```

#### Message Bubble Types

**Text Message (Standard):**
```css
.messageBubble {
  max-width: 70%;
  padding: 12px 16px;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
}

.messageBubble.sent {
  background: var(--azure);
  color: var(--white);
  margin-left: auto;
  border-bottom-right-radius: 4px;
}

.messageBubble.received {
  background: var(--bg-tertiary);
  color: var(--text-primary);
  border-bottom-left-radius: 4px;
}
```

**Request Message (Action Required):**
```css
.requestBubble {
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid var(--warning);
  padding: 16px;
  border-radius: var(--radius-md);
}

.requestText {
  font-size: 0.875rem;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.requestActions {
  display: flex;
  gap: 8px;
}

.requestBtn {
  padding: 8px 16px;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
}

.requestBtnPrimary {
  background: var(--azure);
  color: var(--white);
  border: none;
}

.requestBtnSecondary {
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border-primary);
}
```

Example: "Please clarify this expense: $500 at Starbucks."
- Client Actions: "Business Meeting" / "Personal"

**System Message:**
```css
.systemMessage {
  text-align: center;
  padding: 8px 16px;
  background: var(--bg-secondary);
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  color: var(--text-tertiary);
}
```

Example: "Tax Declaration Filed"

---

### Canvas Region: AI Agent

```css
.aiAgentButton {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--azure);
  color: var(--white);
  border: none;
  box-shadow: var(--shadow-lg);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.aiAgentButton:hover {
  background: var(--azure-dark);
  transform: scale(1.05);
}

/* Mobile: adjust position above bottom bar */
@media (max-width: 768px) {
  .aiAgentButton {
    bottom: 88px;
  }
}
```

**Capabilities:**
- "How much did I spend on Gas last month?"
- "Send me my Tax ID (Constancia)."
- "Upload a receipt photo."

---

## 6. Section: Configuracion (Settings & Docs)

**Navigation ID:** `client-configuracion`  
**Focus:** Keeping legal data up to date

### Tab A: Digital Certificates (SAT)

```css
.certificateCard {
  background: var(--surface-primary);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-md);
  padding: 24px;
  margin-bottom: 16px;
}

.certificateHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.certificateTitle {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.certificateStatus {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 500;
}

.certificateStatus.active {
  background: rgba(16, 185, 129, 0.1);
  color: var(--success);
}

.certificateStatus.expiring {
  background: rgba(245, 158, 11, 0.1);
  color: var(--warning);
}

.certificateStatus.expired {
  background: rgba(239, 68, 68, 0.1);
  color: var(--danger);
}

.certificateDetail {
  font-size: 0.875rem;
  color: var(--text-secondary);
}
```

**Display Items:**
- **e.firma:** Status (Active), Expiry Date
- **CSD (Sells):** Status (Active), Expiry Date

**Alert Banner (< 30 days to expiry):**
```css
.expiryAlert {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid var(--danger);
  border-radius: var(--radius-md);
  margin-bottom: 16px;
}

.expiryAlertText {
  font-size: 0.875rem;
  color: var(--danger);
  font-weight: 500;
}
```

**Update Certificate Form:**
- Upload .cer file
- Upload .key file
- Password field (encrypted on send)

---

### Tab B: Entity Documents (Expediente)

```css
.documentList {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.documentItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: var(--surface-primary);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-md);
}

.documentInfo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.documentIcon {
  width: 24px;
  height: 24px;
  color: var(--azure);
}

.documentName {
  font-size: 0.875rem;
  color: var(--text-primary);
  font-weight: 500;
}

.documentDate {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.documentActions {
  display: flex;
  gap: 8px;
}
```

**Document List:**
- Acta Constitutiva
- Comprobante de Domicilio
- ID of Legal Rep

**Action:** "Upload New Version"
- Backend: Updates `entity_documents` table

---

### Tab C: User Profile

```css
.profileSection {
  background: var(--surface-primary);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-md);
  padding: 24px;
}

.profileField {
  margin-bottom: 24px;
}

.profileField:last-child {
  margin-bottom: 0;
}

.profileLabel {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 8px;
}

.profileValue {
  font-size: 1rem;
  color: var(--text-primary);
}

.securitySection {
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid var(--border-primary);
}

.changePasswordBtn {
  padding: 10px 16px;
  background: transparent;
  color: var(--azure);
  border: 1px solid var(--azure);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.changePasswordBtn:hover {
  background: rgba(24, 128, 234, 0.08);
}
```

**Fields:**
- Name
- Email
- Phone Number

**Security:**
- Change Password

---

## Navigation Configuration

Add to `frontend/config/navigation.tsx`:

```tsx
// Client Profile (Role ID: 5) Navigation Items
{
  id: 'client-home',
  label: 'Home',
  icon: <HomeIcon />,
  href: '/client/dashboard',
},
{
  id: 'client-pagos',
  label: 'Pagos a CINPRO',
  icon: <CreditCardIcon />,
  href: '/client/pagos',
},
{
  id: 'client-contabilidades',
  label: 'Mis Contabilidades',
  icon: <BarChartIcon />,
  href: '/client/contabilidades',
  children: [
    { id: 'client-contabilidades-progress', label: 'Monthly Progress' },
    { id: 'client-contabilidades-overview', label: 'Financial Overview' },
  ],
},
{
  id: 'client-comunicacion',
  label: 'Comunicacion',
  icon: <MessageCircleIcon />,
  href: '/client/comunicacion',
},
{
  id: 'client-configuracion',
  label: 'Configuracion',
  icon: <SettingsIcon />,
  href: '/client/configuracion',
  children: [
    { id: 'client-config-certificates', label: 'Digital Certificates' },
    { id: 'client-config-documents', label: 'Entity Documents' },
    { id: 'client-config-profile', label: 'User Profile' },
  ],
},
```

---

## Topbar Integration

In `Topbar.tsx`, add entity selector for client pages:

```tsx
// Check if we're on a client page
const isClientPage = activeItem?.startsWith('client-');

// In JSX
<div className={styles.topbarCenter}>
  {isClientPage && <EntitySelectorDropdown />}
  {/* Existing dropdowns */}
</div>
```

---

## Responsive Breakpoints

```css
/* Mobile First */
@media (max-width: 768px) {
  .sidebar { display: none; }
  .bottomBar { display: flex; }
  .mainContent { padding: 16px; }
  .pulseCardsGrid { grid-template-columns: 1fr; }
}

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) {
  .sidebar { width: var(--sidebar-collapsed); }
  .mainContent { margin-left: var(--sidebar-collapsed); }
}

/* Desktop */
@media (min-width: 1025px) {
  .sidebar { width: var(--sidebar-width); }
  .bottomBar { display: none; }
  .mainContent { margin-left: var(--sidebar-width); }
}
```

---

## Accessibility Checklist

- [ ] All interactive elements have `aria-label` or visible text
- [ ] Dropdown triggers include `aria-expanded` and `aria-haspopup`
- [ ] Form fields have associated `<label>` elements
- [ ] Color contrast meets WCAG AA standards (4.5:1 for text)
- [ ] Focus states visible on all interactive elements
- [ ] Keyboard navigation works for all features
- [ ] Status indicators have text alternatives (not color alone)

---

## Component Export

Add to `frontend/components/shared/index.ts`:

```tsx
export { default as EntitySelectorDropdown } from './EntitySelectorDropdown';
export { default as ClientPulseCard } from './ClientPulseCard';
export { default as ClientTimeline } from './ClientTimeline';
export { default as InvoiceSelector } from './InvoiceSelector';
export { default as PaymentProofUploader } from './PaymentProofUploader';
export { default as AccountingProgress } from './AccountingProgress';
export { default as ChatInterface } from './ChatInterface';
export { default as CertificateManager } from './CertificateManager';
export { default as DocumentManager } from './DocumentManager';
```