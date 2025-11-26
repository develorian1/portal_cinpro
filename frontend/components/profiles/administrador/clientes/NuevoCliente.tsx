'use client';

import { useState, useEffect } from 'react';
import styles from './NuevoCliente.module.css';

interface FormData {
  legalName: string;
  rfc: string;
  taxSystem: string;
  zipCode: string;
  clientGroup: string;
  assignedAccountant: string;
  broughtBy: string;
  agreedCommission: string;
  serviceName: string;
  billingAmount: string;
  frequency: 'MONTHLY' | 'ANNUAL';
  firstBillDate: string;
  commissionable: boolean;
  userSearchEmail: string;
  foundUser: { id: string; name: string; email: string } | null;
  createNewUser: boolean;
  newUserName: string;
  newUserEmail: string;
  newUserPassword: string;
}

const TAX_SYSTEMS = [
  '601 - General de Ley Personas Morales',
  '603 - Personas Morales con Fines no Lucrativos',
  '605 - Sueldos y Salarios e Ingresos Asimilados a Salarios',
  '606 - Arrendamiento',
  '608 - Demás ingresos',
  '610 - Residentes en el Extranjero sin Establecimiento Permanente en México',
  '611 - Ingresos por Dividendos (socios y accionistas)',
  '612 - Personas Físicas con Actividades Empresariales y Profesionales',
  '614 - Ingresos por intereses',
  '615 - Régimen de los ingresos por obtención de premios',
  '616 - Sin obligaciones fiscales',
  '620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos',
  '621 - Incorporación Fiscal',
  '622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras',
  '623 - Opcional para Grupos de Sociedades',
  '624 - Coordinados',
  '625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas',
  '626 - Régimen Simplificado de Confianza',
];

const CLIENT_GROUPS = ['Medical', 'Construction'];
const STAFF_MEMBERS = [
  { id: '1', name: 'Carlos Ramírez', baseCommission: '5' },
  { id: '2', name: 'Ana Martínez', baseCommission: '6' },
  { id: '3', name: 'Luis García', baseCommission: '5.5' },
];
const ACCOUNTANTS = [
  { id: '1', name: 'María López', group: 'Medical' },
  { id: '2', name: 'Pedro Sánchez', group: 'Construction' },
  { id: '3', name: 'Laura Fernández', group: 'Medical' },
];

// Helper Components
interface FormFieldProps {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

const FormField = ({ label, required, error, children }: FormFieldProps) => (
  <div className={styles.formField}>
    <label>
      {label} {required && <span className={styles.required}>*</span>}
    </label>
    {children}
    {error && <span className={styles.errorText}>{error}</span>}
  </div>
);

interface InputProps {
  name: keyof FormData;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  maxLength?: number;
  step?: string;
  min?: string;
  disabled?: boolean;
}

const Input = ({ name, value, onChange, error, type = 'text', ...props }: InputProps) => (
  <input
    type={type}
    value={value}
    onChange={e => onChange(e.target.value)}
    className={error ? styles.inputError : ''}
    {...props}
  />
);

interface SelectProps {
  name: keyof FormData;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  disabled?: boolean;
}

const Select = ({ value, onChange, error, options, placeholder, disabled }: SelectProps) => (
  <select
    value={value}
    onChange={e => onChange(e.target.value)}
    disabled={disabled}
    className={error ? styles.inputError : ''}
  >
    <option value="">{placeholder || 'Seleccionar'}</option>
    {options.map(opt => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </select>
);

export default function NuevoCliente() {
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<FormData>({
    legalName: '',
    rfc: '',
    taxSystem: '',
    zipCode: '',
    clientGroup: '',
    assignedAccountant: '',
    broughtBy: '',
    agreedCommission: '',
    serviceName: '',
    billingAmount: '',
    frequency: 'MONTHLY',
    firstBillDate: '',
    commissionable: true,
    userSearchEmail: '',
    foundUser: null,
    createNewUser: false,
    newUserName: '',
    newUserEmail: '',
    newUserPassword: '',
  });

  const updateField = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validateRFC = (rfc: string) => /^[A-ZÑ&]{3,4}\d{6}[A-V1-9][A-Z\d]{2}$/.test(rfc.toUpperCase());

  useEffect(() => {
    if (formData.broughtBy && !formData.agreedCommission) {
      const staff = STAFF_MEMBERS.find(s => s.id === formData.broughtBy);
      if (staff) updateField('agreedCommission', staff.baseCommission);
    }
  }, [formData.broughtBy]);

  const filteredAccountants = formData.clientGroup
    ? ACCOUNTANTS.filter(a => a.group === formData.clientGroup)
    : ACCOUNTANTS;

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.legalName.trim()) newErrors.legalName = 'La Razón Social es requerida';
      if (!formData.rfc.trim()) {
        newErrors.rfc = 'El RFC es requerido';
      } else if (!validateRFC(formData.rfc)) {
        newErrors.rfc = 'Formato de RFC inválido';
      }
      if (!formData.taxSystem) newErrors.taxSystem = 'El Régimen Fiscal es requerido';
      if (!formData.zipCode.trim()) {
        newErrors.zipCode = 'El Código Postal es requerido';
      } else if (!/^\d{5}$/.test(formData.zipCode)) {
        newErrors.zipCode = 'El Código Postal debe tener 5 dígitos';
      }
    } else if (step === 2) {
      if (!formData.clientGroup) newErrors.clientGroup = 'El Grupo de Cliente es requerido';
      if (!formData.assignedAccountant) newErrors.assignedAccountant = 'El Contador Asignado es requerido';
      if (!formData.broughtBy) newErrors.broughtBy = 'El Representante de Ventas es requerido';
      if (!formData.agreedCommission) newErrors.agreedCommission = 'La Comisión Acordada es requerida';
    } else if (step === 3) {
      if (!formData.serviceName.trim()) newErrors.serviceName = 'El Nombre del Servicio es requerido';
      if (!formData.billingAmount) newErrors.billingAmount = 'El Monto de Facturación es requerido';
      if (!formData.firstBillDate) newErrors.firstBillDate = 'La Fecha de Primera Factura es requerida';
    } else if (step === 4) {
      if (!formData.createNewUser && !formData.foundUser && !formData.userSearchEmail.trim()) {
        newErrors.userSearchEmail = 'Por favor busque un usuario o cree uno nuevo';
      }
      if (formData.createNewUser) {
        if (!formData.newUserName.trim()) newErrors.newUserName = 'El Nombre es requerido';
        if (!formData.newUserEmail.trim()) {
          newErrors.newUserEmail = 'El Correo Electrónico es requerido';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.newUserEmail)) {
          newErrors.newUserEmail = 'Formato de correo electrónico inválido';
        }
        if (!formData.newUserPassword.trim()) newErrors.newUserPassword = 'La Contraseña es requerida';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => validateStep(currentStep) && setCurrentStep(prev => Math.min(prev + 1, 4));
  const handleBack = () => setCurrentStep(prev => Math.max(prev - 1, 1));
  const handleSubmit = () => {
    if (!validateStep(4)) return;
    console.log('Submitting form data:', formData);
    alert('¡Cliente creado exitosamente!');
  };
  const handleSearchUser = () => {
    // TODO: Implement API call to search user by email
    const found = formData.userSearchEmail === 'juan.perez@example.com'
      ? { id: '1', name: 'Juan Perez', email: 'juan.perez@example.com' }
      : null;
    updateField('foundUser', found);
    updateField('createNewUser', false);
  };
  const handleLinkUser = () => {
    console.log('Linking user:', formData.foundUser);
    alert('¡Usuario vinculado exitosamente!');
  };

  const renderStep1 = () => (
    <div className={styles.stepContent}>
      <h3 className={styles.stepTitle}>Identidad Fiscal</h3>
      <div className={styles.formGrid}>
        <FormField label="Razón Social" required error={errors.legalName}>
          <Input name="legalName" value={formData.legalName} onChange={v => updateField('legalName', v)} error={errors.legalName} />
        </FormField>
        <FormField label="RFC" required error={errors.rfc}>
          <Input 
            name="rfc" 
            value={formData.rfc} 
            onChange={v => updateField('rfc', v.toUpperCase())} 
            error={errors.rfc} 
            maxLength={13}
          />
        </FormField>
        <FormField label="Régimen Fiscal" required error={errors.taxSystem}>
          <Select
            value={formData.taxSystem}
            onChange={v => updateField('taxSystem', v)}
            error={errors.taxSystem}
            options={TAX_SYSTEMS.map(s => ({ value: s, label: s }))}
            placeholder="Seleccionar Régimen Fiscal"
          />
        </FormField>
        <FormField label="Código Postal" required error={errors.zipCode}>
          <Input
            name="zipCode"
            value={formData.zipCode}
            onChange={v => updateField('zipCode', v.replace(/\D/g, '').slice(0, 5))}
            error={errors.zipCode}
            maxLength={5}
          />
        </FormField>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className={styles.stepContent}>
      <h3 className={styles.stepTitle}>Jerarquía y Ventas</h3>
      <div className={styles.formGrid}>
        <FormField label="Grupo de Cliente" required error={errors.clientGroup}>
          <Select
            value={formData.clientGroup}
            onChange={v => {
              updateField('clientGroup', v);
              updateField('assignedAccountant', '');
            }}
            error={errors.clientGroup}
            options={CLIENT_GROUPS.map(g => ({ value: g, label: g }))}
            placeholder="Seleccionar Grupo"
          />
        </FormField>
        <FormField label="Contador Asignado" required error={errors.assignedAccountant}>
          <Select
            value={formData.assignedAccountant}
            onChange={v => updateField('assignedAccountant', v)}
            error={errors.assignedAccountant}
            disabled={!formData.clientGroup}
            options={filteredAccountants.map(a => ({ value: a.id, label: a.name }))}
            placeholder={formData.clientGroup ? 'Seleccionar Contador' : 'Seleccione el Grupo primero'}
          />
        </FormField>
        <FormField label="Traído Por (Representante de Ventas)" required error={errors.broughtBy}>
          <Select
            value={formData.broughtBy}
            onChange={v => updateField('broughtBy', v)}
            error={errors.broughtBy}
            options={STAFF_MEMBERS.map(s => ({ value: s.id, label: s.name }))}
            placeholder="Seleccionar Representante de Ventas"
          />
        </FormField>
        <FormField label="Comisión Acordada %" required error={errors.agreedCommission}>
          <Input
            name="agreedCommission"
            type="number"
            value={formData.agreedCommission}
            onChange={v => updateField('agreedCommission', v)}
            error={errors.agreedCommission}
            step="0.1"
            min="0"
            max="100"
          />
        </FormField>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className={styles.stepContent}>
      <h3 className={styles.stepTitle}>Ingresos</h3>
      <div className={styles.formGrid}>
        <FormField label="Nombre del Servicio" required error={errors.serviceName}>
          <Input
            name="serviceName"
            value={formData.serviceName}
            onChange={v => updateField('serviceName', v)}
            error={errors.serviceName}
            placeholder="ej., Retainer Mensual"
          />
        </FormField>
        <FormField label="Monto de Facturación" required error={errors.billingAmount}>
          <Input
            name="billingAmount"
            type="number"
            value={formData.billingAmount}
            onChange={v => updateField('billingAmount', v)}
            error={errors.billingAmount}
            step="0.01"
            min="0"
          />
        </FormField>
        <FormField label="Frecuencia" required>
          <Select
            value={formData.frequency}
            onChange={v => updateField('frequency', v)}
            options={[
              { value: 'MONTHLY', label: 'Mensual' },
              { value: 'ANNUAL', label: 'Anual' },
            ]}
          />
        </FormField>
        <FormField label="Fecha de Primera Factura" required error={errors.firstBillDate}>
          <Input
            name="firstBillDate"
            type="date"
            value={formData.firstBillDate}
            onChange={v => updateField('firstBillDate', v)}
            error={errors.firstBillDate}
          />
        </FormField>
        <div className={styles.formField}>
          <label className={styles.toggleLabel}>
            <input
              type="checkbox"
              checked={formData.commissionable}
              onChange={e => updateField('commissionable', e.target.checked)}
              className={styles.toggleSwitch}
            />
            <span>Comisionable</span>
          </label>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className={styles.stepContent}>
      <h3 className={styles.stepTitle}>Acceso de Usuario</h3>
      <div className={styles.formGrid}>
        {!formData.createNewUser ? (
          <>
            <div className={styles.formField}>
              <label>Buscar Usuario Existente</label>
              <div className={styles.searchContainer}>
                <input
                  type="email"
                  value={formData.userSearchEmail}
                  onChange={e => {
                    updateField('userSearchEmail', e.target.value);
                    updateField('foundUser', null);
                  }}
                  placeholder="Ingrese dirección de correo electrónico"
                  className={`${styles.searchInput} ${errors.userSearchEmail ? styles.inputError : ''}`}
                />
                <button type="button" onClick={handleSearchUser} className={styles.searchButton}>
                  Buscar
                </button>
              </div>
              {errors.userSearchEmail && <span className={styles.errorText}>{errors.userSearchEmail}</span>}
            </div>
            {formData.foundUser && (
              <div className={styles.foundUserCard}>
                <div className={styles.foundUserInfo}>
                  <strong>{formData.foundUser.name}</strong> encontrado.
                </div>
                <button type="button" onClick={handleLinkUser} className={styles.linkButton}>
                  ¿Vincular a esta nueva entidad?
                </button>
              </div>
            )}
            <div className={styles.divider}><span>O</span></div>
            <button
              type="button"
              onClick={() => {
                updateField('createNewUser', true);
                updateField('foundUser', null);
              }}
              className={styles.createUserButton}
            >
              Crear Nuevo Usuario
            </button>
          </>
        ) : (
          <>
            <FormField label="Nombre" required error={errors.newUserName}>
              <Input name="newUserName" value={formData.newUserName} onChange={v => updateField('newUserName', v)} error={errors.newUserName} />
            </FormField>
            <FormField label="Correo Electrónico" required error={errors.newUserEmail}>
              <Input name="newUserEmail" type="email" value={formData.newUserEmail} onChange={v => updateField('newUserEmail', v)} error={errors.newUserEmail} />
            </FormField>
            <FormField label="Contraseña Temporal" required error={errors.newUserPassword}>
              <Input name="newUserPassword" type="password" value={formData.newUserPassword} onChange={v => updateField('newUserPassword', v)} error={errors.newUserPassword} />
            </FormField>
            <button
              type="button"
              onClick={() => {
                updateField('createNewUser', false);
                updateField('newUserName', '');
                updateField('newUserEmail', '');
                updateField('newUserPassword', '');
              }}
              className={styles.cancelButton}
            >
              Cancelar
            </button>
          </>
        )}
      </div>
    </div>
  );

  const renderStepContent = () => {
    const steps = [renderStep1, renderStep2, renderStep3, renderStep4];
    return steps[currentStep - 1]?.() || null;
  };

  return (
    <div className={styles.wizard}>
      <div className={styles.wizardContent}>
        {renderStepContent()}
        <div className={styles.wizardActions}>
          {currentStep > 1 && (
            <button type="button" onClick={handleBack} className={styles.backButton}>
              Atrás
            </button>
          )}
          {currentStep < 4 ? (
            <button type="button" onClick={handleNext} className={styles.nextButton}>
              Siguiente
            </button>
          ) : (
            <button type="button" onClick={handleSubmit} className={styles.submitButton}>
              Crear Cliente
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

