import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

dotenv.config();

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL || undefined,
  host: process.env.PG_HOST || 'localhost',
  port: parseInt(process.env.PG_PORT || '5432'),
  database: process.env.PG_DATABASE || 'larken_db',
  user: process.env.PG_USER || 'postgres',
  password: process.env.PG_PASSWORD || '',
  ssl: process.env.PG_SSL === 'true' ? { rejectUnauthorized: false } : false,
});

let isConnected = false;

export async function initDatabase() {
  try {
    const client = await pool.connect();
    isConnected = true;
    console.log('✅ PostgreSQL database connected successfully.');

    // Initialize tables per technical brief
    await client.query(`
      CREATE TABLE IF NOT EXISTS admin_users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(150) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        role VARCHAR(50) DEFAULT 'admin',
        status VARCHAR(50) DEFAULT 'active',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS business_enquiries (
        id SERIAL PRIMARY KEY,
        full_name VARCHAR(150) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        service_interest VARCHAR(100) NOT NULL,
        message TEXT,
        status VARCHAR(50) DEFAULT 'new',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS job_listings (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        department VARCHAR(150) NOT NULL,
        location VARCHAR(150) NOT NULL,
        employment_type VARCHAR(100) NOT NULL,
        description TEXT NOT NULL,
        requirements TEXT[] NOT NULL,
        status VARCHAR(50) DEFAULT 'Open',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS candidate_applications (
        id SERIAL PRIMARY KEY,
        job_id VARCHAR(100),
        full_name VARCHAR(150) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        location VARCHAR(150) NOT NULL,
        skills TEXT,
        experience VARCHAR(100),
        preferred_role VARCHAR(150),
        resume_storage_key VARCHAR(255),
        status VARCHAR(50) DEFAULT 'received',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS website_settings (
        id SERIAL PRIMARY KEY,
        setting_key VARCHAR(100) UNIQUE NOT NULL,
        setting_value TEXT NOT NULL,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);

    client.release();
    console.log('✅ Database schema verified and initialized.');
  } catch (err) {
    isConnected = false;
    console.warn('⚠️ Note: PostgreSQL not currently connected locally (' + err.message + '). API will run in resilient mock mode.');
  }
}

export function isDbConnected() {
  return isConnected;
}
