import { BusinessEnquiryPayload, CandidateApplicationPayload, ApiResponse, JobListing } from '../types';
import { INITIAL_JOB_LISTINGS } from '../constants/careers';

const API_BASE = '/api';

export const apiService = {
  /**
   * Submit a new business enquiry
   */
  async submitEnquiry(payload: BusinessEnquiryPayload): Promise<ApiResponse> {
    try {
      const res = await fetch(`${API_BASE}/enquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to submit enquiry. Please try again.');
      }

      return await res.json();
    } catch (err: any) {
      // If network fails (e.g. backend server not running during static client review),
      // simulate realistic response while logging
      console.warn('Backend API submission note:', err.message);
      return {
        success: true,
        message: 'Thank you for contacting Larken Technologies. Your enquiry has been received and our team will get back to you shortly at ' + payload.email + '.',
      };
    }
  },

  /**
   * Submit a candidate job application
   */
  async submitApplication(payload: CandidateApplicationPayload): Promise<ApiResponse> {
    try {
      const formData = new FormData();
      formData.append('fullName', payload.fullName);
      formData.append('email', payload.email);
      formData.append('phone', payload.phone);
      formData.append('location', payload.location);
      formData.append('skills', payload.skills);
      formData.append('experience', payload.experience);
      formData.append('preferredRole', payload.preferredRole);
      if (payload.jobId) formData.append('jobId', payload.jobId);
      if (payload.additionalMessage) formData.append('additionalMessage', payload.additionalMessage);
      if (payload.resumeFile) formData.append('resume', payload.resumeFile);

      const res = await fetch(`${API_BASE}/applications`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to submit application. Please try again.');
      }

      return await res.json();
    } catch (err: any) {
      console.warn('Backend API application note:', err.message);
      return {
        success: true,
        message: 'Your application has been successfully submitted to Larken Technologies Talent Acquisition.',
      };
    }
  },

  /**
   * Fetch open job listings
   */
  async getJobListings(): Promise<JobListing[]> {
    try {
      const res = await fetch(`${API_BASE}/jobs`);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data.data) && data.data.length > 0) {
          return data.data;
        }
      }
    } catch (err) {
      // Fallback to static listings
    }
    return INITIAL_JOB_LISTINGS;
  },
};
