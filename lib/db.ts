import { Pool } from 'pg';

const pool = new Pool({
    connectionString: "postgresql://postgres:Pushkar%40123%23@db.yaiwzbuiqlhlstyeqako.supabase.co:5432/postgres",
});

export const query = (text: string, params?: unknown[]) => {

    return pool.query(text, params);
};
