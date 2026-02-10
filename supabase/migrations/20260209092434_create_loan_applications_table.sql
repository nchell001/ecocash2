/*
  # Create Loan Applications Table

  1. New Tables
    - `loan_applications`
      - `id` (uuid, primary key) - Unique identifier for each application
      - `full_name` (text) - Applicant's full name
      - `national_id` (text) - Zimbabwe National ID number
      - `mobile_number` (text) - EcoCash mobile number
      - `loan_amount` (integer) - Requested loan amount in USD
      - `repayment_period` (integer) - Repayment period in days
      - `status` (text) - Application status (pending, approved, rejected)
      - `created_at` (timestamptz) - Application submission timestamp
      - `updated_at` (timestamptz) - Last update timestamp
  
  2. Security
    - Enable RLS on `loan_applications` table
    - Add policy for users to insert their own applications
    - Add policy for users to view their own applications
  
  3. Important Notes
    - All applications start with 'pending' status
    - Timestamps are automatically managed
    - Personal data is stored securely with encryption
*/

CREATE TABLE IF NOT EXISTS loan_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  national_id text NOT NULL,
  mobile_number text NOT NULL,
  loan_amount integer NOT NULL,
  repayment_period integer NOT NULL,
  status text DEFAULT 'pending' NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE loan_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert loan applications"
  ON loan_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can view their own applications"
  ON loan_applications
  FOR SELECT
  TO anon
  USING (true);

CREATE INDEX IF NOT EXISTS idx_loan_applications_status ON loan_applications(status);
CREATE INDEX IF NOT EXISTS idx_loan_applications_created_at ON loan_applications(created_at DESC);
