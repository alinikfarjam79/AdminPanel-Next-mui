'use client';
import { useUser } from '@/context/userContext';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { FaRegCopy } from "react-icons/fa";

import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  // const exampleEmail = 'example@gmail.com';
  // const examplePass = '123456';
  const { user, setUser } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setLoading(true);
    try {
      const res = await fetch(`https://67f53936913986b16fa3c7b5.mockapi.io/users`);
      const users = await res.json();

      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        setUser(users[0])
        setLoading(false)
        toast.success('Login successful! 🎉');
        setTimeout(() => {
          router.push('/dashboard');
        }, 1000);

      } else {
        toast.error('Invalid email or password ❌');
        setError('wrong email or password');
        setLoading(false)
        setEmail('');
        setPassword('')
      }
    } catch (err) {

      setError('Communication error');
      setLoading(false)
      setEmail('');
      setPassword('')

    }
  };
  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.info('Copied!')

    } catch (err) {
      console.error("خطا در کپی متن:", err);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #ebf8ff, #e9d5ff)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Paper elevation={12} sx={{ borderRadius: 4, overflow: 'hidden', width: '100%', maxWidth: 1000 }}>
        <Grid container>
          {/* Login Form */}
          <Grid item xs={12} md={6} sx={{ margin: 'auto' }}>
            <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', justify: 'center', alignItems: 'center', margin: 'auto', width: '100%' }}>
              <Typography variant="h4" textAlign="center" color="text.primary" fontWeight="bold" gutterBottom>
                Welcome Back
              </Typography>

              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  required
                  margin="normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  label="Password"
                  type="password"
                  fullWidth
                  required
                  margin="normal"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2, backgroundColor: 'red' }}
                  disabled={loading}
                >
                  {loading ? 'loading...' : 'Log In'}
                </Button>
              </Box>

              <Typography variant="body2" textAlign="center" color="text.secondary" sx={{ mt: 2 }}>
                Don’t have an account?{' '}
                <Button variant="text" size="small">Sign up</Button>
              </Typography>
            </Box>
          </Grid>

          {/* Test Account Info */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              backgroundColor: 'inherit',
              borderLeft: { md: '1px solid #cbd5e0' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 4,
              margin: 'auto'
            }}
          >
            <Box textAlign="center" sx={{}} className='animate-pulse' >
              <Typography variant="h6" fontWeight="bold" color="white" gutterBottom>
                Test Account
              </Typography>
              <Typography color="text.secondary">
                Use these credentials to try it out:
              </Typography>

              <Box
                sx={{
                  backgroundColor: '#fff',
                  border: '1px solid #e0e0e0',
                  borderRadius: 2,
                  px: 3,
                  py: 2,
                  mt: 3,
                  textAlign: 'left',
                  maxWidth: 300,
                  mx: 'auto',
                }}
              >
                <Typography variant="caption" color="black">Email:</Typography>
                <Box display={'flex'} gap={'21px'}><Typography fontFamily="monospace" color="black" mb={1}>example@gmail.com</Typography><FaRegCopy className='text-black cursor-pointer text-xl' onClick={() => handleCopy('example@gmail.com')} /></Box>
                <Typography variant="caption" color="black">Password:</Typography>
                <Box display={'flex'} gap={'21px'}><Typography fontFamily="monospace" color="black" mb={1}>123456</Typography><FaRegCopy className='text-black cursor-pointer text-xl' onClick={() => handleCopy('123456')} /></Box>

              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
