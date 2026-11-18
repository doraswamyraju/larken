export type ServiceInterest = 'IT Consulting' | 'IT Staffing' | 'General Enquiry';

export interface BusinessEnquiryPayload {
  fullName: string;
  email: string;
  phone: string;
  serviceInterest: ServiceInterest;
  message: string;
}

export interface CandidateApplicationPayload {
  jobId?: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  skills: string;
  experience: string;
  preferredRole: string;
  additionalMessage?: string;
  resumeFile?: File;
}

export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  employmentType: 'Full-time' | 'Contract' | 'C2H' | 'Remote' | 'Hybrid';
  description: string;
  requirements: string[];
  responsibilities: string[];
  status: 'Open' | 'Closed' | 'Draft';
  createdAt: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
}
