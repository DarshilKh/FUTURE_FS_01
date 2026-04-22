// =============================================
// API Configuration
// =============================================

// Backend URL - Change this based on environment
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

export const API_ENDPOINTS = {
  contact: `${API_BASE_URL}/api/contact`,
  health: `${API_BASE_URL}/api/contact/health`,
};

/**
 * Submit contact form to backend
 * @param {Object} formData - { name, email, subject, message }
 * @returns {Promise<Object>} - Response from backend
 */
export async function submitContactForm(formData) {
  const response = await fetch(API_ENDPOINTS.contact, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (!response.ok) {
    // Throw error with backend message
    const error = new Error(data.message || 'Failed to send message');
    error.status = response.status;
    error.fieldErrors = data.fieldErrors || [];
    throw error;
  }

  return data;
}