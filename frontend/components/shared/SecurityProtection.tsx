'use client';

import { useEffect } from 'react';

/**
 * SecurityProtection component
 * 
 * Disables right-click context menu and developer tools shortcuts
 * across all pages of the application.
 * 
 * This component should be included in the root layout to ensure
 * protection is applied site-wide.
 */
export default function SecurityProtection() {
  useEffect(() => {
    // Prevent right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Prevent developer tools shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable F12 (Developer Tools)
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+Shift+I (Developer Tools)
      // Disable Ctrl+Shift+J (Console)
      // Disable Ctrl+Shift+C (Inspect Element)
      if (
        e.ctrlKey &&
        e.shiftKey &&
        (e.key === 'I' || e.key === 'J' || e.key === 'C')
      ) {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+U (View Source)
      // Disable Ctrl+S (Save Page - can be used to view source)
      if (e.ctrlKey && (e.key === 'U' || e.key === 'S')) {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+Shift+K (Console in Firefox)
      if (e.ctrlKey && e.shiftKey && e.key === 'K') {
        e.preventDefault();
        return false;
      }
    };

    // Prevent text selection (optional - can be removed if not needed)
    const handleSelectStart = (e: Event) => {
      // Allow selection in input fields and textareas
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return true;
      }
      e.preventDefault();
      return false;
    };

    // Prevent drag and drop (optional - can be removed if not needed)
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('dragstart', handleDragStart);

    // Cleanup on unmount
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  // This component doesn't render anything
  return null;
}

