'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './Plantillas.module.css';

interface Template {
  id: string;
  name: string;
  subject: string;
  body: string;
}

const AVAILABLE_VARIABLES = [
  { label: 'Nombre del Cliente', value: '{{client_name}}' },
  { label: 'Balance', value: '{{balance}}' },
  { label: 'Mes', value: '{{month}}' },
];

export default function Plantillas() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [templateName, setTemplateName] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);

  // Initialize editor content
  useEffect(() => {
    if (editorRef.current && !editorRef.current.innerHTML) {
      editorRef.current.innerHTML = '<p><br></p>';
    }
  }, []);

  // Update editor when template changes
  useEffect(() => {
    if (selectedTemplate && editorRef.current) {
      setTemplateName(selectedTemplate.name);
      setSubject(selectedTemplate.subject);
      setBody(selectedTemplate.body);
      editorRef.current.innerHTML = selectedTemplate.body || '<p><br></p>';
    } else {
      setTemplateName('');
      setSubject('');
      setBody('');
      if (editorRef.current) {
        editorRef.current.innerHTML = '<p><br></p>';
      }
    }
  }, [selectedTemplate]);

  const handleEditorChange = () => {
    if (editorRef.current) {
      setBody(editorRef.current.innerHTML);
    }
  };

  const insertVariable = (variable: string) => {
    if (editorRef.current) {
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        range.deleteContents();
        const textNode = document.createTextNode(variable);
        range.insertNode(textNode);
        range.setStartAfter(textNode);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
      } else {
        // If no selection, append at the end
        const textNode = document.createTextNode(variable);
        editorRef.current.appendChild(textNode);
      }
      handleEditorChange();
      editorRef.current.focus();
    }
  };

  const handleFormat = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    handleEditorChange();
    if (editorRef.current) {
      editorRef.current.focus();
    }
  };

  const handleSave = () => {
    if (!templateName.trim()) {
      alert('Por favor ingresa un nombre para la plantilla');
      return;
    }

    const templateData: Template = {
      id: selectedTemplate?.id || Date.now().toString(),
      name: templateName,
      subject: subject,
      body: body,
    };

    if (selectedTemplate) {
      // Update existing template
      setTemplates(templates.map(t => t.id === selectedTemplate.id ? templateData : t));
    } else {
      // Create new template
      setTemplates([...templates, templateData]);
    }

    setIsEditing(false);
    setSelectedTemplate(templateData);
  };

  const handleNewTemplate = () => {
    setSelectedTemplate(null);
    setTemplateName('');
    setSubject('');
    setBody('');
    if (editorRef.current) {
      editorRef.current.innerHTML = '<p><br></p>';
    }
    setIsEditing(true);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    if (selectedTemplate && confirm('¿Estás seguro de eliminar esta plantilla?')) {
      setTemplates(templates.filter(t => t.id !== selectedTemplate.id));
      setSelectedTemplate(null);
      setTemplateName('');
      setSubject('');
      setBody('');
      if (editorRef.current) {
        editorRef.current.innerHTML = '<p><br></p>';
      }
    }
  };

  return (
    <div className={styles.plantillas}>
      <div className={styles.plantillasContainer}>
        {/* Templates List Sidebar */}
        <div className={styles.templatesSidebar}>
          <div className={styles.sidebarHeader}>
            <h3 className={styles.sidebarTitle}>Plantillas</h3>
            <button className={styles.newTemplateBtn} onClick={handleNewTemplate}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Nueva
            </button>
          </div>
          <div className={styles.templatesList}>
            {templates.length === 0 ? (
              <div className={styles.emptyState}>
                <p>No hay plantillas guardadas</p>
                <p className={styles.emptyStateHint}>Crea una nueva plantilla para comenzar</p>
              </div>
            ) : (
              templates.map((template) => (
                <div
                  key={template.id}
                  className={`${styles.templateItem} ${selectedTemplate?.id === template.id ? styles.active : ''}`}
                  onClick={() => setSelectedTemplate(template)}
                >
                  <div className={styles.templateName}>{template.name}</div>
                  <div className={styles.templateSubject}>{template.subject || 'Sin asunto'}</div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Editor Area */}
        <div className={styles.editorArea}>
          <div className={styles.editorHeader}>
            <div className={styles.editorTitle}>
              {selectedTemplate ? 'Editar Plantilla' : 'Nueva Plantilla'}
            </div>
            {selectedTemplate && !isEditing && (
              <div className={styles.editorActions}>
                <button className={styles.actionBtn} onClick={handleEdit}>
                  Editar
                </button>
                <button className={styles.actionBtn} onClick={handleDelete}>
                  Eliminar
                </button>
              </div>
            )}
          </div>

          <div className={styles.formContainer}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Nombre de la Plantilla</label>
              <input
                type="text"
                className={styles.input}
                value={templateName}
                onChange={(e) => setTemplateName(e.target.value)}
                placeholder="Ej: Recordatorio de Pago"
                disabled={selectedTemplate && !isEditing}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Asunto</label>
              <input
                type="text"
                className={styles.input}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Ej: Recordatorio de pago pendiente"
                disabled={selectedTemplate && !isEditing}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Cuerpo del Mensaje</label>
              <div className={styles.editorToolbar}>
                <button
                  type="button"
                  className={styles.toolbarBtn}
                  onClick={() => handleFormat('bold')}
                  title="Negrita"
                  disabled={selectedTemplate && !isEditing}
                >
                  <strong>B</strong>
                </button>
                <button
                  type="button"
                  className={styles.toolbarBtn}
                  onClick={() => handleFormat('italic')}
                  title="Cursiva"
                  disabled={selectedTemplate && !isEditing}
                >
                  <em>I</em>
                </button>
                <button
                  type="button"
                  className={styles.toolbarBtn}
                  onClick={() => handleFormat('underline')}
                  title="Subrayado"
                  disabled={selectedTemplate && !isEditing}
                >
                  <u>U</u>
                </button>
                <div className={styles.toolbarSeparator} />
                <button
                  type="button"
                  className={styles.toolbarBtn}
                  onClick={() => handleFormat('justifyLeft')}
                  title="Alinear Izquierda"
                  disabled={selectedTemplate && !isEditing}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="21" y1="10" x2="7" y2="10" />
                    <line x1="21" y1="6" x2="3" y2="6" />
                    <line x1="21" y1="14" x2="3" y2="14" />
                    <line x1="21" y1="18" x2="7" y2="18" />
                  </svg>
                </button>
                <button
                  type="button"
                  className={styles.toolbarBtn}
                  onClick={() => handleFormat('justifyCenter')}
                  title="Centrar"
                  disabled={selectedTemplate && !isEditing}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="10" x2="6" y2="10" />
                    <line x1="21" y1="6" x2="3" y2="6" />
                    <line x1="21" y1="14" x2="3" y2="14" />
                    <line x1="18" y1="18" x2="6" y2="18" />
                  </svg>
                </button>
                <button
                  type="button"
                  className={styles.toolbarBtn}
                  onClick={() => handleFormat('insertUnorderedList')}
                  title="Lista"
                  disabled={selectedTemplate && !isEditing}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="8" y1="6" x2="21" y2="6" />
                    <line x1="8" y1="12" x2="21" y2="12" />
                    <line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" />
                    <line x1="3" y1="12" x2="3.01" y2="12" />
                    <line x1="3" y1="18" x2="3.01" y2="18" />
                  </svg>
                </button>
              </div>
              <div
                ref={editorRef}
                className={styles.richTextEditor}
                contentEditable={!selectedTemplate || isEditing}
                onInput={handleEditorChange}
                onBlur={handleEditorChange}
                suppressContentEditableWarning
              />
            </div>

            {(isEditing || !selectedTemplate) && (
              <div className={styles.formActions}>
                <button className={styles.saveBtn} onClick={handleSave}>
                  Guardar Plantilla
                </button>
                {selectedTemplate && (
                  <button
                    className={styles.cancelBtn}
                    onClick={() => {
                      setIsEditing(false);
                      setSelectedTemplate(templates.find(t => t.id === selectedTemplate.id) || null);
                    }}
                  >
                    Cancelar
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Variables Sidebar */}
        <div className={styles.variablesSidebar}>
          <div className={styles.sidebarHeader}>
            <h3 className={styles.sidebarTitle}>Variables</h3>
          </div>
          <div className={styles.variablesList}>
            <p className={styles.variablesHint}>
              Haz clic en una variable para insertarla en el editor
            </p>
            {AVAILABLE_VARIABLES.map((variable) => (
              <button
                key={variable.value}
                className={styles.variableChip}
                onClick={() => insertVariable(variable.value)}
                disabled={selectedTemplate && !isEditing}
                title={variable.label}
              >
                {variable.value}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

