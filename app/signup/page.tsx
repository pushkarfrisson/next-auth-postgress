'use client';

import { useState } from 'react';

export default function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function signup() {
        const res = await fetch('/api/auth/signup', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        const data = await res.json();
        alert(data.message || data.error);
    }

    return (
        <div>
            <h2>Sign Up</h2>
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={signup}>Sign Up</button>
        </div>
    );
}
