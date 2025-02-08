/*
  # Create gestures table and authentication setup

  1. New Tables
    - `gestures`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `gesture` (text)
      - `timestamp` (timestamptz)
      - `created_at` (timestamptz)
  
  2. Security
    - Enable RLS on `gestures` table
    - Add policies for authenticated users to:
      - Insert their own gestures
      - Read their own gestures
*/

CREATE TABLE IF NOT EXISTS gestures (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  gesture text NOT NULL,
  timestamp timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE gestures ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert their own gestures"
  ON gestures
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read their own gestures"
  ON gestures
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);